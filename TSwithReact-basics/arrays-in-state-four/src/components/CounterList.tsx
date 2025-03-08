import React, { useState } from 'react';

let initialCounters: number[] = [0, 0, 0];

function CounterList(): React.ReactElement {
	const [counters, setCounters] = useState<number[]>(initialCounters);

	const handleIncrementClick = (index: number): void => {
		/*To replace an item, create a new array with map. Inside your map call, 
    you will receive the item index as the second argument. Use it to decide 
    whether to return the original item (the first argument) or something else*/
		const nextCounters = counters.map((c, i) => {
			if (i === index) {
				return c + 1; // increment the clicked counter
			} else {
				return c; // the rest haven't changed
			}
		});

		setCounters(nextCounters);
	};

	return (
		<ul>
			{counters.map((counter, i) => (
				<li key={i}>
					{counter}
					<button onClick={() => handleIncrementClick(i)}>+1</button>
				</li>
			))}
		</ul>
	);
}

export default CounterList;
