const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), '/uploads');

const removePhoto = (imgPath) => {
    return new Promise((resolve, reject) => {
        fs.unlink(dir + '/' + imgPath, (err) => {
            if(err) {
                if(err.code === 'ENOENT') {
                    console.error(err);
                    resolve(true);
                } else {
                    reject(err);
                }

            } else {
                resolve(true);
            }
        })
    })
}

module.exports = removePhoto;