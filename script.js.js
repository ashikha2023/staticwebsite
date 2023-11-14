// script.js
document.addEventListener('DOMContentLoaded', function () {
    const dateElement = document.getElementById('currentDate');
    const currentDate = new Date().toLocaleDateString();
    dateElement.innerHTML = `Current Date: ${currentDate}`;

    const newsContainer = document.getElementById('latestNews');
    const newsArticles = [
        {
            title: 'Stock Market Update',
            content: 'The stock market experienced a surge today as tech stocks rallied. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet fermentum erat.',
        },
        {
            title: 'Cryptocurrency Trends',
            content: 'Bitcoin reaches an all-time high, while other cryptocurrencies follow the trend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet fermentum erat.',
        },
    ];

    newsArticles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        articleDiv.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
        newsContainer.appendChild(articleDiv);
    });
});
