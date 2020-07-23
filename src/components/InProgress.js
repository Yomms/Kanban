import React, {useState} from 'react';
import Done from './Done.js'

function InProgress({progress, setProgress, requests, handleCheckboxIP}) {

	const [done, setDone] = useState([]);

	function handleCheckboxD(index, array, setArray, nextArray) {

  	let newRequests = [...array]
  	newRequests[index].done = !newRequests[index].done
  	setArray(newRequests);

  	if (array[index].done) {
  		nextArray.push(array[index]);
  		newRequests.splice(index, 1)
  		setArray(newRequests)
  	}

  	else if (!done[index].done) {
			progress.push(done[index])
			newRequests.splice(index, 1)
			setDone(newRequests)
		}	
  }
	
	return (
		<div>
			<span className='Column2'><span className="bold">In Progress</span> 
				<div> {progress.map((progressR, j) => (
								<div>
									<div>{progressR.task}</div>
									<input type="checkbox" label="In Progress" checked={progressR.inProgress} onChange={(e) => handleCheckboxIP(j, progress, setProgress, requests)} />
									<span>In Progress</span>
									<input type="checkbox" label="done" checked={progressR.done} onChange={(e) => handleCheckboxD(j, progress, setProgress, done)} />
									<span>Done</span>
								</div>
							))} 
				</div>
			</span>
			<Done done={done} setDone={setDone} progress={progress} handleCheckboxD={handleCheckboxD} />
		</div>
	)
}

export default InProgress;

