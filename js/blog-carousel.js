// Fetches the latest DMPTool blog content and scrolls through them

const initBlogCarousel = () => {
  // Rotate through the news items every 8 seconds
  // #j-blog__array JSON is populated by the Rails application

  const articlesArray = document.querySelector('#j-blog__array')

  if (articlesArray) {
    const articles = articlesArray.value
    const news = JSON.parse(`${articles.replace(/\\"/g, '"').replace(/\\'/g, '\'')}`)

    const updateNews = (item) => {
      const text = document.querySelector('.c-blog__content')
      text.innerHTML = `<a href="${news[item].link}" target="_blank" class="has-new-window-popup-info">${news[item].title}</a>`
    }

    const startNewsTimer = (item) => {
      setTimeout(() => {
        updateNews(item)
        startNewsTimer((item >= news.length - 1) ? 0 : item + 1)
      }, 8000)
    }

    updateNews(0)
    startNewsTimer(1)
  }
}

export default () => initBlogCarousel()
