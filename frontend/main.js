$(document).ready(function() {
    $.ajax({
      url: "http://localhost/ajax-jquery-news/api/display_articles.php",
      type: "GET",
      dataType: "json",
      success: function(response) {
        let newsContainer = $(".news-container");
        for (let i = 0; i < response.length; i++) {
            let news = response[i];
            let article = $("<div>").addClass('news');
            let image = $('<img>').attr('src', news.img_url).addClass('article-img');
            let title = $("<h2>").addClass('news-title').text(news.title);
            let date = $("<p>").addClass('news-date').text(news.date_created);
            let description = $("<p>").addClass('news-description').text(news.description);
            article.append(image)
            article.append(title);
            article.append(date);
            article.append(description);
            newsContainer.append(article);
        }
      },
      error: function(xhr, status, error) {
        console.log(xhr);
      }
    });
  });