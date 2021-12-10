const planData = require('../../sample-data/plans.json')
const planIdLink = planData.plan[1].dmp_id
const planSubject = planData.plan[1].subject
const planModified = planData.plan[1].last_modified
const planLanguage = planData.plan[1].language

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
