const planData = require('../../sample-data/plans.json')
const planFeatured = planData.plan[6].featured
const planFunded = planData.plan[6].funded
const planTemplate = planData.plan[6].template
const planTitle = planData.plan[6].title
const planCreator = planData.plan[6].creator
const planInstitution = planData.plan[6].institution
const planIdLink = planData.plan[6].dmp_id
const planSubject = planData.plan[6].subject
const planModified = planData.plan[6].last_modified
const planLanguage = planData.plan[6].language

// Display the dmp_id without https://doi.org/:

const planIdDisplay = planIdLink.replace('https://doi.org/', '')

// Format a long date (i.e. December 9, 2021) from an unformatted date:

const unformattedDate = new Date(planModified)
const longDate = unformattedDate.toLocaleDateString('en-US', {
  day: 'numeric',
  year: 'numeric',
  month: 'long'
})

module.exports = {
  context: {
    plan: {
      featured: planFeatured,
      funded: planFunded,
      template: planTemplate,
      title: planTitle,
      creator: planCreator,
      institution: planInstitution,
      metadata: {
        id_display: planIdDisplay,
        id_link: planIdLink,
        subject: planSubject,
        modified: longDate,
        language: planLanguage
      }
    }
  }
}
