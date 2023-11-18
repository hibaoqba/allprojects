import React, { useState } from 'react';
function AddTask ({ onAdd }) {
    const [newTask, setNewTask] = useState({ title: '', description: '' });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
    };
  
    const handleAddTask = () => {
      if (newTask.title.trim() !== '' && newTask.description.trim() !== '') {
        onAdd(newTask);
        setNewTask({ title: '', description: '' });
      }
    };
  
    return (
      <div>
        <h2>Add Task</h2>
        <form>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newTask.title}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={newTask.description}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="button" onClick={handleAddTask}>
            Add Task
          </button>
        </form>
      </div>
    );
  };
  
  export default AddTask;