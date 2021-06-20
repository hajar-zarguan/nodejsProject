'use strict';
const faker = require("faker");
module.exports = {
    up: (queryInterface, Sequelize) => {
        var newData = [];
         for (let i = 0; i < 20; i++) {
            const seedData = {
                username: faker.name.findName(),
                email: faker.internet.email(),
                password: faker.datatype.number(),
                role: faker.random.arrayElement(['author', 'guest','admin']),
                createdAt: faker.date.between('2000-01-01','2021-01-01'),
                updatedAt: faker.date.between('2000-01-01','2021-01-01')
            };
            newData.push(seedData);
        }
        var newDataTage = [];
        for (let i = 0; i < 10; i++) {
            const seedDataTag = {
                name: faker.random.words(3),
                createdAt: new Date(),
                updatedAt: new Date()
            };
            newDataTage.push(seedDataTag);}
//pour chaque utilisateur as us  create Article 
         var newDataArticle = [];
        for (let i = 0; i < 20; i++) {
            const seedDataArticle = {
                title: faker.lorem.sentence(),
                content: faker.lorem.sentences(),
                published: faker.random.arrayElement([1,0]),
                userId: faker.random.arrayElement([21,22,23,24,25]),
                createdAt: new Date(),
                updatedAt: new Date()
            };
            newDataArticle.push(seedDataArticle);
        }


         var newDataComment = [];
           for (let i = 0; i < 10; i++) {
            const seedDataComment = {
                content: faker.lorem.sentences(),
                ArticleId: faker.random.arrayElement([1,2,3]),
                createdAt: new Date(),
                updatedAt: new Date()
            };
            newDataComment.push(seedDataComment);
        }
//Chaque article est taggé avec entre 2 et 6 tags 
    var newDataTagInArticle = [];
           for (let i = 0; i < 10; i++) {
            const seedDataTA= {
              createdAt: new Date(),
              updatedAt: new Date(),
             ArticleId: faker.random.arrayElement([3,2,1]),
            TagId: faker.random.arrayElement([2,1,4])
            };
            newDataTagInArticle.push(seedDataTA);
        }

        return queryInterface.bulkInsert('articletags', newDataTagInArticle); //queryInterface.bulkInsert('Comments', newDataComment)  ;

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};