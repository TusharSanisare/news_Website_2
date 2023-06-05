const API_kEY = "5bcc294e035a426fafbf440e870c8b34";
const url = "https://newsapi.org/v2/everything?q=";


window.addEventListener('load', () => fetch_initial_News());

const breaking_news_container = document.getElementById('breaking-news-container');
const world_news_container = document.getElementById('world-news-container');
const trending_news_container = document.getElementById('trending-news-container');
const card_template = document.getElementById('card-template');


async function fetchNews(query, container) {
    const res = await fetch(`${url}${query}&apiKey=${API_kEY}`);
    const data = await res.json();
    bindData(data.articles, container);
}


function fetch_initial_News() {
    fetchNews("breaking news", breaking_news_container);
    fetchNews("modi and world", world_news_container);
    fetchNews("trending news", trending_news_container);
}

function bindData(articles, container) {

    articles.forEach(article => {
        if (!article.urlToImage) return;
        const cardClone = card_template.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        container.appendChild(cardClone);
    });

    // for (let i = 0; i < 100; i++) {
    //     if (!articles[i].urlToImage) {
    //         return;
    //     }
    //     const cardClone = card_template.content.cloneNode(true);
    //     fillDataInCard(cardClone, articles[i]);
    //     container.appendChild(cardClone);
    // }

}

function fillDataInCard(cardClone, article) {
    const newsTitle = cardClone.querySelector('#card-title');
    const newsSource = cardClone.querySelector('#card-source');
    const card = cardClone.querySelector('#card');

    card.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 7)),url(" + article.urlToImage + ")";
    newsTitle.innerHTML = article.title;
    newsSource.innerHTML = article.source.name;
}








