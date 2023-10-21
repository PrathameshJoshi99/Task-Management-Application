import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskCreate() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    assignedUser: '',
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch a list of registered users from the server
    axios.get('/api/users/')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        // Handle error
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTaskCreation = async () => {
    try {
      const response = await axios.post('/api/tasks/', formData);
      // Handle successful task creation (e.g., clear form)
    } catch (error) {
      // Handle task creation error
    }
  };

  return (
    <div>
      <h2>Create Task</h2>
      <input type="text" name="title" placeholder="Title" onChange={handleInputChange} />
      <textarea name="description" placeholder="Description" onChange={handleInputChange} />
      <select name="assignedUser" onChange={handleInputChange}>
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
      <button onClick={handleTaskCreation}>Create Task</button>
    </div>
  );
}

export default TaskCreate;
