const Albums = require('./modules/Albums');
const Album = require('./modules/Album');

const AlBUMS = '/api/albums';
const AlBUM = '/api/album';

module.exports = (app) => {
    app.get(AlBUMS, (request, response) => Albums.getList(response));

    app.post(AlBUM, (request, response) => Album.create(request, response));
}