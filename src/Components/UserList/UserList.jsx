import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './index.css';

const UserList = ({ users, setUsers }) => {
  useEffect(() => {
    if (users.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(() => setUsers([]));
    }
    
  }, [setUsers]);

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: 'DELETE' })
      .then(() => {
        setUsers(users.filter(u => u.id !== id));
      });
  };

  return (
    <div className="user-list-container">
      <h2 className="user-list-title">User List</h2>
      <table className="user-table">
        <thead>
          <tr className="table-header-row">
            <th className="table-header-cell">Id</th>
            <th className="table-header-cell">First Name</th>
            <th className="table-header-cell">Last Name</th>
            <th className="table-header-cell">Email</th>
            <th className="table-header-cell">Department</th>
            <th className="table-header-cell">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email, department }) => {
            const [firstName, ...lastNameParts] = (name || '').split(' ');
            const lastName = lastNameParts.join(' ');
            return (
              <tr key={id} className="table-row">
                <td className="table-cell" data-label="Id">{id}</td>
                <td className="table-cell" data-label="First Name">{firstName}</td>
                <td className="table-cell" data-label="Last Name">{lastName}</td>
                <td className="table-cell" data-label="Email">{email || 'N/A'}</td>
                <td className="table-cell" data-label="Department">{department || 'N/A'}</td>
                <td className="table-cell actions-cell" data-label="Actions">
                  <Link to={`/update/${id}`} title="Update User" className="action-link">
                    <EditIcon className="action-icon edit-icon" />
                  </Link>
                  <DeleteIcon
                    className="action-icon delete-icon"
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this user?')) {
                        handleDelete(id);
                      }
                    }}
                    title="Delete User"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
