import React from 'react';

function Done({done, setDone, progress, handleCheckboxD}) {

	return(
    <span className='Column3'><span className="bold">Done</span> 
    	<div> {done.map((doneR, k) => (
			    		<div>
			    			<div>{doneR.task}</div>
			    			<input type="checkbox" name="done" checked={doneR.done} onChange={(e) => handleCheckboxD(k, done, setDone, progress)} />
			    			<span>Done</span>
			    		</div>
    				))} 
    	</div>
    </span>
	)
}

export default Done;

