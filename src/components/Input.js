import React, {useState} from 'react';
import Requests from './Requests.js';

function Input({ onSubmit }) {

	const [input, setInput] = useState('');
	// const [requests, setRequests] = useState([]);

  function handleSubmit(e) {
    if (input.length < 0) { return; }

    onSubmit(input);
    setInput('');
  }

  return (
  	<div>
  		<input onChange={(e) => setInput(e.target.value) } value={input} />
      <button onClick={handleSubmit}>Add</button>
	  </div>
  );
}

export default Input;
