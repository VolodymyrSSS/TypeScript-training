// Task: Build Home page:
// It should have username in the title
// It should have a list of todos that are paginated
// It should show 3 todos per page

import TodoCard from '../../components/TodoCard/TodoCard';
import data from '../../data.json';
import usePagination from '../../hooks/usePagination';

// Define types for list items
export type ListItemData = {
	title: string;
	description: string;
};

/*FC is an abbreviation for Function Component. The angle brackets <...> are used
in TypeScript for specifying types. It is a generic type, meaning we can add our 
own type for props.*/
const Home: React.FC<{ username: string }> = ({ username }) => {
	const todosPerPage: number = 3;
	const todosData: ListItemData[] = Object.values(data); //  the actual array of todos
	const { next, prev, jump, currentPageItems, totalPages } = usePagination(
		todosData,
		todosPerPage
	);

	return (
		<>
			<h2>HELLO {username}</h2>
			<ul>
				{currentPageItems().map((todo: ListItemData) => (
					<li key={`${username}-${todo.title}`}>
						<TodoCard title={todo.title} description={todo.description} />
					</li>
				))}
			</ul>

			<div className='pagination'>
				<button className='prev-btn' onClick={prev}>
					Previous
				</button>
				{/* Pagination */}
				{Array.from(Array(totalPages)).map((_, index) => (
					<button
						className='pagination-btn'
						key={`page-${index + 1}`}
						onClick={() => jump(index + 1)}
					>
						{index + 1}
					</button>
				))}
				<button className='next-btn' onClick={next}>
					Next
				</button>
			</div>
			{/* Array(totalPages): When you pass a single numeric argument
			to the Array function like Array(totalPages), it creates a new array
			with a length of totalPages. However, it doesn't assign any values 
			to the array indices. Instead, it creates an array of totalPages empty
			slots. This is why map() is used afterwards, to fill these slots.
			For example, if totalPages equals 5, Array(totalPages) will create an array
			that looks like this: [empty x 5]. You can then use Array.from() and
			map() functions to fill these empty slots.
			Array.from(Array(totalPages)) is used to create a new array with totalPages
			number of elements. Then map() is used to iterate over each of the 
			totalPages elements and generate a button for each page
      The provided map function (_, index) => index + 1 generates an array 
			from 1 to pageCount. Here, the _ (underscore) is used when you want 
			to ignore the actual element in the array (since it's just an empty 
			slot) and you only care about the index (since you're trying to 
			generate a number sequence from 1 to totalPages).
      Inside the map function, a button is returned for each page. When 
      clicked, it calls the handleClick function and updates the current 
      page to the page number associated with the clicked button, where 
      page numbers start from 0 (due to this reason we use page - 1 in 
      handleClick call). The page number is index + 1 because array indices
			are 0-based, but your pages start from 1. So, you use index + 1 to 
			correct the page number.
			For key: it's generally fine to use the index + 1 as the key because
			the list of page numbers 1 to totalPages won't be reordered or filtered,
			and hence the identity of each pagination button stays the same across
			re-renders.
      */}
		</>
	);
};

export default Home;
