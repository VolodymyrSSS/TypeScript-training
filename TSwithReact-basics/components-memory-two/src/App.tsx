import React from 'react';
import logo from './logo.svg';
import Gallery from './components/Gallery';

function App() {
	return (
		<div>
			<header>
				<img src={logo} alt='logo' />
				<a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
			<Gallery />
		</div>
	);
}

export default App;
