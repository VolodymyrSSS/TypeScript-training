// usePrevious: Track Previous State
// Keeping track of a value’s previous state is invaluable for comparisons and animations.

import { useEffect, useRef } from 'react';

function usePrevious<T>(value: T): T | undefined {
	const ref = useRef<T>();

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return ref.current;
}

export default usePrevious;

// Usage:
const [count, setCount] = useState(0);
const prevCount = usePrevious(count);

return (
	<p>
		Now: {count}, Before: {prevCount}
	</p>
);
