const express = require('express');
const app = express();
const port = 3000;
const db = require('../database');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client/dist'));

app.get('/listings', (req, res) => {
    db.Listings.findAll()
    .then((listings) => {
        res.send(listings);
    })
})

app.listen(port, console.log(`${port} is lisenting!`));