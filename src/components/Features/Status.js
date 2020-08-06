import React from 'react'

function Status({handleChange, task, i}) {

	return(
		<span>
			<select className="selector" onChange={ (e) => handleChange(e, i, task) } value={task.status}>
			  <option value="open">Open</option>
			  <option value="inProgress">In Progress</option>
			  <option value="done">Done</option>
			</select>
		</span>
		)
}

export default Status;