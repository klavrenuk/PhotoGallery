const removePhoto = require('./../middleware/remove-photo');
const {ServerError, BadRequestError} = require('./../utils/error-utils');
const SchemaAlbum = require('./../schemas/Album');

class Photo {
    constructor() {}

    removePhotoFromCollection(item) {
        return new Promise((resolve, reject) => {
            const arr = item.photos.filter((filterItem) => {
                return item.photo !== filterItem;
            })

            SchemaAlbum.findOneAndUpdate(
                {_id: item.albumId}, {photos: arr}, (err) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(true);
                    }
                }
            )
        })
    }

    async remove(request, response) {
        try {
            const item = request.query;

            if(!item || !item.hasOwnProperty('albumId') || !item.hasOwnProperty('photo') || !item.hasOwnProperty('photos')) {
                throw new BadRequestError({
                    response: response
                });
            }

            await removePhoto(item.photo);
            await this.removePhotoFromCollection(item);

            response.send('ok');

        } catch(err) {
            console.error(err);
            throw new ServerError({
                message: 'Server error',
                response: response
            });
        }
    }
}

module.exports = new Photo();