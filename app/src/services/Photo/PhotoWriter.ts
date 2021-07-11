import { PhotoPayload } from '../../structuresRef/types'

/**
 * Class responsible for writing data into the database
 */
export class PhotoWriter {
	static Create(inputs: PhotoPayload):void {
		console.log(inputs)
	}
}
