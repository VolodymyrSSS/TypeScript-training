import Comments from '../src/components/Comments/Comments';
import { comments } from './data';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Comments comments={comments} />
		</div>
	);
}

export default App;
