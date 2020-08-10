import React, { useState } from 'react';
import Task from './components/Task.js';
import Input from './components/Input.js';

function App() {

	const [open, setOpen] = useState([]);
	const [inProgress, setInProgress] = useState([]);
	const [done, setDone] = useState([]);

	function submitTask(task) {
		let newOpen = [...open];
		newOpen.push({task});
		setOpen(newOpen);
	}

	function moveTaskOpen(task, i, array) {
		const newArray = [...open]
		newArray.push(task)
		array.splice(i, 1)
		setOpen(newArray)
		setInProgress(inProgress)
		setDone(done)
	}

	function moveTaskIP(task, i, array) {
		const newArray = [...inProgress]
		newArray.push(task)
		array.splice(i, 1)
		setInProgress(newArray)
		setOpen(open)
		setDone(done)
	}

	function moveTaskDone(task, i, array) {
		const newArray = [...done]
		newArray.push(task)
		array.splice(i, 1)
		setDone(newArray)
		setOpen(open)
		setInProgress(inProgress)
	}

  return (
  	<div>
      <h1>Kanban Board</h1>
	    <Input onSubmit={submitTask} />
      <div className="task-container">
        <Task label="Open" tasks={open} setTasks={setOpen} moveTaskIP={moveTaskIP} moveTaskDone={moveTaskDone} moveTaskOpen={moveTaskOpen}/>
        <Task label="In Progress" tasks={inProgress} setTasks={setInProgress} moveTaskIP={moveTaskIP} moveTaskDone={moveTaskDone} moveTaskOpen={moveTaskOpen}/>
        <Task label="Done" tasks={done} setTasks={setDone} moveTaskIP={moveTaskIP} moveTaskDone={moveTaskDone} moveTaskOpen={moveTaskOpen}/>
      </div>
    </div>
  );
}

export default App;
