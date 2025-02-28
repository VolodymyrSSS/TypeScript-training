import React from 'react';
import TrafficLight from './components/TrafficLight';
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
			<TrafficLight />
		</div>
	);
}

export default App;
