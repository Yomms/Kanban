import React, {useState, useEffect} from 'react';
import Column2 from './Column2.js';

function Card(props) {

	const [progress, setProgress] = useState([]);

  function handleRequestCheckbox(index) {
  	let newRequests = [...props.requests]
  	newRequests[index].inProgress = !newRequests[index].inProgress
  	props.setRequests(newRequests);
  	console.log(props.requests[index].inProgress)

  	if (props.requests[index].inProgress) {
  		progress.push(props.requests[index]);
  		newRequests.splice(index, 1)
  		props.setRequests(newRequests)
  	}
  }

  return (
  	<div>
	    <span className='Column1'><span className="bold">Requests</span>
	    	<div> {props.requests.map((request, i) => (
			    			<div>
					    		<span key={i}>{request.task}</span>
					    		<input type="checkbox" name="In Progress" checked={request.inProgress} onChange={(e) => handleRequestCheckbox(i)}/>
				    		</div>
		    			))}
	    	</div>
	    </span>    
	   	<Column2 progress={progress} setProgress={setProgress} {...props} />
    </div>
  );
}

export default Card;