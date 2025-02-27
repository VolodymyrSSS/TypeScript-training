import React, { useState } from 'react';

// export default function FeedbackForm() {
// 	const [isSent, setIsSent] = useState(false);
// 	const [message, setMessage] = useState('');
// 	if (isSent) {
// 		return <h1>Thank you!</h1>;
// 	}
// 	return (
// 		<form
// 			onSubmit={(e) => {
// 				e.preventDefault();
// 				alert(`Sending: "${message}"`);
// 				setIsSent(true);
// 			}}
// 		>
// 			<textarea
// 				placeholder='Message'
// 				value={message}
// 				onChange={(e) => setMessage(e.target.value)}
// 			/>
// 			<br />
// 			<button type='submit'>Send</button>
// 		</form>
// 	);
// }

// Solution
// Hooks can only be called at the top level of the component function.
// Here, the first isSent definition follows this rule, but the message definition is nested in a condition.
// Hooks must be called unconditionally and always in the same order.
// It’s important that all calls to hooks happen before the first return.

export default function FeedbackForm(): React.ReactElement {
	const [isSent, setIsSent] = useState<boolean>(false);
	const [message, setMessage] = useState<string>('');

	if (isSent) {
		return <h1>Thank you!</h1>;
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				alert(`Sending: "${message}"`);
				setIsSent(true);
			}}
		>
			<p>
				<label htmlFor='userFeed'>Your feedback:</label>
			</p>
			<textarea
				id='userFeed'
				placeholder='Message'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<br />
			<button type='submit'>Send</button>
		</form>
	);
}
