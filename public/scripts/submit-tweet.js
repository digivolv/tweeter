$(document).ready(function () {
  // console.log("working");

  $(".submit-tweet").submit(function (event) {
    event.preventDefault();

    // if ($("textarea") <= maxTweetLength && $("textarea") >= minimumTweetLength)
    $.ajax({
      url: "/tweets",
      method: "POST",
      type: "application/json",

      //like the req body
      data: $(this).serialize(),
      success: function (responseData) {
        //set text area blank
        $("textarea").val("");
        $.get("/tweets", (responseData) => {
          const newTweet = responseData.slice(-1);
          renderTweets(newTweet);
        });
      },
    });
  });
});
