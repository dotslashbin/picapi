/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import expressLoader from './Routes'
import cors from 'cors'
import helmet from 'helmet'
import mongoose from 'mongoose'

/**
 * A function that loads the middlewares for express AND express itself
 * @param expressApp
 */
export default function (expressApp: any): void {
	mongoose.connect(`${process.env.MONGOURL}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	expressApp.use(cors())
	expressApp.use(helmet())

	// Express
	expressLoader({ app: expressApp })
}
