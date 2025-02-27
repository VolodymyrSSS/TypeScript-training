// import React, { useState } from 'react';

// export default function GreetForm(): React.ReactElement {
// 	const [name, setName] = useState<string>('');

// 	function handleClick() {
// 		setName(prompt('What is your name?') || '');
// 		alert(`Hello, ${name}!`);
// 	}

// 	return <button onClick={handleClick}>Let's Greet</button>;
// }

/* To fix this code, we have to remove the unnecessary state variable.
A state variable is only necessary to keep information between re-renders 
of a component. Within a single event handler, a regular variable will do 
fine. Don’t introduce state variables when a regular variable works well.
*/
import React from 'react';

export default function FeedbackForm(): React.ReactElement {
	function handleClick() {
		const name: string | null = prompt('What is your name?');
		if (name !== null) {
			alert(`Hello, ${name}!`);
		} else {
			alert('No name provided.');
		}
	}

	return <button onClick={handleClick}>Let's greet each other!</button>;
}
