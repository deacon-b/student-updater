//startin express app
const express = require('express');
const app = express();
const studentUpdate = require('./src/controller/update');
const bodyParser = require('body-parser');

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', studentUpdate.postStudent);

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});
