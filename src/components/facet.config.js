const faker = require('faker/locale/en')
const funderItems = []
const funderItemsMore = []
const institutionItems = []
const institutionItemsMore = []
const languageItems = []
const languageItemsMore = []
const subjectItems = []
const subjectItemsMore = []
const initialItems = 5

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
  if (i < initialItems) {
    funderItems.push({
      facet: {
        itemnumber: faker.datatype.number(10000),
        itemlabel: funderData[i],
        itemtotal: faker.datatype.number(1000)
      }
    })
  } else {
    funderItemsMore.push({
      facet: {
        itemnumber: faker.datatype.number(10000),
        itemlabel: funderData[i],
        itemtotal: faker.datatype.number(1000)
      }
    })
  }
}

for (let i = 0; i < institutionDataTotal; i++) {
  if (i < initialItems) {
    institutionItems.push({
      facet: {
        itemnumber: faker.datatype.number(10000),
        itemlabel: institutionData[i],
        itemtotal: faker.datatype.number(1000)
      }
    })
  } else {
    institutionItemsMore.push({
      facet: {
        itemnumber: faker.datatype.number(10000),
        itemlabel: institutionData[i],
        itemtotal: faker.datatype.number(1000)
      }
    })
  }
}

for (let i = 0; i < languageDataTotal; i++) {
  if (i < initialItems) {
    languageItems.push({
      facet: {
        itemnumber: faker.datatype.number(10000),
        itemlabel: languageData[i],
        itemtotal: faker.datatype.number(1000)
      }
    })
  } else {
    languageItemsMore.push({
      facet: {
        itemnumber: faker.datatype.number(10000),
        itemlabel: languageData[i],
        itemtotal: faker.datatype.number(1000)
      }
    })
  }
}

for (let i = 0; i < subjectDataTotal; i++) {
  if (i < initialItems) {
    subjectItems.push({
      facet: {
        itemnumber: faker.datatype.number(10000),
        itemlabel: subjectData[i],
        itemtotal: faker.datatype.number(1000)
      }
    })
  } else {
    subjectItemsMore.push({
      facet: {
        itemnumber: faker.datatype.number(10000),
        itemlabel: subjectData[i],
        itemtotal: faker.datatype.number(1000)
      }
    })
  }
}

module.exports = {
  collated: true,
  default: 'Funder',
  label: 'Facets',
  context: {
    facet: {
      total: funderDataTotal
    },
    facet_items: funderItems,
    facet_items_more: funderItemsMore
  },
  variants: [
    {
      name: 'institution',
      context: {
        facet: {
          total: institutionDataTotal
        },
      facet_items: institutionItems,
      facet_items_more: institutionItemsMore
      }
    },
    {
      name: 'Language',
      context: {
        facet: {
          total: languageDataTotal
        },
      facet_items: languageItems,
      facet_items_more: languageItemsMore
      }
    },
    {
      name: 'Subject',
      context: {
        facet: {
          total: subjectDataTotal
        },
      facet_items: subjectItems,
      facet_items_more: subjectItemsMore
      }
    }
  ]
}
