//Submit tweet functionality
$(document).ready(function () {
  $(".submit-tweet").submit(function (event) {
    event.preventDefault();
    //Submit tweet error validation, ensures characters are within 0 - 140 characters
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
