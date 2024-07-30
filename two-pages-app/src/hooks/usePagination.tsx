/*This hook will accept the total number of items and items 
per page as parameters and will return the current list of items,
the current page, and handlers for next and previous buttons:*/

import { useState } from 'react';
import { ListItemData } from '../../src/components/Home/Home';

const usePagination = (items: ListItemData[], itemsPerPage: number) => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(items.length / itemsPerPage);
	// The Math.ceil() method ensures that you have enough pages to
	// display all items even if the last page is not completely full.

	function currentPageItems() {
		const beginIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = beginIndex + itemsPerPage;
		return items.slice(beginIndex, endIndex);
	}

	/*The next() function increases currentPage by 1, unless it is already 
	at totalPages (the last page). By using Math.min(currentPage + 1, totalPages)
	we ensure that currentPage never exceeds totalPages.*/
	function next() {
		setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
	}

	/*The prev() function decreases currentPage by 1, unless it is already
	on the first page (page 1). Here, Math.max(currentPage - 1, 1) ensures
	that currentPage never drops below 1, which is the first page.*/
	function prev() {
		setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
	}

	/*The jump() function changes currentPage directly to pageNumber, which
	is passed as an argument to the function. However, we want to prevent 
	pageNumber from being less than 1 or greater than totalPages. 
	So Math.max(1, page) makes sure that pageNumber is never less than 1, 
	and Math.min(pageNumber, totalPages) makes sure that pageNumber is never
	more than totalPages.*/
	function jump(page: number) {
		const pageNumber = Math.max(1, page);
		setCurrentPage(() => Math.min(pageNumber, totalPages));
		/*this will set currentPage to the smaller number between pageNumber 
		or totalPages. So if pageNumber is 6, and totalPages is 5, currentPage will 
		be set to 5. This is to prevent attempting to navigate to a page number
		that does not exist.*/
	}

	return { next, prev, jump, currentPageItems, totalPages };
};

/* This custom hook provides a currentPageItems function that always 
returns the elements for the current page. The next and prev 
functions are used to navigate to the next and previous pages, 
respectively. The jump function allows directly jumping to a 
provided page numb. */

export default usePagination;
