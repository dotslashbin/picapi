/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Response } from 'express'
/**
 * Wrapper for successful response
 * @param status
 * @param response
 * @param data
 */
export const ReturnSuccess = (
	status: number,
	response: Response,
	results: any
): void => {
	const returnFormat = {
		data: { ...results, code: status },
	}

	console.log(returnFormat)

	response.status(status)
	response.json(returnFormat)
}

/**
 * Wrapper for Error response
 * @param status
 * @param response
 * @param data
 */
export const ReturnError = (
	status: number,
	response: Response,
	error: string
): void => {
	const returnFormat = {
		error,
	}

	response.status(status)
	response.json(returnFormat)
}
