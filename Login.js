import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login/', formData);
      // Handle successful login (e.g., redirect to dashboard)
    } catch (error) {
      // Handle login error
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
