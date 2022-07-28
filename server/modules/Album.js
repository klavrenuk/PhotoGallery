const {BadRequestError, ServerError} = require('./../utils/error-utils');
const {upload} = require('../middleware/multer');


class Album {
    constructor() {};

    create(request, response) {

        console.log('request file', request.file);
        const file = request.file;

        console.log('file', file);

        if(!file) {
            throw new BadRequestError({
                message: 'Please, choose file',
                response: response
            });
        }

        upload((req, res, err) => {
            console.log('upload req', req);
            console.log('upload res', res);
            console.log('upload err', err);


            response.send('ok');
        })
    }
}

module.exports = new Album();