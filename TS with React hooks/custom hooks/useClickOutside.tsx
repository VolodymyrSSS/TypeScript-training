// useClickOutside: Detect Outside Clicks
// Great for closing modals or dropdowns when clicking outside.

import { useEffect, useRef } from 'react';

function useClickOutside(handler: () => void) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handler();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [handler]);

	return ref;
}

export default useClickOutside;

// Usage:
const ref = useClickOutside(() => setDropdownOpen(false));

return <div ref={ref}>{dropdownOpen && <p>Dropdown Content</p>}</div>;
