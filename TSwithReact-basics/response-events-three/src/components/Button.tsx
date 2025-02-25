import React from 'react';

interface ButtonProps {
	onClick: () => void; // assume onClick does not expect any arguments and doesn't return anything
	children: React.ReactNode; // allow any valid React child (strings, numbers, JSX elements, arrays of elements, etc.)
}

export default function Button({
	onClick,
	children,
}: ButtonProps): React.ReactElement {
	return (
		<button
			onClick={(e) => {
				e.stopPropagation(); // to prevent propagation upwards
				onClick();
			}}
		>
			{children}
		</button>
	);
}
