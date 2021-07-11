/**
 * Descripts a photo's payload for input
 */
export type PhotoPayload = {
	file_name: string
	description: string
	data: string
	available: boolean
}

/**
 * Describes the photos take payload
 */
export type PhotoTakePaylaod = {
	take: boolean
}
