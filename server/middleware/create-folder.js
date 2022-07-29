const fs = require('fs');

const createFolder = (dir) => {
    if(dir) {
        if (!fs.existsSync(`./${dir}`)){
            fs.mkdirSync(dir);
        }
    }
}

module.exports = {createFolder};