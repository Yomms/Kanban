import React, {useState} from 'react';
import Column2 from './Column2.js';

function Requests({requests, setRequests}) {

	const [progress, setProgress] = useState([]);

  function handleRequestCheckbox(index) {
  	let newRequests = [...requests]
  	newRequests[index].inProgress = !newRequests[index].inProgress
  	setRequests(newRequests);
  	console.log(requests[index].inProgress)

  	if (requests[index].inProgress) {
  		progress.push(requests[index]);
  		newRequests.splice(index, 1)
  		setRequests(newRequests)
  	}
  }

  return (
  	<div>
	    <span className='Column1'><span className="bold">Requests</span>
	    	<div> {requests.map((request, i) => (
			    			<div>
					    		<span key={i}>{request.task}</span>
					    		<input type="checkbox" label="In Progress" checked={request.inProgress} onChange={(e) => handleRequestCheckbox(i)}/>
                  <span>In Progress</span>
				    		</div>
		    			))}
	    	</div>
	    </span>    
	   	<Column2 progress={progress} setProgress={setProgress} requests={requests} />
    </div>
  );
}

export default Requests;