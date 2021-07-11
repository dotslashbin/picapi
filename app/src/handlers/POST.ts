import { Request, Response } from 'express'
import { ReturnError, ReturnSuccess } from '../helpers/Response'
// import PDWriter from '../services/personal_data/PDWriter'
// import { ReturnError, ReturnSuccess } from '../helpers/Response'
// import MongoWriter from '../db/Mongodb/MongoWriter'

// eslint-disable-next-line @typescript-eslint/no-explicit-any

/**
 * This file is responsible for all POST request handling
 */

/**
 * Handler for  creating a photo
 * @param request
 * @param response
 */
export function Create(request: Request, response: Response): void {
	const { file_name, description, data } = request.body

	console.log(file_name, description, data)

	const result = {
		error: false,
		data: { id: 1, description: 'xxx', available: false },
	}

	if (result.error) {
		ReturnError(422, response, 'this si atest')
	} else {
		ReturnSuccess(201, response, result.data)
	}
}
