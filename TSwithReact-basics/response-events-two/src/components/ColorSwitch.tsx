import React from 'react';

interface ColorSwitchProps {
	onChangeColor: () => void;
}

export default function ColorSwitch({
	onChangeColor,
}: ColorSwitchProps): React.ReactElement {
	return (
		<button
			onClick={(e) => {
				e.stopPropagation(); // this event doesn't propagate up
				onChangeColor();
			}}
		>
			Change color
		</button>
	);
}
