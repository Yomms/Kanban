import React from 'react';

function Column3({done, setDone, progress}) {

	function handleDoneCheckbox(index) {
		// console.log("test3")
		let newRequests = [...done]
		newRequests[index].done = !newRequests[index].done
		setDone(newRequests);

		if (!done[index].done) {
			progress.push(done[index])
			newRequests.splice(index, 1)
			setDone(newRequests)
		}	
	}

	return(
    <span className='Column3'><span className="bold">Done</span> 
    	<div> {done.map((doneR, k) => (
			    		<div>
			    			<div>{doneR.task}</div>
			    			<input type="checkbox" name="done" checked={doneR.done} onChange={(e) => handleDoneCheckbox(k)} />
			    			<span>Done</span>
			    		</div>
    				))} 
    	</div>
    </span>
	)
}

export default Column3;

