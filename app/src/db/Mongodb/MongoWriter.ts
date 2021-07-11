// import { DBWriter } from '../../structures/interfaces'
import DBCore from '../DBCore'
import { PhotoPayload } from '../../structuresRef/types'

export default class MongoWriter extends DBCore implements DBWriter {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	Save(params: PhotoPayload, model: any): any {
		try {
			return model.create(params)
		} catch (error) {
			console.error(error)
		}
	}
}
