import express from 'express'
import { Create, Fetch, Patch } from '../handlers'

/**
 * Route definitions with references to handlers
 */
export default ({ app }: { app: express.Application }): void => {
	// Index -> shows version
	app.get('/', (request, response) => {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const pjson = require('../../package.json')

		response.status(200)
		response.json({ version: pjson.version })
	})

	app.post('/image', express.json({ limit: '500kb' }), Create)
	app.get('/image/:photoId', express.urlencoded({ extended: true }), Fetch)
	app.get('/image', express.urlencoded({ extended: true }), Fetch)
	app.patch('/image/:id', express.json(), Patch) // TODO finish this
}
