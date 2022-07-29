const upload = require('./middleware/upload');

const Albums = require('./modules/Albums');
const Album = require('./modules/Album');
const Photo = require('./modules/Photo');

const ALBUMS = '/api/albums';
const ALBUM = '/api/album';
const PHOTO = '/api/photo';

module.exports = (app) => {
    app.get(ALBUMS, (request, response) => Albums.getList(response));

    app.post(ALBUM, upload.any('photos'), (request, response) => Album.create(request, response));
    app.delete(ALBUM, (request, response) => Album.remove(request, response));
    app.put(ALBUM, upload.any('photos'), (request, response) => Album.edit(request, response));

    app.delete(PHOTO, (request, response) => Photo.remove(request, response));
}