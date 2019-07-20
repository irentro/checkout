/************
From database directory, run mysql -u root < schema.sql in terminal
************/

const faker = require('faker');
const db = require('./index.js');

const listings = [];
const available_dates = [];
const available_listings = [];

for (let i = 0; i < 100; i++) {
    const listing = {
        per_night_price: faker.random.number({   
            min: 50,
            max: 1000
        }),
        max_guests: faker.random.number({
            min: 1, 
            max: 10
        }),
        extra_guest_fee: faker.random.number({
            min: 50, 
            max: 1000
        }),
        cleaning_fee: faker.random.number({
            min: 10, 
            max: 200
        }),
        service_fee: faker.random.number({
            min: 20, 
            max: 200
        }),
        star_rating: faker.random.number({
            min: 1, 
            max: 5,
            precision: 0.01
        }),
        rating_count: faker.random.number({
            min: 10, 
            max: 100
        })
    };
    listing.local_taxes = Math.round(
        listing.per_night_price * 
        faker.random.number({
            min: 0.04,
            max: 0.20,
            precision: 0.01
    }));

    listings.push(listing);
}

for (let i = 7; i <= 10; i++) {
    var month = '';
    for (let j = 1; j <= 31; j++) {
        var day = '';
        if (available_dates.length === 100) {
            break;
        }
        if (i === 9 && j === 31) {
            continue;
        }
        if (String(i).length > 1) {
            month = String(i);
        } else {
            month = '0' + String(i);
        }
        if (String(j).length === 1) {
            day = '0' + String(j);
        } else {
            day = String(j); 
        }
        var date = {
            date: '2019-' + month + '-' + day
        }
        available_dates.push(date);
    }
}

for (let i = 1; i <= 100; i++) {
    for (let j = 1; j <= 100; j++) {
        var available = {
            is_available: faker.random.number(1) ? true : false,
            listingId: i,
            availableDateId: j
        }
        available_listings.push(available);
    }
}

db.sequelize.sync();

db.Listings.bulkCreate(listings)
.then((data) => {
    console.log(data);
})

db.Available_Dates.bulkCreate(available_dates)
.then((data) => {
    console.log(data);
})

db.Available_Listings.bulkCreate(available_listings)
.then((data) => {
    console.log(data);
})