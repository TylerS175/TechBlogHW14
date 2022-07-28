const { User } = require('../models');

const userdata = [
    {
        "username": "Tyler",
        "password": "password",
    },
    {
        "username": "Peach",
        "password": "password",
    },
    {
        "username": "Mario",
        "password": "password",
    }
];

const seedUser = () => User.bulkCreate(userdata, {
    returning: true,
    individualHooks: true,
});

module.exports = seedUser;