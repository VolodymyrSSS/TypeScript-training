import React from 'react';
import TestCase from './components/TestCase';

import './App.css';

function increment(n: number) {
	return n + 1;
}
increment.toString = () => 'n => n+1';

function App(): React.ReactElement {
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
			<hr />

			<TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
			<hr />
			<TestCase
				baseState={0}
				queue={[increment, increment, increment]}
				expected={3}
			/>
			<hr />
			<TestCase baseState={0} queue={[5, increment]} expected={6} />
			<hr />
			<TestCase baseState={0} queue={[5, increment, 42]} expected={42} />
		</div>
	);
}

export default App;
