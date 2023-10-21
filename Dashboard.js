import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch user's tasks from the server
    axios.get('/api/tasks/')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        // Handle error
      });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
