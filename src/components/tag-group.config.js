const planData = require('../../sample-data/plans.json')
const planFeatured = planData.plan[6].featured
const planFunded = planData.plan[6].funded

module.exports = {
  context: {
    plan: {
      featured: planFeatured,
      funded: planFunded
    }
  }
}
