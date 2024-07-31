export interface DataComments {
	id: number;
	text: string;
	children?: DataComments[]; //
	// ? - Optional property as not every comment has children
}

/*
Use interfaces when:
You want to define the structure of an object or function.
You need to merge the declarations.
You work with a team that prioritizes interfaces for consistency.
Use type aliases when:
You need to create a type alias for union, intersection, or other complex types.
You are working with a library or third-party code that makes extensive use of types.
You prefer a more general approach and do not need to merge declarations.
*/
