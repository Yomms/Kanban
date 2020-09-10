import React from 'react'

function Summary({task, summaryInput, setSummaryInput}) {

	function handleSubmit(e) {
		e.preventDefault();
		task.comment = summaryInput
		setSummaryInput('')
	}

	return(
		<span>
			<form className="summary">
				<textarea value={summaryInput} className="textArea" onChange={(e) => setSummaryInput(e.target.value)}></textarea>
				<button className="Submit" onClick={(e) => handleSubmit(e)}>Submit</button>
		  </form>
		</span>
		)
}

export default Summary;