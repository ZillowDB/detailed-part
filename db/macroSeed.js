const faker = require('faker');
const fs = require('fs');

const streetNames = new Set();
faker.seed(123);
while (streetNames.size < 1000) {
  streetNames.add(faker.address.streetName());
}
const streetsArray = Array.from(streetNames);
const file = fs.createWriteStream('./data.tsv');

function write(n) {
  for (let i = n; i <= 10000000; i += 1) {
    if (!file.write(`${i}\t${i} ${streetsArray[Math.floor((i - 1) / 10000)]}\t${faker.random.number({ min: 100000, max: 2000000 })}\t${faker.lorem.paragraph()}\t${faker.random.words()}\t${faker.random.words()}\t${faker.date.past()}\t${faker.random.word()}\t${faker.random.word()}\t${faker.random.word()}\t${faker.random.number({ min: 1, max: 10 })}\t${faker.date.past()}\t${faker.random.number({ min: 100, max: 1000 })}\t${faker.random.number({ min: 70, max: 700 })}\t${faker.random.number({ min: 1, max: 10 })}\t${faker.random.words()}\t${faker.random.words()}\t${faker.random.words()}\t${faker.random.number({ min: 500, max: 4000 })}\t${faker.random.words()}\t${faker.random.number({ min: 1, max: 4 })}\t${faker.random.words()}\t${faker.random.words()}\t${faker.random.words()}\t${faker.date.past()}\t${faker.date.past()}\t${faker.random.words()}\t${faker.random.words()}\t${faker.random.words()}\t${faker.random.number({ min: 1, max: 10 })}\t${faker.random.number({ min: 1, max: 10 })}\t${faker.random.words()}\t${faker.random.words()}\t${faker.date.past()}\t${faker.random.number({ min: 100000, max: 2000000 })}\t${faker.random.number({ min: 5, max: 50 })}\t${faker.random.number({ min: 5, max: 50 })}\n`)) {
      file.once('drain', () => {
        write(i + 1);
      });
      return;
    }
  }
  file.end();
}
write(1);
