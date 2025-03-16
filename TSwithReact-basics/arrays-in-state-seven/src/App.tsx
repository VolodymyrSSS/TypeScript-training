import React from 'react';
import BucketList from './components/BucketList';
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
			<BucketList />
		</div>
  );
}

export default App;
