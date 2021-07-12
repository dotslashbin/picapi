/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { DBWriter } from '../../structures/interfaces'
import DBCore from '../DBCore'
import { DBWriter } from '../../structuresRef/interfaces'

/**
 * Responsible for writing data to the database
 */
export default class MongoWriter extends DBCore implements DBWriter {
	/**
	 * Calls to save a new record to the mongo database using typegoose ORM
	 * @param params
	 * @returns
	 */
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	Save(params: any): any {
		const { model, inputs } = params
		try {
			return model.create(inputs)
		} catch (error) {
			console.error(error)
		}
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	Update(params: any): any {
		const { model, id, available } = params
		try {
			return model.findOneAndUpdate({ _id: id }, { available }, { new: true })
		} catch (error) {
			console.error(error)
		}
	}
}
