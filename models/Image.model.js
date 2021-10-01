const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
    image: {
		type: Schema.Types.ObjectId,
		ref: 'Image',
		default: [],
	}
})


const Image = model('Image', imageSchema);

module.exports = Image;