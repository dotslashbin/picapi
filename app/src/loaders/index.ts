/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import expressLoader from './Routes'
import cors from 'cors'
import helmet from 'helmet'
import { DBConnector } from '../structuresRef/interfaces'

/**
 * A function that loads the middlewares for express AND express itself
 * @param expressApp
 */
export default function (expressApp: any, connector: DBConnector): void {
	connector.Connect()
	expressApp.use(cors())
	expressApp.use(helmet())

	// Express
	expressLoader({ app: expressApp })
}
