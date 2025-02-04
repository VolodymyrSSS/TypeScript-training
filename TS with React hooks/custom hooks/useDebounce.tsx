// useDebounce: Optimize Performance ⏳
// Handling frequent user input, like search or form input, often requires debouncing.

import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => setDebouncedValue(value), delay);

		return () => clearTimeout(handler);
	}, [value, delay]);

	return debouncedValue;
}

export default useDebounce;

// Usage:
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearch = useDebounce(searchTerm, 500);

useEffect(() => {
	if (debouncedSearch) {
		// Trigger API or other actions
	}
}, [debouncedSearch]);
