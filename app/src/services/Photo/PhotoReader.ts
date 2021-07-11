import { Photo } from '../../models/Photo'
import { getModelForClass } from '@typegoose/typegoose'
import { DBReader } from '../../structuresRef/interfaces'

export default class PhotoReader {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	static Fetch(db: DBReader, id?: string): Promise<any> {
		if (!id) {
			return db
				.FetchList({ page: 1, limit: 10, model: getModelForClass(Photo) })
				.then((result: any) => {
					return result.map((record: any) => {
						return {
							id: record._id,
							description: record.description,
							available: record.available,
						}
					})
				})
				.catch((error: any) => {
					return {
						failed: true,
						error,
					}
				})
		}

		return db
			.FetchOne({ id, model: getModelForClass(Photo) })
			.then((result: any) => {
				return {
					id: result._id,
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
}
