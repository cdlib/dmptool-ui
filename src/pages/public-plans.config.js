const planItem = []
const planData = require('../../sample-data/plans.json')
const plansTotal = Object.keys(planData.plan).length

for (let i = 0; i < plansTotal; i++) {
  // Display the dmp_id without https://doi.org/:

  const planIdLink = planData.plan[1].dmp_id
  const planIdDisplay = planIdLink.replace('https://doi.org/', '')

  // Format a long date (i.e. December 9, 2021) from an unformatted date:

  const planModified = planData.plan[i].last_modified
  const unformattedDate = new Date(planModified)
  const longDate = unformattedDate.toLocaleDateString('en-US', {
    day: 'numeric',
    year: 'numeric',
    month: 'long'
  })

  planItem.push({
    plan: {
      featured: planData.plan[i].featured,
      funded: planData.plan[i].funded,
      template: planData.plan[i].template,
      title: planData.plan[i].title,
      creator: planData.plan[i].creator,
      institution: planData.plan[i].institution,
      metadata: {
        id_display: planIdDisplay,
        id_link: planIdLink,
        subject: planData.plan[i].subject,
        modified: longDate,
        language: planData.plan[i].language
      }
    }
  });
}

module.exports = {
  preview: '@template-publicplans',
  context: {
    template_home: false,
    logged_in: false,
    plan_item: planItem,
    sort: {
      form: 'plan-form'
    }
  }
}
