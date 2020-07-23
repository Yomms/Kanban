import React, {useState} from 'react';
import Column3 from './Column3.js'

function Column2({progress, setProgress, requests}) {

	const [done, setDone] = useState([]);

	function handleInProgressCheckbox(index) {
		let newRequests = [...progress]
		newRequests[index].inProgress = !newRequests[index].inProgress
		setProgress(newRequests);

		if (!progress[index].inProgress) {
			requests.push(progress[index])
			newRequests.splice(index, 1)
			setProgress(newRequests)
		}
	}

	function handleDoneCheckbox(index) {
		let newRequests = [...progress]
		newRequests[index].done = !newRequests[index].done
		setProgress(newRequests);

		if (progress[index].done && progress[index].inProgress) {
			done.push(progress[index])
			newRequests.splice(index, 1)
			setProgress(newRequests)
		}	
	}
	
	return(
		<div>
			<span className='Column2'><span className="bold">In Progress</span> 
				<div> {progress.map((progressR, j) => (
								<div>
									<div>{progressR.task}</div>
									<input type="checkbox" label="In Progress" checked={progressR.inProgress} onChange={(e) => handleInProgressCheckbox(j)} />
									<span>In Progress</span>
									<input type="checkbox" label="done" checked={progressR.done} onChange={(e) => handleDoneCheckbox(j)} />
									<span>Done</span>
								</div>
							))} 
				</div>
			</span>
			<Column3 done={done} setDone={setDone} progress={progress} />
		</div>
	)
}

export default Column2;

