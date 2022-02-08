$(document).ready(function () {
  $(".submit-tweet").submit(function (event) {
    event.preventDefault();
    $(".validation-error").hide();
    const maxTweetLength = 140;
    const minimumTweetLength = 0;
    if (
      $("textarea").val().length <= maxTweetLength &&
      $("textarea").val().length > minimumTweetLength
    ) {
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: $(this).serialize(),
        success: function (responseData) {
          $("textarea").val("");
          $(".new-tweets-container").empty();
          const newTweet = responseData.slice(-1);
          loadTweets(newTweet);
        },
      });
    } else {
      $(".validation-error").slideDown("slow", function () {});
    }
  });
});
