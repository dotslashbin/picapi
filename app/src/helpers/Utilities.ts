export function getErrorReturn(error: any): { failed: boolean; error: any } {
	return {
		failed: true,
		error,
	}
}
