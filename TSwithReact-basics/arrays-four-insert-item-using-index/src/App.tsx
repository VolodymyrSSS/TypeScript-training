import React from 'react';
import CounterList from './components/CounterList';

import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
			<h2>Just three adding counters</h2>
			<CounterList />
		</div>
	);
}

export default App;
