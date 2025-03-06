import React, { useState } from 'react';

interface Artist {
	id: number;
	name: string;
}

let nextId = 0;

export default function List(): React.ReactElement {
	const [name, setName] = useState<string>('');
	const [artists, setArtists] = useState<Artist[]>([]);

	return (
		<>
			<h1>Inspiring sculptors:</h1>

			<input
				type='text'
				name='sculptorName'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<button
				onClick={() => {
					// artists.push({id: nextId++,name: name}); // this push() will mutate an array

					// Instead, create a new array which contains the existing items and a new item at the end
					const newArtist: Artist = {
						id: nextId++,
						name: name,
					};
					setArtists([...artists, newArtist]);
					setName(''); // Optionally reset the name input
				}}
			>
				Add
			</button>

			<ul>
				{artists.map((artist) => (
					<li key={artist.id}>{artist.name}</li>
				))}
			</ul>
		</>
	);
}
