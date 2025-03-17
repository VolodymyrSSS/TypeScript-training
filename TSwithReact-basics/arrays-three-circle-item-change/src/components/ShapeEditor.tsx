import React, { useState } from 'react';

interface ShapeProps {
	id: number;
	type: 'circle' | 'square';
	x: number;
	y: number;
}

let initialShapes: ShapeProps[] = [
	{ id: 0, type: 'circle', x: 50, y: 100 },
	{ id: 1, type: 'square', x: 150, y: 100 },
	{ id: 2, type: 'circle', x: 250, y: 100 },
];

export default function ShapeEditor(): React.ReactElement {
	const [shapes, setShapes] = useState<ShapeProps[]>(initialShapes);

	function handleClick() {
		const nextShapes = shapes.map((shape) => {
			if (shape.type === 'square') {
				return shape; // no change
			} else {
				// Return a new circle 50px below
				return {
					...shape,
					y: shape.y + 50,
				};
			}
		});
		// Re-render with the new array
		setShapes(nextShapes);
	}

	return (
		<>
			<button onClick={handleClick}>Move circles down!</button>
			{shapes.map((shape) => (
				<div
					key={shape.id}
					style={{
						background: 'purple',
						position: 'absolute',
						left: shape.x,
						top: shape.y,
						borderRadius: shape.type === 'circle' ? '50%' : '',
						width: 20,
						height: 20,
					}}
				/>
			))}
		</>
	);
}
