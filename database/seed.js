/************
From database directory, run mysql -u root < schema.sql in terminal,
then npm run seed twice
************/

const faker = require('faker');
const db = require('./index.js');

const listings = [];
const available_dates = [];

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

for (let i = 0; i < 100; i++) {
    const dates = {
        date: faker.date.between('2019-07-01', '2019-10-01')
    }
        available_dates.push(dates)
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