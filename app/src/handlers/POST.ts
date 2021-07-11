import { Request, Response } from 'express'
import { ReturnError, ReturnSuccess } from '../helpers/Response'
// import PDWriter from '../services/personal_data/PDWriter'
// import { ReturnError, ReturnSuccess } from '../helpers/Response'
// import MongoWriter from '../db/Mongodb/MongoWriter'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Create(request: Request, response: Response): void {
	const { file_name, description, data } = request.body

	console.log(file_name, description)

	const result = {
		error: true,
		data: { id: 1, description: 'xxx', available: false },
	}

	if (result.error) {
		ReturnError(422, response, 'this si atest')
	} else {
		ReturnSuccess(201, response, result.data)
	}
}
