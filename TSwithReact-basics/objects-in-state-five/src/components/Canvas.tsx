import React, { useState, ChangeEvent } from 'react';
import Background from './Background';
import Box from './Box';

interface Position {
	x: number;
	y: number;
}

interface Shape {
	color: string;
	position: Position;
}

const initialPosition: Position = {
	x: 0,
	y: 0,
};

// export default function Canvas() {
//   const [shape, setShape] = useState({
//     color: 'orange',
//     position: initialPosition
//   });

//   function handleMove(dx, dy) {
//     setShape({
//       position.x += dx;
//       position.y += dy;
//     });

//   }

//   function handleColorChange(e) {
//     setShape({
//       ...shape,
//       color: e.target.value
//     });
//   }

//   return (
//     <>
//       <select
//         value={shape.color}
//         onChange={handleColorChange}
//       >
//         <option value="orange">orange</option>
//         <option value="lightpink">lightpink</option>
//         <option value="aliceblue">aliceblue</option>
//       </select>
//       <Background
//         position={initialPosition}
//       />
//       <Box
//         color={shape.color}
//         position={shape.position}
//         onMove={handleMove}
//       >
//         Drag me!
//       </Box>
//     </>
//   );
// }

/*
  If something unexpected changes, there is a mutation. The problem was in the mutation 
  inside handleMove. It mutated shape.position, but that’s the same object that initialPosition 
  points at. This is why both the shape and the background move. (It’s a mutation, so the 
  change doesn’t reflect on the screen until an unrelated update—the color change—triggers 
  a re-render.)
  The fix is to remove the mutation from handleMove, and use the spread syntax to copy the shape. 
  Note that += is a mutation, so you need to rewrite it to use a regular + operation.
*/

export default function Canvas(): React.ReactElement {
	const [shape, setShape] = useState<Shape>({
		color: 'orange',
		position: initialPosition,
	});

	function handleMove(dx: number, dy: number): void {
		setShape({
			...shape,
			position: {
				x: shape.position.x + dx,
				y: shape.position.y + dy,
			},
		});
	}

	function handleColorChange(e: ChangeEvent<HTMLSelectElement>) {
		setShape({
			...shape,
			color: e.target.value,
		});
	}

	return (
		<>
			<select value={shape.color} onChange={handleColorChange}>
				<option value='orange'>orange</option>
				<option value='lightpink'>lightpink</option>
				<option value='aliceblue'>aliceblue</option>
			</select>
			<Background position={initialPosition} />
			<Box color={shape.color} position={shape.position} onMove={handleMove}>
				Drag me!
			</Box>
		</>
	);
}
