const Sequelize = require('sequelize');

const sequelize = new Sequelize('checkout', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

const Listings = sequelize.define('listings', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    per_night_price: {
        type: Sequelize.DECIMAL (10,2),
        allowNull: false
    },
    max_guests: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    extra_guest_fee: {
        type: Sequelize.DECIMAL (10,2),
        allowNull: false
    },
    cleaning_fee: {
        type: Sequelize.DECIMAL (10,2),
        allowNull: false
    },
    service_fee: {
        type: Sequelize.DECIMAL (10,2),
        allowNull: false
    },
    local_taxes: {
        type: Sequelize.DECIMAL (10,2),
        allowNull: false
    },
    star_rating: {
        type: Sequelize.DECIMAL (10,2),
        allowNull: false
    },
    rating_count: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

const Availability = sequelize.define('availability', {
    date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
})

Listings.hasMany(Availability);
Availability.belongsTo(Listings);

sequelize.sync();