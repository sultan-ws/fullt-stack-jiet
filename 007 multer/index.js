const multer = require('multer');
const express = require('express');
const path = require('path');

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './files');
    },
    filename: (req, file, cb)=>{
        console.log('file=>',file);
        cb(null, req.body.name + Date.now() + Math.floor(Math.random() * 999999) + path.extname(file.originalname));
    }
});

// No file field in the request
// const multerUpload = multer().none();

// Single file field with multiple file in the request
// const multerUpload = multer({storage}).single('thumbnail');

// Single file field with single file in the request
// const multerUpload = multer({storage}).array('thumbnail', 10);

// multiple file field
const multerUpload = multer({storage}).fields([
    {name: 'thumbnail', maxCount: 1},
    {name: 'images', maxCount: 10},
]);

app.post('/insert-file', multerUpload, (req, res)=>{
    console.log(req.body);
    res.status(200).json({message: 'File uploaded successfully'});
});

app.listen(4000, ()=>{
    console.log('Server is running on port 4000');
})