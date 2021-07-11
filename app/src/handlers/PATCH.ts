import MongoWriter from '../db/Mongodb/MongoWriter'
import { Request, Response } from 'express'
import { PhotoWriter } from '../services/Photo/PhotoWriter'
import { ReturnError, ReturnSuccess } from '../helpers/Response'

/**
 * This file is responsible for all PATCH request handling
 */

/**
 * Handler for  creating a photo
 * @param request
 * @param response
 */
export async function Patch(
	request: Request,
	response: Response
): Promise<void> {
	const { take } = request.body
	console.log(take)

	// const dbToUse = new MongoWriter()
	// const result = await PhotoWriter.Update(
	// 	{ file_name, description, data, available: true },
	// 	dbToUse
	// )

	// if (result.failed) {
	// 	ReturnError(422, response, result.error.toString())
	// } else {
	// 	ReturnSuccess(201, response, result)
	// }
}
