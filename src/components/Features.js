import React, {useState} from 'react'
import Status from './Features/Status.js'
import Summary from './Features/Summary.js'

function Features({task, handleChange, i}) {

	const [summaryInput, setSummaryInput] = useState();

	return(
		<span>
			<Status task={task} handleChange={handleChange} i={i} />
			<div>
				{task.comment}
			</div>
			<Summary task={task} summaryInput={summaryInput} setSummaryInput={setSummaryInput}/>	
		</span>
	)
}

export default Features;