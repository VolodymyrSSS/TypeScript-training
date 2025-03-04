import React, { useState } from 'react';

// export default function MovingDot() {
// 	const [position, setPosition] = useState({
// 		x: 0,
// 		y: 0,
// 	});
// 	return (
// 		<div
// 			onPointerMove={(e) => {
// 				position.x = e.clientX;
// 				position.y = e.clientY;
// 			}}
// 			style={{
// 				position: 'relative',
// 				width: '100vw',
// 				height: '100vh',
// 			}}
// 		>
// 			<div
// 				style={{
// 					position: 'absolute',
// 					backgroundColor: 'red',
// 					borderRadius: '50%',
// 					transform: `translate(${position.x}px, ${position.y}px)`,
// 					left: -10,
// 					top: -10,
// 					width: 20,
// 					height: 20,
// 				}}
// 			/>
// 		</div>
// 	);
// }

/*
  This code modifies the object assigned to position from the previous render. 
  But without using the state setting function, React has no idea that object 
  has changed. As well, code like this-upper is a problem because it modifies 
  an existing object in state:
      position.x = e.clientX;
      position.y = e.clientY;
  But code like 
      const nextPosition = {};
      nextPosition.x = e.clientX;
      nextPosition.y = e.clientY;
      setPosition(nextPosition);
  is absolutely fine because you’re mutating a fresh object you have just created.
  You should treat any JavaScript object that you put into state as read-only.
  To actually trigger a re-render in this case (to fix), create a new object and
  pass it to the state setting function.
*/

interface Position {
	x: number;
	y: number;
}

export default function MovingDot(): React.ReactElement {
	const [position, setPosition] = useState<Position>({
		x: 0,
		y: 0,
	});
	return (
		<div
			onPointerMove={(e: React.PointerEvent<HTMLDivElement>) => {
				setPosition({
					x: e.clientX,
					y: e.clientY,
				});
			}}
			style={{
				position: 'relative',
				width: '100vw',
				height: '100vh',
			}}
		>
			<div
				style={{
					position: 'absolute',
					backgroundColor: 'red',
					borderRadius: '50%',
					transform: `translate(${position.x}px, ${position.y}px)`,
					left: -10,
					top: -10,
					width: 20,
					height: 20,
				}}
			/>
		</div>
	);
}
