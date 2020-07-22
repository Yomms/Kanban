import React, {useState} from 'react';

function Column3(props) {

	function handleDoneCheckbox(index) {
		// console.log("test3")
		let newRequests = [...props.done]
		newRequests[index].done = !newRequests[index].done
		props.setDone(newRequests);

		if (!props.done[index].done) {
			props.progress.push(props.done[index])
			newRequests.splice(index, 1)
			props.setDone(newRequests)
		}	
	}

	return(
    <span className='Column3'><span className="bold">Done</span> 
    	<div> {props.done.map((doneR, k) => (
			    		<div>
			    			<div>{doneR.task}</div>
			    			<input type="checkbox" name="In Progress" checked={doneR.done} onChange={(e) => handleDoneCheckbox(k)} />
			    		</div>
    				))} 
    	</div>
    </span>
	)
}

export default Column3;

