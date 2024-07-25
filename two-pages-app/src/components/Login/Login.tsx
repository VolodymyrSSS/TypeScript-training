import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../index.css';

interface LoginProps {
	initialUsername?: string;
}

const Login: React.FC<LoginProps> = ({ initialUsername = '' }) => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	// event type React.FormEvent is a React SyntheticEvent wrapper
	// around the native JavaScript event related to forms
	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();

		if (!username || !password) {
			// Error message when form fields are empty
			setErrorMessage('Please enter both username and password.');
			return;
		}
		if (username !== 'Modest' || password !== 'modest@example.com') {
			// Error message when username or password is incorrect
			setErrorMessage('Incorrect username or password.');
			return;
		}
		setSuccessMessage('Login successful!');

		setTimeout(() => {
			// If login is successful, redirect user to Home page
			navigate(`/home/${username}`); // we are passing username as a param to Home route
		}, 2000);
	};

	return (
		<>
			<h2>Login</h2>

			{errorMessage && <div className='error'>{errorMessage}</div>}
			{successMessage && <div className='success'>{successMessage}</div>}

			<form onSubmit={handleLogin}>
				<label htmlFor='username' className='label'>
					Username:{' '}
					<input
						type='text'
						id='username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
				<br />
				<label htmlFor='password' className='label'>
					Password:{' '}
					<input
						type='password'
						id='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<br />
				<button type='submit' className='button-login'>
					Login
				</button>
			</form>
		</>
	);
};

export default Login;
