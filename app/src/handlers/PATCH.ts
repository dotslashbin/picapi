// import MongoWriter from '../db/Mongodb/MongoWriter'
import MongoReader from '../db/Mongodb/MongoReader'
import { Request, Response } from 'express'
import PhotoReader from '../services/Photo/PhotoReader'

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
	const photoId = request.params.photoId

	// const dbToUse = new MongoWriter()
	// const result = await PhotoWriter.Update(
	// 	{ file_name, description, data, available: true },
	// 	dbToUse
	// )

	const isInvalidId = await isInValidRecordId(photoId)

	console.log(isInvalidId)

	if (take !== true) {
		ReturnError(422, response, 'Invalid TAKE value')
	} else if (!photoId) {
		ReturnError(422, response, 'Missing record id')
	} else if (isInvalidId) {
		ReturnError(422, response, 'Invalid record id')
	} else {
		ReturnSuccess(201, response, { foo: 'change htis later' })
	}
}

async function isInValidRecordId(id: string): Promise<boolean> {
	const dbToUse = new MongoReader()
	const result = await PhotoReader.Fetch(dbToUse, id)

	if (!result.failed) {
		return false
	}

	return true
}
