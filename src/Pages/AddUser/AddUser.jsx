import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from '../../Components/UserForm/UserForm';
import "./index.css"

const AddUser = ({ users, setUsers }) => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleAddUser = (userData) => {
    const newUser = {
      id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1,
      ...userData,
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then(res => res.json())
      .then(() => {
        setUsers([...users, newUser]);
        setSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 2000); // redirect after 2 seconds
      });
  };

  return (
    <div className="add-user-container">
      <h2 className="form-title">Add User</h2>
      {success ? (
        <p className="success-message">User added successfully! Redirecting...</p>
      ) : (
        <UserForm onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export default AddUser;
