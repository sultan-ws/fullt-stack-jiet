const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/files')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name + Date.now() + path.extname(file.originalname));
    }
});

const multerUploads = multer({storage}).fields([
    {
        name:'thumbnail',
        maxCount:1
    },
    {
        name:'images',
        maxCount:10
    }
]);

module.exports = multerUploads;