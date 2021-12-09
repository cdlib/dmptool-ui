const faker = require('faker/locale/en')
const tableHeader = []
const tableHeaderItems = ['Project Title', 'Template', 'Organization', 'Owner', 'DMP ID', 'Download']
const tableData = []

for (let i = 0; i < tableHeaderItems.length; i++) {
  tableHeader.push({
    table: {
      header: tableHeaderItems[i]
    }
  })
  tableData.push({
    table: {
      data1: faker.lorem.sentence(),
      data2: faker.lorem.sentence(),
      data3: faker.lorem.sentence(),
      data4: faker.lorem.sentence(),
      data5: faker.lorem.sentence(),
      data6: faker.lorem.sentence(),
      data7: faker.lorem.sentence(),
      data8: faker.lorem.sentence()
    }
  })
}

module.exports = {
  context: {
    table_header: tableHeader,
    table_data: tableData
  }
}
