const faker = require('faker');
const morgan = require('morgan');

let number = faker.random.number();
console.log(number);

let uuid = faker.random.uuid();
console.log(uuid);

let word = faker.random.word();
console.log(word);

let words = faker.random.words(6);
console.log(words);




const express= require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')






const test = express();
test.use(morgan("combined"))
test.use(bodyParser.json())
test.use(cors())

test.post('/registre', (req,res) => { res.send({ message: `hello ${req.body.email} Your user was registred ! have fun`})})

test.listen(process.env.PORT|| 8081)












