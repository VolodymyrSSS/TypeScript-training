import React from 'react';
import Toolbar from './components/Toolbar';

function App(): React.ReactElement {
	return (
		<Toolbar
			onPlayMovie={() => alert('Playing!')}
			onUploadImage={() => alert('Uploading!')}
		/>
	);
}

export default App;
