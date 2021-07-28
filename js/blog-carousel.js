// Fetches the latest DMPTool blog content and scrolls through them

// TODO: Convert this over to vanilla JS instead of JQuery!

const initBlogCarousel = () => {
  // Rotate through the news items every 8 seconds
  // #j-blog__content JSON is populated by the Rails application
  const articles = $('#j-blog__content').val()
  if (articles) {
    const news = JSON.parse(`${articles.replace(/\\"/g, '"').replace(/\\'/g, '\'')}`)

    const updateNews = (item) => {
      const text = $('.c-blog__content');
      text.hide();
      text.html(`<a href="${news[item].link}" target="_blank" class="has-new-window-popup-info">${news[item].title}</a>`);
      text.fadeIn(100);
    };

    const startNewsTimer = (item) => {
      setTimeout(() => {
        updateNews(item);
        startNewsTimer((item >= news.length - 1) ? 0 : item + 1);
      }, 8000);
    };
    updateNews(0);
    startNewsTimer(1);
  }
}

export default () => initBlogCarousel()
