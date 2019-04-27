const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage(
    {
        destination: 'uploads/',
        filename: function ( req, file, cb ) {
            cb( null, file.originalname );
        }
    }
);

const upload = multer( { storage: storage } );
const app = express();

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/', upload.single('fileUploaded'), (req, res) => {
	console.log("File uploaded");
	res.redirect('/');
});

app.listen(3000, ()=> {console.log("Server is listening on port : 3000")} );