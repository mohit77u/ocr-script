const express = require('express');
const app = express();
const Tesseract = require('tesseract.js');

// Routes
app.get('/', (req, res) => {
    let imagePath = 'https://pmmodiyojana.in/wp-content/uploads/2022/08/image-170-1024x683.png';

    Tesseract.recognize(imagePath, 'eng')
    .then((items) => {
        var text = items.data.text
        if(text) {
            text = text.split('\n')
        }
        res.send({
            status: true,
            data: text,
        });
    }).catch((err) => {
        res.send({
            status: false,
            data: err,
        });
    })
});

app.listen(4000, () => {
    console.log('Server started on port 4000');
});