import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddUser from './Pages/AddUser/AddUser';
import UserList from './Components/UserList/UserList';
import UpdateUser from './Pages/UpdateUser/UpdateUser';
import "./App.css"


const App = () => {
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <nav>
  <Link to="/" className={({isActive}) => isActive ? 'active' : ''}>User List</Link>
  <Link to="/add" className={({isActive}) => isActive ? 'active' : ''}>Add User</Link>
</nav>

      <Routes>
        <Route path="/" element={<UserList users={users} setUsers={setUsers} />} />
        <Route path="/add" element={<AddUser users={users} setUsers={setUsers} />} />
        <Route path="/update/:id" element={<UpdateUser users={users} setUsers={setUsers} />} />
        
      </Routes>
    </Router>
  );
};

export default App;
