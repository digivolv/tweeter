$(document).ready(function () {
  // $("#tweet-text").blur(function () {
  //   console.log("blur  on the text", this);
  // });
  let currentTweetLength = 0;
  let maxTweetLength = 140;
  const counter = $(this).parent().find(".counter");

  $("#tweet-text").change(function () {
    currentTweetLength = $(this).val().length;
    // console.log($("#tweet-text").val().length);
    console.log(currentTweetLength);

    $(".counter").html(maxTweetLength - currentTweetLength);

    if (currentTweetLength > 140) {
      counter.addClass("overCharCount");
    } else if (currentTweetLength <= 140) {
      counter.removeClass("overCharCount");
    }
  });
});
