import { useState, ChangeEvent } from 'react';

interface PersonScoreProps {
	firstName: string;
	lastName: string;
	score: number;
}

// export default function Scoreboard() {
// 	const [player, setPlayer] = useState({
// 		firstName: 'Ranjani',
// 		lastName: 'Shettar',
// 		score: 10,
// 	});

// 	function handlePlusClick() {
// 		player.score++;
// 	}

// 	function handleFirstNameChange(e) {
// 		setPlayer({
// 			...player,
// 			firstName: e.target.value,
// 		});
// 	}

// 	function handleLastNameChange(e) {
// 		setPlayer({
// 			lastName: e.target.value,
// 		});
// 	}

// 	return (
// 		<>
// 			<label>
// 				Score: <b>{player.score}</b>{' '}
// 				<button onClick={handlePlusClick}>+1</button>
// 			</label>
// 			<label>
// 				First name:
// 				<input value={player.firstName} onChange={handleFirstNameChange} />
// 			</label>
// 			<label>
// 				Last name:
// 				<input value={player.lastName} onChange={handleLastNameChange} />
// 			</label>
// 		</>
// 	);
// }

/*The problem with handlePlusClick was that it mutated the player object. 
  As a result, React did not know that there’s a reason to re-render, and 
  did not update the score on the screen. This is why, when we edited the 
  first name, the state got updated, triggering a re-render which also 
  updated the score on the screen.
  The problem with handleLastNameChange was that it did not copy the existing 
  ...player fields into the new object. This is why the score got lost after 
  you edited the last name.*/

export default function Scoreboard(): React.ReactElement {
	const [player, setPlayer] = useState<PersonScoreProps>({
		firstName: 'Ranjani',
		lastName: 'Shettar',
		score: 10,
	});

	function handlePlusClick() {
		setPlayer({
			...player,
			score: player.score + 1,
		});
	}

	function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
		setPlayer({
			...player,
			firstName: e.target.value,
		});
	}

	function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
		setPlayer({
			...player,
			lastName: e.target.value,
		});
	}

	return (
		<>
			<label>
				Score: <b>{player.score}</b>{' '}
				<button onClick={handlePlusClick}>+1</button>
			</label>
			<label>
				First name:
				<input
					type='text'
					name='firstName'
					value={player.firstName}
					onChange={handleFirstNameChange}
				/>
			</label>
			<label>
				Last name:
				<input
					type='text'
					name='lasttName'
					value={player.lastName}
					onChange={handleLastNameChange}
				/>
			</label>
		</>
	);
}
