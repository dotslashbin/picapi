import { getModelForClass } from '@typegoose/typegoose'
import { DBWriter } from './../../structuresRef/interfaces/index'
import { PhotoPayload } from '../../structuresRef/types'
import { Photo } from '../../models/Photo'

/**
 * Class responsible for writing data into the database
 */
export class PhotoWriter {
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
				return {
					failed: true,
					error,
				}
			})
	}

	static Patch(): void {
		console.log('calling patch service')
	}
}
