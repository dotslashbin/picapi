/**
 * Returns the formatted object for a photo data
 * @param id
 * @param description
 * @param available
 * @returns
 */
export function getCleanedDataReturn(
	id: string,
	description: string,
	available: boolean
): { id: string; description: string; available: boolean } {
	return {
		id,
		description,
		available,
	}
}

/**
 * Returns a formatted object for an error
 * @param error
 * @returns
 */
export function getErrorReturn(error: any): { failed: boolean; error: any } {
	return {
		failed: true,
		error,
	}
}
