const upload = require('./middleware/upload');

const Albums = require('./modules/Albums');
const Album = require('./modules/Album');
const Photo = require('./modules/Photo');

const AlBUMS = '/api/albums';
const AlBUM = '/api/album';
const PHOTO = '/api/photo';

module.exports = (app) => {
    app.get(AlBUMS, (request, response) => Albums.getList(response));

    app.post(AlBUM, upload.any('photos'), (request, response) => Album.create(request, response));

    app.delete(PHOTO, (request, response) => Photo.remove(request, response));
}