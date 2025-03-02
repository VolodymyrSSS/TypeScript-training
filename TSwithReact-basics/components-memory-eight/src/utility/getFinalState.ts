// the task
// export function getFinalState(baseState, queue) {
// 	let finalState = baseState;

// // TODO: do something with the queue...

// 	return finalState;
// }

type Updater = (state: number) => number; // a function type that takes a number as an argument (the current state) and returns a number (the new state after applying some operation)

/* Why type
1) Expression vs. Declaration:
  Type Alias: Defines a type by assigning it with a specific structure. 
  Type aliases can represent primitives, unions, tuples, any valid TypeScript 
  type expression.
  Interface: Preferred for defining the shape of an object and is used to describe 
  an entity that is a "thing" with properties. Interfaces can be extended and merged, 
  which makes them powerful for object-oriented style programming.

2) Use-case:
  Type (Function): When defining a function type, using type can be more 
  straightforward and semantically clear. A type alias for a function like 
  type Updater = (state: number) => number; immediately tells us that Updater 
  is not just any sort of "thing" with properties (like an object) but 
  specifically a callable function type.
  Interface (Objects): If you were defining a new object type with properties, 
  especially if you anticipate extending it or needing compatibility with class 
  types, an interface would be a better choice.

3) Flexibility with Unions and More:
  Types: Can handle a broader range of definitions such as unions, primitives, 
  and tuples. You cannot do that directly with an interface. For instance:
  type StateUpdate = number | ((state: number) => number);
  Interfaces: Cannot define unions directly but can extend other interfaces, 
  which types cannot do.
*/

export function getFinalState(
	baseState: number,
	queue: (number | Updater)[] // parameter is an array where each element can either be a number or an Updater function
): number {
	let finalState = baseState;

	for (let update of queue) {
		if (typeof update === 'function') {
			// Apply the updater function.
			finalState = update(finalState);
		} else {
			// Replace the next state.
			finalState = update;
		}
	}

	return finalState;
}
