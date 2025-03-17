import React, { useState } from 'react';

interface Artist {
	id: number;
	name: string;
}

let initialArtists: Artist[] = [
	{ id: 0, name: 'Marta Colvin Andrade' },
	{ id: 1, name: 'Lamidi Olonade Fakeye' },
	{ id: 2, name: 'Louise Nevelson' },
];

export default function List(): React.ReactElement {
	const [artists, setArtists] = useState<Artist[]>(initialArtists);

	return (
		<>
			<h1>Inspiring sculptors:</h1>
			<ul>
				{artists.map((artist) => (
					<li key={artist.id}>
						{artist.name}{' '}
						<button
							onClick={() => {
								// Filter out the artist to delete
								setArtists(artists.filter((a) => a.id !== artist.id));
							}}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
}
