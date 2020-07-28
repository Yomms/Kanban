import React, {useState} from 'react';

function Input({ onSubmit }) {

	const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (input.length < 0) { return; }
    onSubmit(input);
    setInput('');
  }

  return (
  	<div>
      <form>
    		<input onChange={(e) => setInput(e.target.value) } value={input} />
        <button onClick={handleSubmit}>Add</button>
      </form>
	  </div>
  );
}

export default Input;