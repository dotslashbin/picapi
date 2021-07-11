import { DBReader } from '../../structures/interfaces'
import DBCore from '../DBCore'

export class MongoReader extends DBCore implements DBReader {
	FetchOne(params: any): any {
		const { model, id } = params

		try {
			return model.findById(id)
		} catch (error) {
			console.error(error)
		}
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	FetchList(params: any): any {
		const { model } = params

		try {
			return model.find()
		} catch (error) {
			console.error(error)
		}
	}
}
