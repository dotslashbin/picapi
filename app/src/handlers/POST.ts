import MongoWriter from '../db/Mongodb/MongoWriter'
import { Request, Response } from 'express'
import { PhotoWriter } from '../services/Photo/PhotoWriter'
import { ReturnError, ReturnSuccess } from '../helpers/Response'

/**
 * This file is responsible for all POST request handling
 */

/**
 * Handler for  creating a photo
 * @param request
 * @param response
 */
export async function Create(
	request: Request,
	response: Response
): Promise<void> {
	const { file_name, description, data } = request.body

	const dbToUse = new MongoWriter()
	const result = await PhotoWriter.Create(
		{ file_name, description, data, available: true },
		dbToUse
	)

	if (result.failed) {
		ReturnError(422, response, result.error.toString())
	} else {
		ReturnSuccess(201, response, result)
	}
}
