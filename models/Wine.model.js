const { Schema, model } = require('mongoose');

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const wineSchema = new Schema({
    points: {type: Number},
    title: {type: String},
    description: {type: String},
    taster_name: String,
    taster_twitter_handle: String,
    price: {type: Number},
    designation: {type: String},
    variety: {type: String},
    region_1: {type: String},
    region_2: String,
    province: {type: String},
    country: {type: String},
    winery: {type: String},
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review', default: [] }]
  })

const Wine = model('Wine', wineSchema);

module.exports = Wine;