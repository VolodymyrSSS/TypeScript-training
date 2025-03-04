import React, { useState, ChangeEvent } from 'react';

interface Person {
	firstName: string;
	lastName: string;
	email: string;
}

// export default function Form() {
// 	const [person, setPerson] = useState<Person>({
// 		firstName: 'Barbara',
// 		lastName: 'Hepworth',
// 		email: 'bhepworth@sculpture.com',
// 	});

// 	function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
// 		person.firstName = e.target.value;
// 	}

// 	function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
// 		person.lastName = e.target.value;
// 	}

// 	function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
// 		person.email = e.target.value;
// 	}

// 	return (
// 		<>
// 			<label>
// 				First name:
// 				<input
// 					value={person.firstName}
// 					type='text'
// 					onChange={handleFirstNameChange}
// 				/>
// 			</label>
// 			<label>
// 				Last name:
// 				<input
// 					value={person.lastName}
// 					type='text'
// 					onChange={handleLastNameChange}
// 				/>
// 			</label>
// 			<label>
// 				Email:
// 				<input value={person.email} type='text' onChange={handleEmailChange} />
// 			</label>
// 			<p>
// 				{person.firstName} {person.lastName} ({person.email})
// 			</p>
// 		</>
// 	);
// }

/*The reliable way is to create a new object and pass it to setPerson. But here, you 
	want to also copy the existing data into it because only one of the fields has changed:
	setPerson({
  	firstName: e.target.value, // New first name from the input
  	lastName: person.lastName,
  	email: person.email
	});
	You can use the ... object spread syntax so that you don’t need to copy every property 
	separately, like
	setPerson({
  	...person, // Copy the old fields
  	firstName: e.target.value // But override this one
	});
	The ... spread syntax is “shallow”—it only copies things one level deep. If you want 
	to update a nested property, you’ll have to use it more than once.
*/

// export default function Form(): React.ReactElement {
// 	const [person, setPerson] = useState<Person>({
// 		firstName: 'Barbara',
// 		lastName: 'Hepworth',
// 		email: 'bhepworth@sculpture.com',
// 	});

// 	function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
// 		setPerson({
// 			...person,
// 			firstName: e.target.value,
// 		});
// 	}

// 	function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
// 		setPerson({
// 			...person,
// 			lastName: e.target.value,
// 		});
// 	}

// 	function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
// 		setPerson({
// 			...person,
// 			email: e.target.value,
// 		});
// 	}
// ...rest of the code
// }

/*
	You can also use the [ and ] braces inside your object definition to specify 
	a property with a dynamic name. Of cause we need to add attribute name into 
	input and create universal event handler. Here is the same solution, but with 
	a single event handler instead of three different ones:
*/

export default function Form(): React.ReactElement {
	const [person, setPerson] = useState<Person>({
		firstName: 'Barbara',
		lastName: 'Hepworth',
		email: 'bhepworth@sculpture.com',
	});

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setPerson({
			...person,
			[e.target.name]: e.target.value,
		});
	}

	return (
		<>
			<label>
				First name:
				<input
					type='text'
					name='firstName'
					value={person.firstName}
					onChange={handleChange}
				/>
			</label>
			<label>
				Last name:
				<input
					type='text'
					name='lastName'
					value={person.lastName}
					onChange={handleChange}
				/>
			</label>
			<label>
				Email:
				<input
					type='text'
					name='email'
					value={person.email}
					onChange={handleChange}
				/>
			</label>
			<p>
				{person.firstName} {person.lastName} ({person.email})
			</p>
		</>
	);
}
