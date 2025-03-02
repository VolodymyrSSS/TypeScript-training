//  a function that doesn't resolve with any value but simply indicates the passage of time or the delay completion

export function delay(ms: number): Promise<void> {
	return new Promise<void>((resolve) => {
		setTimeout(resolve, ms);
	});
}
