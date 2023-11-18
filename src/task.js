  export default function Task({ task, onDelete, onToggle }) {
    return (
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
        <button onClick={() => onToggle(task.id)}>Toggle Completion</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    ); 
    }
  