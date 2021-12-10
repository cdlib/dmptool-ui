const planData = require('../../sample-data/plans.json')
const planTitle = planData.plan[1].title

module.exports = {
  context: {
    plan: {
      title: planTitle
    }
  }
}
