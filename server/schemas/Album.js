const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaAlbum = mongoose.model('Albums', new Schema({
    name: {
        type: String,
        required: true
    },
    photos: {
        type: Array,
        required: true
    }
}));

module.exports = SchemaAlbum;