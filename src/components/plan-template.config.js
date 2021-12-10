const planData = require('../../sample-data/plans.json')
const planTemplate = planData.plan[1].template

module.exports = {
  context: {
    plan: {
      template: planTemplate
    }
  }
}
