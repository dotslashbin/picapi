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
	results: any,
	isArray = false
): void => {
	let returnFormat

	if (!isArray) {
		returnFormat = {
			data: { ...results, code: status },
		}
	} else {
		results = results.map((record: any) => {
			return { ...record, code: status }
		})
		returnFormat = { data: [...results] }
	}

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
		data: {
			code: status,
			description: error,
		},
	}

	response.status(status)
	response.json(returnFormat)
}
