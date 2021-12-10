const planData = require('../../sample-data/plans.json')
const planCreator = planData.plan[1].creator
const planInstitution = planData.plan[1].institution

module.exports = {
  context: {
    plan: {
      creator: planCreator,
      institution: planInstitution
    }
  }
}
