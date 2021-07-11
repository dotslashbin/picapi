import { prop } from '@typegoose/typegoose'
/**
 * Data model definitions with validation.
 *
 * This is implementing typegoose
 */

export class Photo {
	@prop({
		required: [true, 'Filename is required'],
	})
	file_name!: string

	@prop({ required: [true, 'Description is required'] })
	description!: string

	@prop({ required: [true, 'Base64 data is required'] })
	data!: string

	@prop()
	available!: boolean
}
