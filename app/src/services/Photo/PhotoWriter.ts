import { getModelForClass } from '@typegoose/typegoose'
import { DBWriter } from './../../structuresRef/interfaces/index'
import { PhotoPayload } from '../../structuresRef/types'
import { Photo } from '../../models/Photo'
import { getErrorReturn } from '../../helpers/Utilities'

/**
 * Class responsible for writing data into the database
 */
export class PhotoWriter {
	/**
	 * Method to a write a new record for photos
	 * @param inputs
	 * @param db
	 * @returns
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	static Create(inputs: PhotoPayload, db: DBWriter): Promise<any> {
		return db
			.Save({ inputs, model: getModelForClass(Photo) })
			.then((result: any) => {
				return {
					id: result.id,
					description: result.description,
					available: result.available,
				}
			})
			.catch((error: any) => {
				return getErrorReturn(error)
			})
	}

	/**
	 * Method to call update on photo when one is to be taken
	 * @param id
	 * @param available
	 * @param db
	 * @returns
	 */
	static Update(id: string, available: boolean, db: DBWriter): Promise<any> {
		return db
			.Update({ id, available, model: getModelForClass(Photo) })
			.then((result: any) => {
				return {
					id: result.id,
					description: result.description,
					available: result.available,
				}
			})
			.catch((error: any) => {
				return getErrorReturn(error)
			})
	}
}
