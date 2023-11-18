// TaskList.js

import React from 'react';

function TaskList({ tasks, onDelete, onToggle }) {
  return (
    <div>
      <h2>Task List</h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>{task.title}</span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
