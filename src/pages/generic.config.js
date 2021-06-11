const faker = require('faker/locale/en');
const fakerData = [];

for (let i = 0; i < 5; i++) {
  fakerData.push({
    test: {
      lorem: faker.lorem.paragraph(10)
    }
  });
}

module.exports = {
  preview: '@template-generic',
  context: {
    loop: fakerData
  }
}
