import MongoReader from '../db/Mongodb/MongoReader'
import { Request, Response } from 'express'
import { ReturnError, ReturnSuccess } from '../helpers/Response'

export async function Fetch(
	request: Request,
	response: Response
): Promise<void> {
	const photoId = request.params.photoId ? request.params.photoId : ''
	const dbToUse = new MongoReader()

	const result = await PhotoReader()

	if (result.failed) {
		ReturnError(422, response, result.error.toString())
	} else {
		ReturnSuccess(201, response, result)
	}
}
