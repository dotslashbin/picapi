import { DBConnector } from '../../structuresRef/interfaces'
import DBCore from '../DBCore'
import mongoose from 'mongoose'

export default class MongoConnector extends DBCore implements DBConnector {
	Connect(): void {
		mongoose.connect(`${process.env.MONGOURL}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
	}
}
