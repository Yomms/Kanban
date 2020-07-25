import React from 'react';
import Input from './components/Input.js';


function App() {
  const [openTasks, setOpenTasks] = React.useState([]);
  const [inProgressTasks, setInProgressTasks] = React.useState([]);
  const [doneTasks, setDoneTasks] = React.useState([]);

  function submitTask(task) {
    const newOpenTasks = [...openTasks];
    newOpenTasks.push({
      task,
    });
    setOpenTasks(newOpenTasks)
  }

  return (
    <div>
      <h1>Kanban Board</h1>
      <Input onSubmit={submitTask} />
      <div className="task-container">
        <Task label="Open" tasks={openTasks} />
        <Task label="In Progress" tasks={inProgressTasks} />
        <Task label="Done" tasks={doneTasks} />
      </div>
    </div>
  );
}


function Task({ label, tasks }) {
  return (
    <div className="container">
      <h4>{label}</h4>

      <div className="list">
        {tasks.map((task) => {
          return (
            <div key={task.task} style={{ padding: '15px', border: '1px solid black', marginBottom: '10px' }}>
              {task.task}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
