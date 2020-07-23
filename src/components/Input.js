import React, {useState} from 'react';
import Requests from './Requests.js';

function Input() {

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
		    <Requests requests={requests} setRequests={setRequests} />
	    </div>
	  </div>
  );
}

export default Input;