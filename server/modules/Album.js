const {ServerError} = require('./../utils/error-utils');

class Album {
    constructor() {};

    create(request, response) {


        if(request.file) {
            response.status(200).send('ok');
        } else {
            throw new ServerError({
                message: 'Saving image error. Please, try later',
                response: response
            });
        }
    }
}

module.exports = new Album();