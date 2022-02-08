$(document).ready(function () {
  let currentTweetLength = 0;
  const maxTweetLength = 140;
  const counter = $(".counter");

  $("#tweet-text").on("input", function () {
    currentTweetLength = $(this).val().length;
    if (currentTweetLength > 140) {
      counter.addClass("overCharCount");
    } else if (currentTweetLength <= 140) {
      counter.removeClass("overCharCount");
    }
    $(".counter").html(maxTweetLength - currentTweetLength);
  });
});
