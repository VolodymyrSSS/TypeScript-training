import React, { useState } from 'react';

interface ArtistsProps {
	id: number;
	name: string;
}

let nextId: number = 3;

const initialArtists: ArtistsProps[] = [
	{ id: 0, name: 'Marta Colvin Andrade' },
	{ id: 1, name: 'Lamidi Olonade Fakeye' },
	{ id: 2, name: 'Louise Nevelson' },
];

function List(): React.ReactElement {
	const [name, setName] = useState<string>('');
	const [artists, setArtists] = useState<ArtistsProps[]>(initialArtists);

	function handleClick() {
		if (!name.trim()) {
			alert('Please enter a name.');
			return;
		}	

		const insertAt = 1; // could be any index for insertion or it can be written like
		// const insertAt = Math.min(1, artists.length); // to ensure insertAt lies within the valid range of the artists array

		/* To insert an item, you will create an array that spreads the slice 
       before the insertion point, then the new item, and then the rest of 
       the original array.*/
		const nextArtists = [
			...artists.slice(0, insertAt), // Items before the insertion point:
			{ id: nextId++, name: name }, // new item
			...artists.slice(insertAt), // items after the insertion point:
		];

		setArtists(nextArtists);

		setName(''); // clearing the field immediately or
		// optionally keep the input untouched like: alert(`${name} added successfully.`);
	}

	return (
		<>
			<h1>Inspiring sculptors:</h1>
			<input
				type='text'
				name='sculptorName'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={handleClick}>Insert</button>
			<ul>
				{artists.map((artist) => (
					<li key={artist.id}>{artist.name}</li>
				))}
			</ul>
		</>
	);
}

export default List;
