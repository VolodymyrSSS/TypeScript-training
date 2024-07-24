export function paginate<T>(
	items: T[],
	currentPage: number,
	perPage: number
): T[] {
	// Calculate start and end indices
	const start = currentPage * perPage;
	const end = start + perPage;

	// Return a new array with the items for the current page
	return items.slice(start, end);
}

/* - 1)
items.slice(start, end) is a JavaScript method on arrays that returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.

const start = currentPage * perPage: This is the start index for the slice operation. It calculates where to start slicing the array based on the current page number and the number of todos per page. For example, if you are on page 2 and have 3 todos per page, it would start slicing from index 6 (2*3).

const end = start + perPage: This is the end index for the slice operation. It calculates where to end the slice based on the current page number (start) and number of todos per page. Following the previous example, if you are on page 2 and have 3 todos per page, it would end slicing at index 9 ((2+1)*3).

So if start (currentPage) is 2 and perPage is 3, then currentPageItems will be a new array with the items from items at indexes 6, 7, and 8. In other words, it'll contain the items for the third page (since indexing starts at 0).

This way, as start (currentPage) changes, you'll always get the items corresponding to the current page.
*/

/* - 2)
As well, here <T> represents a type variable—a kind of variable that stands for any type. It's a way to allow the TypeScript compiler to know that the paginate function is capable of working on any type of array not just a specific array of, for example, strings or numbers. This is what's known as a generic function.
By using <T>, the paginate function can be applied to an array of any type (T[]), and the function will return an array of the same type (T[]). In other words, if you pass an array of Strings to paginate, it will return an array of Strings. This makes the paginate function reusable across different array types.
So in paginate<T>, T is effectively a placeholder for whatever type will be used when the function is called. The caller, not the function, determines what type T should be.
When we call this function in Home.tsx with paginate(listItems, currentPage, todosPerPage);, T is ListItemData because listItems is of type ListItemData[].*/
