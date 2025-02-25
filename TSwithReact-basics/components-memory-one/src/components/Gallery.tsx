import React from 'react';

import { useState } from 'react';
import { sculptureList, Sculpture } from '../data';

export default function Gallery(): React.ReactElement {
	const [index, setIndex] = useState<number>(0);
	const [showMore, setShowMore] = useState<boolean>(false);

	function handleNextClick() {
		setIndex(index + 1);
	}
	// const handleNextClick = () => {
	// 	setIndex((currentIndex) => (currentIndex + 1) % sculptureList.length); // Loop back to the start
	// };

	function handleMoreClick() {
		setShowMore(!showMore);
	}

	let sculpture: Sculpture = sculptureList[index];
	// const sculpture: Sculpture = sculptureList[index % sculptureList.length]; // safe indexing, assuming there's at least one item and prevent out of range errors

	return (
		<>
			<button onClick={handleNextClick}>Next</button>
			<h2>
				<i>{sculpture.name} </i> by {sculpture.artist}
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
