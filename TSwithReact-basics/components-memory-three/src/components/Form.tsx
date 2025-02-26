import React, { useState } from 'react';

export default function Form(): React.ReactElement {
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');

	function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		setFirstName(e.target.value);
	}

	function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		setLastName(e.target.value);
	}

	function handleReset() {
		setFirstName('');
		setLastName('');
	}

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<input
				autoFocus
				required
				type='text'
				id='firstName'
				name='firstName'
				placeholder='First name'
				value={firstName}
				onChange={handleFirstNameChange}
			/>
			<input
				required
				type='text'
				id='lastName'
				name='lastName'
				placeholder='Last name'
				value={lastName}
				onChange={handleLastNameChange}
			/>
			<h1>
				Hi, {firstName} {lastName}
			</h1>
			<button onClick={handleReset}>Reset</button>
		</form>
	);
}
