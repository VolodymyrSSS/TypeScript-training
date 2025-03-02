import React from 'react';
import RequestTracker from './components/RequestTracker';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
			<RequestTracker />
		</div>
	);
}

export default App;
