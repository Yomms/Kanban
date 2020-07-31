import React, {useState} from 'react';
import Features from './Features.js'

function Task( {tasks, setTasks, label, moveTaskIP, moveTaskDone, moveTaskOpen} ) {

  const [input, setInput] = useState();

  function handleChange(e, i, task) {
    task.status = e.target.value
    console.log(task)

    if(task.status === "inProgress") {
      moveTaskIP(task, i, tasks)
    }

    else if(task.status === "done") {
      moveTaskDone(task, i, tasks)
    }

    else {
      moveTaskOpen(task, i, tasks)
    }
    e.target.value = "open"
  }

  return (
    <div className="container">
      <h4>{label}</h4>
    	<div className="list">
        {tasks.map((task, i) => {
          return (
            <div className={task} id="task"> 
              {task.task}
              <Features task={task} handleChange={handleChange} i={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Task;