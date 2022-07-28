const {ServerError} = require('./../utils/error-utils');
const SchemaAlbum = require('./../schemas/Album');

class Album {
    constructor() {};

    async create(request, response) {
        const photos = request.files.map((file) => {
            return file.filename;
        })

        const album = new SchemaAlbum({
            name: request.query.name,
            photos: photos
        });

        try {
            album.save((err) => {
                if(err) {
                    throw(err);
                }

                response.status(200).send('ok');
            })

        } catch(err) {
            console.error(err);
            // remove

            throw new ServerError({
                message: 'Saving image error. Please, try later',
                response: response
            });
        }
    }
}

module.exports = new Album();