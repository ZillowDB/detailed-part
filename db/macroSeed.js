const faker = require('faker');
const stringify = require('csv-stringify');
const fs = require('fs');

const file = fs.createWriteStream('./data.csv');

const Detail = require('./detail.js');
const UserRequest = require('./userRequest.js');

const streetNames = new Set();
faker.seed(123);
while (streetNames.size <= 1000) {
  streetNames.add(faker.address.streetName());
}

const streetsArray = Array.from(streetNames);
const columns = {
  _index: '_index',
  address: 'address',
  price: 'price',
  body: 'body',
  subTitle: 'subTitle',
  type: 'type',
  yearBuilt: 'yearBuilt',
  heating: 'heating',
  cooling: 'cooling',
  parking: 'parking',
  lot: 'lot',
  daysOnZillow: 'daysOnZillow',
  pricePerSqft: 'pricePerSqft',
  saves: 'saves',
  bedRoom: 'bedRoom',
  bathRoom: 'bathRoom',
  heatingAndCooling: 'heatingAndCooling',
  basement: 'basement',
  flooring: 'flooring',
  otherFeatures: 'otherFeatures',
  size: 'size',
  amenities: 'amenities',
  spaces: 'spaces',
  typeAndStyle: 'typeAndStyle',
  builtIn: 'builtIn',
  remodel: 'remodel',
  roof: 'roof',
  exterior: 'exterior',
  otherConstruction: 'otherConstruction',
  exteriorLot: 'exteriorLot',
  lotWidth: 'lotWidth',
  otherExterior: 'otherExterior',
  parkingLong: 'parkingLong',
  soldDate: 'soldDate',
  soldPrice: 'soldPrice',
  pastThirtydayView: 'pastThirtydayview',
  savedLog: 'savedLog',
};

streetsArray.forEach((name, index) => {
  const data = [];
  for (let i = index * 10000 + 1; i <= (index + 1) * 10000; i += 1) {
    data.push([
      i,
      `${i} ${name}`,
      faker.random.number({ min: 100000, max: 2000000 }),
      faker.lorem.paragraphs(),
      faker.random.words(),
      faker.random.words(),
      faker.date.past(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.number({ min: 1, max: 10 }),
      faker.date.past(),
      faker.random.number({ min: 100, max: 1000 }),
      faker.random.number({ min: 70, max: 700 }),
      faker.random.number({ min: 1, max: 10 }),
      faker.random.words(),
      faker.random.words(),
      faker.random.words(),
      faker.random.number({ min: 500, max: 4000 }),
      faker.random.words(),
      faker.random.number({ min: 1, max: 4 }),
      faker.random.words(),
      faker.random.words(),
      faker.random.words(),
      faker.date.past(),
      faker.date.past(),
      faker.random.words(),
      faker.random.words(),
      faker.random.words(),
      faker.random.number({ min: 1, max: 10 }),
      faker.random.number({ min: 1, max: 10 }),
      faker.random.words(),
      faker.random.words(),
      faker.date.past(),
      faker.random.number({ min: 100000, max: 2000000 }),
      faker.random.number({ min: 5, max: 50 }),
      faker.random.number({ min: 5, max: 50 }),
    ]);
  }
  stringify(data, { header: true, columns }, (err, output) => {
    if (err) throw err;
    file.write(output);
  });
  console.log(`${index} written!`);
});
