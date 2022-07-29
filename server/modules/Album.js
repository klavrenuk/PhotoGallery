const {ServerError, BadRequestError} = require('./../utils/error-utils');
const SchemaAlbum = require('./../schemas/Album');
const removePhoto = require('./../middleware/remove-photo');

class Album {
    constructor() {};

    removeAlbum(id) {
        return new Promise((resolve, reject) => {
            SchemaAlbum.findOneAndDelete({_id: id}, (err) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            })
        })
    }

    async remove(request, response) {
        const requiredParams = ['id', 'photos'];

        for(let param of requiredParams) {
            if(!request.query.hasOwnProperty(param)) {
                console.error(`${param} is required`);
                throw new BadRequestError({
                    message: `${param} is required`,
                    response: response
                });
            }
        }

        const id = request.query.id;
        const photos = request.query.photos;

        try {
            await this.removeAlbum(id);

            for(let photo of photos) {
                await removePhoto(photo);
            }

            response.status(200).send('ok');

        } catch (err) {
            console.error(err);
            throw new ServerError({
                response: response
            });
        }
    }

    async edit(request, response) {
        const photos = request.files.map((file) => {
            return file.filename;
        })

        let listPhotos = [];
        if(request.query.photos) {
            listPhotos = request.query.photos;
        }

        SchemaAlbum.findOneAndUpdate(
            {_id: request.query.id},
            {
                name: request.query.name,
                photos: listPhotos.concat(photos)
            },
            (err) => {
                if(err) {
                    for(let photo of photos) {
                        removePhoto(photo);
                    }

                    throw new ServerError({
                        message: 'Saving image error. Please, try later',
                        response: response
                    });

                } else {
                    response.status(200).send('ok');
                }
            }
        )
    }

    async create(request, response) {
        const photos = request.files.map((file) => {
            return file.filename;
        })

        const album = new SchemaAlbum({
            name: request.query.name,
            photos: photos
        });

        album.save((err) => {
            if(err) {
                console.error(err);

                for(let photo of photos) {
                    removePhoto(photo);
                }

                throw new ServerError({
                    message: 'Saving error. Please, try later',
                    response: response
                });

            } else {
                response.status(200).send('ok');
            }
        })
    }
}

module.exports = new Album();