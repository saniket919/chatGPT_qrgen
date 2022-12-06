// Make an HTTP request to the news API endpoint
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://newsapi.org/v2/top-headlines?country=us&apiKey=<YOUR_API_KEY>");
xhr.onload = function() {
    if (xhr.status === 200) {
        // Parse the JSON response
        var response = JSON.parse(xhr.response);

        // Get the news container element
        var newsContainer = document.getElementById("news-container");

        // Loop through the articles array
        for (var i = 0; i < response.articles.length; i++) {
            var article = response.articles[i];

            // Create a new news item element
            var newsItem = document.createElement("div");
            newsItem.classList.add("news-item");

            // Add the article title
            var title = document.createElement("h2");
            title.innerText = article.title;
            newsItem.appendChild(title);

            // Add the article description
            var description = document.createElement("p");
            description.innerText = article.description;
            newsItem.appendChild(description);

            // Add the news item to the page
            newsContainer.appendChild(newsItem);
        }
    }
};
xhr.send();
