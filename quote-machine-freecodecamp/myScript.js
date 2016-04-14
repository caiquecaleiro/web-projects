$(document).ready(function() {
  getRandomQuote();
  $('#quote-button').on('click', getRandomQuote);
  $('#twitter-button').on('click', tweetQuote);

  function getRandomQuote() {
    $.getJSON('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=', function(quote) {
    // Clean the text and add a space char
    $('#quote').text(' ');
    // Add the quote text
    $('#quote').append(quote[0].content);
    // Clean the author text
    $('#author').text('');
    // Add the author's name
    $('#author').append(quote[0].title);
    // To remove the paragraph tag that comes with the content
    $('#quote').text($('#quote').text());
   });
  }

  function tweetQuote() {
    console.log('Test tweet button!');
  }
});
