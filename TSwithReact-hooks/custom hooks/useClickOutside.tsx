// useClickOutside: Detect Outside Clicks
// Great for closing modals or dropdowns when clicking outside.

import React, { useState, useEffect, useRef } from 'react';

function useClickOutside<T extends HTMLElement>(
	handler: () => void
): React.RefObject<T> {
	const ref = useRef<T>(null!); // Use Non-null assertion operator to tell TypeScript the ref will not be null.

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handler(); // Calls the handler function if click is outside the ref element
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [handler]);

	return ref;
}

export { useClickOutside };

// Usage, briefly:
// const ref = useClickOutside(() => setDropdownOpen(false));
// <div ref={ref}>{dropdownOpen && <p>Dropdown Content</p>}</div>;

// sample implementation to demonstrate how you might use this hook to close a dropdown
const Dropdown: React.FC = () => {
	// State to manage the visibility of the dropdown
	const [dropdownOpen, setDropdownOpen] = useState(false);

	// Handler function to close the dropdown
	const closeDropdown = () => setDropdownOpen(false);

	// Get a ref and pass the handler function that should be called on outside click
	const ref = useClickOutside<HTMLDivElement>(closeDropdown);

	return (
		<div>
			<button onClick={() => setDropdownOpen(!dropdownOpen)}>
				Toggle Dropdown
			</button>
			<div ref={ref} style={{ position: 'relative' }}>
				{dropdownOpen && (
					<div
						style={{
							position: 'absolute',
							top: '20px',
							left: 0,
							border: '1px solid black',
							padding: '10px',
							backgroundColor: 'white',
						}}
					>
						<p>Dropdown Content</p>
						<button onClick={() => setDropdownOpen(false)}>Close</button>
					</div>
				)}
			</div>
		</div>
	);
};

// sample implementation to demonstrate how to use it with the Modal component
const Modal: React.FC = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const closeModal = () => setModalOpen(false); // Handler function to close the modal
	const modalRef = useClickOutside<HTMLDivElement>(closeModal);

	return (
		<div>
			<button onClick={() => setModalOpen(true)}>Open Modal</button>
			{modalOpen && (
				<div
					ref={modalRef}
					style={{
						position: 'fixed',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						backgroundColor: 'white',
						padding: '20px',
						border: '2px solid black',
						zIndex: 1000,
					}}
				>
					<p>Modal Content</p>
					<button onClick={closeModal}>Close Modal</button>
				</div>
			)}
			{modalOpen && (
				<div
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
						zIndex: 999,
					}}
				></div>
			)}
		</div>
	);
};

export { Dropdown, Modal };
