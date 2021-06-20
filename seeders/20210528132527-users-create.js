'use strict';

const faker = require("faker");

module.exports = {

    up: (queryInterface, Sequelize) => {

        var newData = [];

        for (let i = 0; i < 10; i++) {
            const seedData = {
                username: faker.name.findName(),
                email: faker.internet.email(),
                password: faker.datatype.number(),
                role: faker.random.arrayElement(['author', 'guest','admin']),
                createdAt: new Date(),
                updatedAt: new Date()
              
            };
            newData.push(seedData);
        }

        return queryInterface.bulkInsert('Users', newData);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};