import React, { useState, useEffect } from 'react';
import Task from './components/Task.js';
import Input from './components/Input.js';

function App() {

	const [open, setOpen] = useState([]);
	const [inProgress, setInProgress] = useState([]);
	const [done, setDone] = useState([]);

	useEffect(() => {
		fetch('http://localhost:9000/', {
			method: 'GET'
		})
		.then(response => response.json())
		.then(respObj => {
			setOpen(respObj.open)
			setInProgress(respObj.inProgress)
			setDone(respObj.done)
		})
	},[])
	
	function submitTask(task) {
		submitOpenAPI({task});
	}

	function submitOpenAPI(task) {
		fetch('http://localhost:9000/addopen', {
		  method: 'POST', // or 'PUT'
		    headers: {
		      'Content-Type': 'application/json',
		    },
		    body: JSON.stringify(task),
		  })
		  .then(response => response.json())
		  .then(openResponse => {
		    setOpen(openResponse);
		  })
		  .catch((error) => {
		    console.error('Error:', error);
		});
	}

	function submitIPAPI(task) {
		fetch('http://localhost:9000/addip', {
		  method: 'POST', // or 'PUT'
		    headers: {
		      'Content-Type': 'application/json',
		    },
		    body: JSON.stringify(task),
		  })
		  .then(response => response.json())
		  .then(ipResponse => {
		    setInProgress(ipResponse);
		  })
		  .catch((error) => {
		    console.error('Error:', error);
		});
	}

	function submitdoneAPI(task) {
		fetch('http://localhost:9000/adddone', {
		  method: 'POST', // or 'PUT'
		    headers: {
		      'Content-Type': 'application/json',
		    },
		    body: JSON.stringify(task),
		  })
		  .then(response => response.json())
		  .then(doneResponse => {
		    setDone(doneResponse);
		  })
		  .catch((error) => {
		    console.error('Error:', error);
		});
	}

	function deleteOpenAPI(id) {
	  fetch('http://localhost:9000/deleteopen', {
	    method: 'POST', // or 'PUT'
	      headers: {
	        'Content-Type': 'application/json',
	      },
	      body: JSON.stringify([id]),
	    })
	    .then(response => response.json())
	    .then(openResponse => {
	      setOpen(openResponse);
	    })
	    .catch((error) => {
	      console.error('Error:', error);
	  });
	}

	function deleteIPAPI(id) {
	  fetch('http://localhost:9000/deleteip', {
	    method: 'POST', // or 'PUT'
	      headers: {
	        'Content-Type': 'application/json',
	      },
	      body: JSON.stringify([id]),
	    })
	    .then(response => response.json())
	    .then(openResponse => {
	      setInProgress(openResponse);
	    })
	    .catch((error) => {
	      console.error('Error:', error);
	  });
	}

	function deleteDoneAPI(id) {
	  fetch('http://localhost:9000/deletedone', {
	    method: 'POST', // or 'PUT'
	      headers: {
	        'Content-Type': 'application/json',
	      },
	      body: JSON.stringify([id]),
	    })
	    .then(response => response.json())
	    .then(openResponse => {
	      setDone(openResponse);
	    })
	    .catch((error) => {
	      console.error('Error:', error);
	  });
	}

	function moveTaskOpen(task, i, prevStatus) {
		// const newArray = [...open]
		// newArray.push(task)
		// array.splice(i, 1)
		// setOpen(newArray)
		// setInProgress(inProgress)
		// setDone(done)
		if(prevStatus === 'inProgress') {
			deleteIPAPI(i)
		}
		else {
			deleteDoneAPI(i)
		}
		submitOpenAPI(task)
	}

	function moveTaskIP(task, i, prevStatus) {
		// const newArray = [...inProgress]
		// newArray.push(task)
		// array.splice(i, 1)
		// setInProgress(newArray)
		// setOpen(open)
		// setDone(done)
		if(prevStatus === 'done') {
			deleteDoneAPI(i)
		}
		else {
			deleteOpenAPI(i)
		}
		submitIPAPI(task)
	}

	function moveTaskDone(task, i, prevStatus) {
		// const newArray = [...done]
		// newArray.push(task)
		// array.splice(i, 1)
		// setDone(newArray)
		// setOpen(open)
		// setInProgress(inProgress)
		if(prevStatus === 'inProgress') {
			deleteIPAPI(i)
		}
		else {
			deleteOpenAPI(i)
		}
		submitdoneAPI(task)
	}

  return (
  	<div>
      <h1>Kanban Board</h1>
	    <Input onSubmit={submitTask} />
      <div className="task-container">
        <Task label="Open" tasks={open} setTasks={setOpen} moveTaskIP={moveTaskIP} moveTaskDone={moveTaskDone} moveTaskOpen={moveTaskOpen} deleteOpenAPI={deleteOpenAPI} deleteIPAPI={deleteIPAPI} deleteDoneAPI={deleteDoneAPI} />
        <Task label="In Progress" tasks={inProgress} setTasks={setInProgress} moveTaskIP={moveTaskIP} moveTaskDone={moveTaskDone} moveTaskOpen={moveTaskOpen} deleteOpenAPI={deleteOpenAPI} deleteIPAPI={deleteIPAPI} deleteDoneAPI={deleteDoneAPI} />
        <Task label="Done" tasks={done} setTasks={setDone} moveTaskIP={moveTaskIP} moveTaskDone={moveTaskDone} moveTaskOpen={moveTaskOpen} deleteOpenAPI={deleteOpenAPI} deleteIPAPI={deleteIPAPI} deleteDoneAPI={deleteDoneAPI} />
      </div>
    </div>
  );
}

export default App;
