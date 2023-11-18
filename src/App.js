// App.js

import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    const taskToAdd = {
      id: tasks.length + 1,
      title: newTask.title,
      description: newTask.description,
      completed: false,
    };
    setTasks([...tasks, taskToAdd]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>Task Tracker</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTaskCompletion} />
    </div>
  );
}

export default App;
