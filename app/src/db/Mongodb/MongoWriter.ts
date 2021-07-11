/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { DBWriter } from '../../structures/interfaces'
import DBCore from '../DBCore'
import { DBWriter } from '../../structuresRef/interfaces'
export default class MongoWriter extends DBCore implements DBWriter {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	Save(params: any): any {
		try {
			console.log('oieuroieuroiueiroueouoeruo')
			// TODO: get model from params
			// const { model, inputs } = params
			// return model.create(params)
		} catch (error) {
			console.error(error)
		}
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	Update(params: any): any {
		try {
			console.log('calling Mongowriter update')
		} catch (error) {
			console.error(error)
		}
	}
}
