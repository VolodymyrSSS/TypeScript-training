import React, { useState, ChangeEvent } from 'react';

interface Artwork {
	title: string;
	city: string;
	image: string;
}

interface PersonProps {
	name: string;
	artwork: Artwork;
}

export default function Form(): React.ReactElement {
	const [person, setPerson] = useState<PersonProps>({
		name: 'Niki de Saint Phalle',
		artwork: {
			title: 'Blue Nana',
			city: 'Hamburg',
			image: 'https://i.imgur.com/Sd1AgUOm.jpg',
		},
	});

	function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
		setPerson({
			...person,
			name: e.target.value,
		});
	}

	function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
		setPerson({
			...person,
			artwork: {
				...person.artwork,
				title: e.target.value,
			},
		});
	}

	function handleCityChange(e: ChangeEvent<HTMLInputElement>) {
		setPerson({
			...person,
			artwork: {
				...person.artwork,
				city: e.target.value,
			},
		});
	}

	function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
		setPerson({
			...person,
			artwork: {
				...person.artwork,
				image: e.target.value,
			},
		});
	}

	return (
		<>
			<label>
				Name:
				<input
					type='text'
					name='artistName'
					value={person.name}
					onChange={handleNameChange}
				/>
			</label>
			<label>
				Title:
				<input
					type='text'
					name='artName'
					value={person.artwork.title}
					onChange={handleTitleChange}
				/>
			</label>
			<label>
				City:
				<input
					type='text'
					name='cityName'
					value={person.artwork.city}
					onChange={handleCityChange}
				/>
			</label>
			<label>
				Image:
				<input
					type='text'
					name='imgName'
					value={person.artwork.image}
					onChange={handleImageChange}
				/>
			</label>
			<p>
				<i>{person.artwork.title}</i>
				{' by '}
				{person.name}
				<br />
				(located in {person.artwork.city})
			</p>
			<img src={person.artwork.image} alt={person.artwork.title} />
		</>
	);
}
