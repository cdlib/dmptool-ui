const faker = require('faker/locale/en')
const funderItems = []
const institutionItems = []
const languageItems = []
const subjectItems = []

// Sample facet data:

const facetData = require('../../sample-data/facets.json')
const funderData = facetData.facet.funder
const institutionData = facetData.facet.institution
const languageData = facetData.facet.language
const subjectData = facetData.facet.subject
const funderDataTotal = Object.keys(funderData).length
const institutionDataTotal = Object.keys(institutionData).length
const languageDataTotal = Object.keys(languageData).length
const subjectDataTotal = Object.keys(subjectData).length

for (let i = 0; i < funderDataTotal; i++) {
  funderItems.push({
    facet: {
      itemnumber: faker.datatype.number(10000),
      itemlabel: funderData[i],
      itemtotal: faker.datatype.number(1000)
    }
  })
}

for (let i = 0; i < institutionDataTotal; i++) {
  institutionItems.push({
    facet: {
      itemnumber: faker.datatype.number(10000),
      itemlabel: institutionData[i],
      itemtotal: faker.datatype.number(1000)
    }
  })
}

for (let i = 0; i < languageDataTotal; i++) {
  languageItems.push({
    facet: {
      itemnumber: faker.datatype.number(10000),
      itemlabel: languageData[i],
      itemtotal: faker.datatype.number(1000)
    }
  })
}

for (let i = 0; i < subjectDataTotal; i++) {
  subjectItems.push({
    facet: {
      itemnumber: faker.datatype.number(10000),
      itemlabel: subjectData[i],
      itemtotal: faker.datatype.number(1000)
    }
  })
}

module.exports = {
  collated: true,
  default: 'Funder',
  label: 'Facets',
  context: {
    facet: {
      total: funderDataTotal
    },
    facet_items: funderItems
  },
  variants: [
    {
      name: 'institution',
      context: {
        facet: {
          total: institutionDataTotal
        },
      facet_items: institutionItems
      }
    },
    {
      name: 'Language',
      context: {
        facet: {
          total: languageDataTotal
        },
      facet_items: languageItems
      }
    },
    {
      name: 'Subject',
      context: {
        facet: {
          total: subjectDataTotal
        },
      facet_items: subjectItems
      }
    }
  ]
}
