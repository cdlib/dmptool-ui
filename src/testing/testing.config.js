const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 3; i++) {
  fakerData.push({
    test: {
      lorem: faker.lorem.paragraph()
    }
  });
}

module.exports = {
  root: true,
  order: 4,
  context: {
    loop: fakerData,
  },
  notes: 'This page contains initial tests for the UI build tools.'
}
