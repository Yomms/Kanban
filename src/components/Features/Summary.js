import React, {useState} from 'react'

function Summary({task, summaryInput, setSummaryInput}) {

	// const [input, setInput] = useState();

	function handleSubmit(e, summaryInput) {
		e.preventDefault();
		task.comment = summaryInput
		setSummaryInput('')
	}

	return(
		<span>
			<form className="summary">
				<textarea value={summaryInput} className="textArea" onChange={(e) => setSummaryInput(e.target.value)}></textarea>
				<button className="Submit" onClick={(e) => handleSubmit(e, summaryInput)}>Submit</button>
		  </form>
		</span>
		)
}

export default Summary;