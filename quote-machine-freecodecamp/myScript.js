$(document).ready(function() {
  $('#quote-button').on('click', function(e) {
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(quote) {
      console.log(quote);
    });
  });
});
