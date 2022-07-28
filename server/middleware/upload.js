const multer  = require('multer');
const moment = require('moment');

const types = ['image/png', 'image/jpeg', 'image/jpg'];

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        const type = file.mimetype.split('/');
        const name = moment().valueOf() + '.' + type[type.length - 1];

        cb(null, name);
    }
})

const fileFilter = (req, file, cb) => {
    if(types.includes(file.mimetype)) {
        cb(null, true);

    } else {
        cb(null, false);
    }
}

module.exports = multer({storage, fileFilter});