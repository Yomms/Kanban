import React, {useState} from 'react'
import Status from './Features/Status.js'
import Summary from './Features/Summary.js'
import Delete from './Features/Delete.js'

function Features({task, handleChange, deleteTask, i}) {

	const [summaryInput, setSummaryInput] = useState();

	return(
		<span>
			<span><Delete deleteTask={deleteTask} task={task} i={i}/></span>
			<Status task={task} handleChange={handleChange} i={i}/>
			<div>
				{task.comment}
			</div>
			<Summary task={task} summaryInput={summaryInput} setSummaryInput={setSummaryInput}/>	
		</span>
	)
}

export default Features;

