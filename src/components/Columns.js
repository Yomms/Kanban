import React, {useState, useEffect} from 'react';
import Card from './Card.js';

function Columns() {

	const [input, setInput] = useState();
	const [requests, setRequests] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setRequests([...requests, {task:input, inProgress: false, done: false}])
    setInput('')
    console.log("submitted")
  }

  return (
  	<div>
  		<form className="form" onSubmit={(e) => handleSubmit(e)}>
  			<input onChange={(e) => setInput(e.target.value) } value={input} />
  			<button>Task</button>
  		</form>
  		<div>
		    <Card requests={requests} setRequests={setRequests} />
	    </div>
	  </div>
  );
}

export default Columns;