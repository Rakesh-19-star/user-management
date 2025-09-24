import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserForm from '../../Components/UserForm/UserForm';
import "./index.css"

const UpdateUser = ({ users, setUsers }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const userToEdit = users.find(u => u.id === Number(id)) || {};

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdate = (userData) => {
    const updatedUser = { ...userToEdit, ...userData };

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          const errorMsg = (data && data.message) || res.statusText || 'Update failed';
          throw new Error(errorMsg);
        }
        return data;
      })
      .then(() => {
        setUsers(users.map(u => (u.id === Number(id) ? updatedUser : u)));
        setSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      })
      .catch((err) => {
        setError(err.message || 'Error updating user');
      });
  };

  return (
    <div className="update-user-container">
      <h2 className="form-title">Update User</h2>
      {success && <p className="success-message">User updated successfully! Redirecting...</p>}
      {error && <p className="error-message">{error}</p>}
      {!success && <UserForm initialData={userToEdit} onSubmit={handleUpdate} />}
    </div>
  );
};

export default UpdateUser;
