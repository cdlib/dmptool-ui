const faker = require('faker/locale/en')

module.exports = {
  label: 'Show More',
  context: {
    more: {
      label: 'Show more',
      content: faker.lorem.paragraph()
    }
  }
}
