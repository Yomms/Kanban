import React, {useState} from 'react';
import Column3 from './Column3.js'

function Column2(props) {

	const [done, setDone] = useState([]);

	function handleInProgressCheckbox(index) {
		let newRequests = [...props.progress]
		newRequests[index].inProgress = !newRequests[index].inProgress
		props.setProgress(newRequests);

		if (!props.progress[index].inProgress) {
			props.requests.push(props.progress[index])
			newRequests.splice(index, 1)
			props.setProgress(newRequests)
		}
	}

	function handleDoneCheckbox(index) {
		let newRequests = [...props.progress]
		newRequests[index].done = !newRequests[index].done
		props.setProgress(newRequests);

		if (props.progress[index].done && props.progress[index].inProgress) {
			done.push(props.progress[index])
			newRequests.splice(index, 1)
			props.setProgress(newRequests)
		}	
	}
	
	return(
		<div>
			<span className='Column2'><span className="bold">In Progress</span> 
				<div> {props.progress.map((progressR, j) => (
								<div>
									<div>{progressR.task}</div>
									<input type="checkbox" name="In Progress" checked={progressR.inProgress} onChange={(e) => handleInProgressCheckbox(j)} />
									<input type="checkbox" name="done" checked={progressR.done} onChange={(e) => handleDoneCheckbox(j)} />
								</div>
							))} 
				</div>
			</span>
			<Column3 done={done} setDone={setDone} {...props} />
		</div>
	)
}

export default Column2;

