import React, {useState} from 'react';

function Task( {tasks, setTasks, label, moveTaskIP, moveTaskDone, moveTaskOpen} ) {

  const [input, setInput] = useState();

  function handleChange(e, i, task) {
    task.status = e.target.value

    if(task.status === "inProgress") {
      moveTaskIP(task, i, tasks)
    }

    else if(task.status === "done") {
      moveTaskDone(task, i, tasks)
    }

    else {
      moveTaskOpen(task, i, tasks)
    }
  }

  return (
    <div className="container">
      <h4>{label}</h4>
    	<div className="list">
        {tasks.map((task, i) => {
          return (
            <div className={task} id="task"> 
              {task.task} {task.status}
              <select className="selector" onChange={ (e) => handleChange(e, i, task) } value={task.status}>
                <option value="open">Open</option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Task;