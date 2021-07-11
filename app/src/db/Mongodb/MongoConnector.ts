import { DBConnector } from '../../structuresRef/interfaces'
import DBCore from '../DBCore'
import mongoose from 'mongoose'

/**
 * Class responsible for handling mongodb connections
 */
export default class MongoConnector extends DBCore implements DBConnector {
	/**
	 * Method that does the connection of the db
	 */
	Connect(): void {
		mongoose.connect(`${process.env.MONGOURL}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
	}
}
