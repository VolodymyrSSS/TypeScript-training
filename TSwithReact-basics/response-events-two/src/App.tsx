import React from 'react';

import { useState } from 'react';
import ColorSwitch from './components/ColorSwitch';

export default function App() {
	const [clicks, setClicks] = useState<number>(0);

	function handleClickOutside(): void {
		setClicks((c) => c + 1);
	}

	function getRandomLightColor(): string {
		let r = 150 + Math.round(100 * Math.random());
		let g = 150 + Math.round(100 * Math.random());
		let b = 150 + Math.round(100 * Math.random());
		return `rgb(${r}, ${g}, ${b})`;
	}

	function handleChangeColor(): void {
		document.body.style.backgroundColor = getRandomLightColor();
	}

	return (
		<div style={{ width: '100%', height: '100%' }} onClick={handleClickOutside}>
			<ColorSwitch onChangeColor={handleChangeColor} />
			<br />
			<br />
			<h2>Clicks on the page: {clicks}</h2>
		</div>
	);
}
