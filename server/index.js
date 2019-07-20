const express = require('express');
const app = express();
const port = 3001;
const db = require('../database');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/Reservation', express.static('client/dist'));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/listings', (req, res) => {
    db.Listings.findAll()
    .then((listings) => {
        res.send(listings);
    })
})

app.get('/bookings', (req, res) => {
    db.Available_Dates.findAll()
    .then((dates) => {
        res.send(dates);
    })
})

app.get('/bookings/available/:listingId', (req, res) => {
    db.Available_Listings.findAll({
        where: {
            listingId: req.params.listingId
        }
    })
    .then((days) => {
        res.send(days);
    })
})

app.listen(port, console.log(`${port} is lisenting!`));