function getArticleGenerator(articles) {
    // TODO
    let currentArticles = articles;

    return function () {
        let text = currentArticles.shift();
        if (text != undefined) {
            let contentElement = document.getElementById('content');
            let articleElement = document.createElement('article');
            articleElement.textContent = text;
            contentElement.appendChild(articleElement);

        }

    }
}