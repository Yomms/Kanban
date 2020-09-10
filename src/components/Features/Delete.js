import React from 'react'

function Delete({deleteTask, task, i}) {

	return(
		<span>
			<span className="delete" onClick={() => deleteTask(i, task.status)}>X </span>
		</span>
		)
}

export default Delete;