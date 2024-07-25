import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

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
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/home/:username' element={<Home username='Modest' />} />
					{/* Redirect users to Login component by default */}
					<Route path='*' element={<Login />} />
				</Routes>
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
