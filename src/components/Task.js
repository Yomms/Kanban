import React from 'react';
import Features from './Features.js'

function Task( {tasks, setTasks, label, moveTaskIP, moveTaskDone, moveTaskOpen, deleteOpenAPI, deleteIPAPI, deleteDoneAPI, incKey, key} ) {

  function handleChange(e, i, task) {
    let prevStatus = task.status
    task.status = e.target.value

    if(task.status === "inProgress") {
      moveTaskIP(task, i, prevStatus)
    }

    else if(task.status === "done") {
      moveTaskDone(task, i, prevStatus)
    }

    else {
      moveTaskOpen(task, i, prevStatus)
    }
    e.target.value = "open"
  }

  const deleteTask = (id, status) => {
    setTasks(tasks.filter(task => task.key !== id))
    if(status === 'open' || status === undefined){
      deleteOpenAPI(id)
    }
    else if(status ==='inProgress'){
      deleteIPAPI(id)
    }
    else{
      deleteDoneAPI(id)
    }
  }

  return (
    <div className="container">
      <h4>{label}</h4>
    	<div className="list">
        {tasks.map((task, i) => {
          return (
            <div className={task} id="task">
              <span className="individualTask">{task.task}</span>
              <Features task={task} handleChange={handleChange} deleteTask={deleteTask} i={i}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Task;