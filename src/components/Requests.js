import React, {useState} from 'react';
import InProgress from './InProgress.js';

function Requests({requests, setRequests}) {

	const [progress, setProgress] = useState([]);

  function handleCheckboxIP(index, array, setArray, nextArray) {

  	let newRequests = [...array]
  	newRequests[index].inProgress = !newRequests[index].inProgress
  	setArray(newRequests);

  	if (array[index].inProgress) {
  		nextArray.push(array[index]);
  		newRequests.splice(index, 1)
  		setArray(newRequests)
  	}

  	else if (!array[index].inProgress) {
  		nextArray.push(array[index]);
  		newRequests.splice(index, 1)
  		setArray(newRequests)
  	}
  }


  // task: {
  //   id,
  //   task description
  //   status: open | in progress | done
  // }

  // 3 arrays each of them are the buckets of the status
  // open array = []
  // inProgressArray = [id, id]
  // doneArray

  // 3 boxes corresponding to the statuses



  // task: {
  //   id,
  //   task
  // }


  // statusMap: {
  //   id: status
  // }

  return (
  	<div>
	    <span className='Column1'><span className="bold">Requests</span>
	    	<div> {requests.map((request, i) => (
			    			<div>
					    		<span key={i}>{request.task}</span>
					    		<input type="checkbox" label="In Progress" checked={request.inProgress} onChange={(e) => handleCheckboxIP(i, requests, setRequests, progress)}/>
                  <span>In Progress</span>
				    		</div>
		    			))}
	    	</div>
	    </span>
	   	<InProgress progress={progress} setProgress={setProgress} requests={requests} handleCheckboxIP={handleCheckboxIP} />
    </div>
  );
}

export default Requests;
