const multer  = require("multer");
const path = require('path');

const {BadRequestError, ServerError} = require('./../utils/error-utils');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(process.cwd(), '/uploads'));
    }
})

const upload = multer({
    storage,
    limits: { fileSize: 1 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            const err = new Error('Only .png, .jpg, jpeg');
            err.name = 'ExtensionError';
            return cb(err);
        }
    }
})

module.exports = { upload };