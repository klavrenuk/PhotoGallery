const fs = require('fs');
const path = require('path');

const {BadRequestError, ServerError} = require('./../utils/error-utils');

class Albums {
    constructor() {};

    getList(response) {
        console.log('albumns');

        const dir = path.join(process.cwd(), '/uploads');

        try {
            fs.readdir(dir, (err, albums) => {
                if(err) {
                    throw(err);
                }

                response.json({
                    albums: albums
                });
            })

        } catch (err) {
            console.error(err);
            response.json({
                albums: []
            });
        }
    }
}

module.exports = new Albums();