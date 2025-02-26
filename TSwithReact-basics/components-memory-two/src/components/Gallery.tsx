import React from 'react';
import { useState } from 'react';
import { sculptureList, Sculpture } from '../data';

function Gallery(): React.ReactElement {
	const [index, setIndex] = useState<number>(0);
	const [showMore, setShowMore] = useState<boolean>(false);

	let hasPrevious = index > 0; // щонайменше є 2а елемента
	let hasNext = index < sculptureList.length - 1;

	function handlePrevClick() {
		if (hasPrevious) {
			setIndex(index - 1);
		}
	}

	function handleNextClick() {
		if (hasNext) {
			setIndex(index + 1);
		}
	}

	function handleMoreClick() {
		setShowMore(!showMore);
	}

	let sculpture: Sculpture = sculptureList[index];

	return (
		<>
			<button onClick={handlePrevClick} disabled={!hasPrevious}>
				Previous
			</button>
			<button onClick={handleNextClick} disabled={!hasNext}>
				Next
			</button>
			<h2>
				<i>{sculpture.name} </i>
				by {sculpture.artist}
			</h2>
			<h3>
				({index + 1} of {sculptureList.length})
			</h3>
			<button onClick={handleMoreClick}>
				{showMore ? 'Hide' : 'Show'} details
			</button>
			{showMore && <p>{sculpture.description}</p>}
			<img src={sculpture.url} alt={sculpture.alt} />
		</>
	);
}

export default Gallery;
