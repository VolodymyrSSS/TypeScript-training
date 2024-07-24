// Task: Build Home page:
// It should have username in the title
// It should have a list of todos that are paginated
// It should show 3 todos per page

import React, { useState } from 'react';
import data from '../../data.json';
import { paginate } from '../../utils/paginate'; // adjust the path

// Define types for list items
type ListItemData = {
	title: string;
	description: string;
};

/*FC is an abbreviation for Function Component. The angle brackets <...> are used in TypeScript for specifying types. It is a generic type, meaning we can add our own type for props.*/
const Home: React.FC<{ username: string }> = ({ username }) => {
	// Define a state for current page
	const [currentPage, setCurrentPage] = useState(0);

	// Define a constant for todos per page
	const todosPerPage = 3;

	// Prepare list items as an array
	const listItems: ListItemData[] = Object.values(data);
	// console.log(listItems); // (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
	//                         //  0:
	//                         //    description:"Todo description 01"
	//                         //    title:"Todo Title 01"
	//                         //  1: ...
	//                         //  2: ...

	// if there's no items -> render null (or some empty state)
	if (!listItems.length) return null;

	// Calculate number of pages:
	const pageCount = Math.ceil(listItems.length / todosPerPage);
	// Fetch items for the current page
	const currentPageItems = paginate(listItems, currentPage, todosPerPage);

	//on click - it sets the current page to the page number
	// associated with the clicked button
	const handleClick = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<>
			<h2>HELLO {username}</h2>
			<ul>
				{currentPageItems.map((item: ListItemData, index: number) => (
					<li key={username + '-' + index}>
						{item.title} {item.description}
					</li>
				))}
			</ul>
			{/* Pagination */}
			{Array.from(Array(pageCount), (_, index) => index + 1).map((page) => (
				<button key={page} onClick={() => handleClick(page - 1)}>
					{page}
				</button>
			))}
			{/* Array(pageCount): This creates an array of a given length 
      (pageCount), but doesn't provide any values for the elements.
      The array is empty, but has the correct length. 
      Array.from(Array(pageCount), (_, index) => index + 1): So, here
      Array.from() is a method that creates a new array instance from 
      an array-like or iterable object. It takes two arguments: the 
      array-like or iterable object to convert to an array and a map 
      function to call on every element of the array. The provided map 
      function (_, index) => index + 1 generates an array from 1 to pageCount
      .map((page) => (...)): This map function is used to render a button 
      for each page. The number for each page is passed in as the page 
      argument.
      Inside the map function, a button is returned for each page. When 
      clicked, it calls the handleClick function and updates the current 
      page to the page number associated with the clicked button, where 
      page numbers start from 0 (due to this reason we use page - 1 in 
      handleClick call).
      */}
		</>
	);
};

export default Home;
