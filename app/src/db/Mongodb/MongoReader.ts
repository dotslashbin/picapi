import { DEFAULT_PAGE, DEFAULT_LIMIT } from './../../config/index'
import { DBReader } from '../../structuresRef/interfaces'
import DBCore from '../DBCore'

/**
 * Responsible for reading data from the databae
 */
export default class MongoReader extends DBCore implements DBReader {
	private page: number
	private limit: number

	constructor() {
		super()
		this.page = DEFAULT_PAGE
		this.limit = DEFAULT_LIMIT
	}

	/**
	 * Fetches one record
	 * @param params
	 * @returns
	 */
	FetchOne(params: any): any {
		const { model, id } = params

		try {
			return model.findById(id)
		} catch (error) {
			console.error(error)
		}
	}

	/**
	 * Fetches multiple records with pagination applied
	 * @param params Fetches
	 * @returns
	 */
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	FetchList(params: any): any {
		const { model, page, limit } = params

		try {
			return model
				.find()
				.skip(this.getSkipFromPage(page ? page : this.page))
				.limit(limit ? limit : this.limit)
		} catch (error) {
			console.error(error)
		}
	}

	/**
	 * This generates the "skip" value for the pagination feature.
	 * @param page
	 * @returns
	 */
	private getSkipFromPage(page: number): number {
		return page > 0 ? (this.page - 1) * this.limit : 0
	}
}
