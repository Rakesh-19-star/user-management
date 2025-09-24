import React, { useState, useEffect } from 'react';
import "./index.css"

const UserForm = ({ initialData = {}, onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');

  useEffect(() => {
    if (initialData.name) {
      const parts = initialData.name.split(' ');
      setFirstName(parts[0]);
      setLastName(parts.slice(1).join(' '));
    }

    if (initialData.email !== undefined && initialData.email !== email) {
      setEmail(initialData.email);
    }

    if (initialData.department !== undefined && initialData.department !== department) {
      setDepartment(initialData.department);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = `${firstName.trim()} ${lastName.trim()}`.trim();
    onSubmit({ name, email: email.trim(), department: department.trim() });
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-group">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input
          id="firstName"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input
          id="lastName"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="department" className="form-label">Department</label>
        <input
          id="department"
          type="text"
          placeholder="Department (Optional)"
          value={department}
          onChange={e => setDepartment(e.target.value)}
          className="form-input"
        />
      </div>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default UserForm;