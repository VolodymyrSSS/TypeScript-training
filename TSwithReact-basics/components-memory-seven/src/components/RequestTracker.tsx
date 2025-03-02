import React, { useState } from 'react';

import { delay } from '../utils/delay';

// The Task
// function RequestTracker() {
//   const [pending, setPending] = useState(0);
//   const [completed, setCompleted] = useState(0);

//   async function handleClick() {
//     setPending(p => p + 1);
//     await delay(3000);
//     setPending(pending - 1);
//     setCompleted(c => c + 1);
//   }

//   return (
//     <>
//       <h3>
//         Pending: {pending}
//       </h3>
//       <h3>
//         Completed: {completed}
//       </h3>
//   }
// }

function RequestTracker(): React.ReactElement {
	const [pending, setPending] = useState<number>(0);
	const [completed, setCompleted] = useState<number>(0);

	async function handleClick(): Promise<void> {
		setPending((p) => p + 1);
		await delay(3000);
		setPending((pending) => pending - 1); // using function to get latest state
		setCompleted((c) => c + 1);
	}

	return (
		<>
			<h3>Pending: {pending}</h3>
			<h3>Completed: {completed}</h3>
			<button onClick={handleClick}>Buy</button>
		</>
	);
}

export default RequestTracker;
