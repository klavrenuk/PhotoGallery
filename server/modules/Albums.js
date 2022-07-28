const SchemaAlbum = require('./../schemas/Album');
const {ServerError} = require('./../utils/error-utils');

class Albums {
    constructor() {};

    getList(response) {
        SchemaAlbum.find({}, (err, list) => {
            if(err) {
                console.error(err);
                throw new ServerError({
                    message: 'Server error',
                    response: response
                });
            }

            response.status(200).json({
                albums: list
            })
        })
    }
}

module.exports = new Albums();