// Facet Toggle

const initFacetToggle = () => {
  const facets = document.querySelectorAll('.js-facet')
  for (const facet of facets) {
    const facetButton = facet.querySelector('.js-facet__toggle-list')
    const facetList = facet.querySelector('.js-facet__list')

    facetButton.addEventListener('click', () => {
      if (facetList.hidden === true) {
        facetList.hidden = false
        facetButton.setAttribute('aria-expanded', true)
      } else {
        facetList.hidden = true
        facetButton.setAttribute('aria-expanded', false)
      }
    })
  }
}

export default () => initFacetToggle()
