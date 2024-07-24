import Home from '../src/components/Home/Home';

import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='app'>
			<header className='app-header'>
				<img src={logo} className='app-logo' alt='logo' />
				<h3>The building of two pages application</h3>
				<p>This application is built using TypeScript</p>
			</header>
			<main>
				<Home username='Modest' />
			</main>
			<footer>
				<a
					className='app-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</footer>
		</div>
	);
}

export default App;
