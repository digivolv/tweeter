$(document).ready(function () {
  // console.log("working");

  $(".submit-tweet").submit(function (event) {
    event.preventDefault();
    $(".validation-error").hide();
    const maxTweetLength = 140;
    const minimumTweetLength = 0;
    if (
      $("textarea").val().length <= maxTweetLength &&
      $("textarea").val().length > minimumTweetLength
    ) {
      // console.log($(this));
      $.ajax({
        url: "/tweets",
        // method: "POST",
        type: "POST",
        // dataType: "application/json",

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
    } else {
      // alert("You are currently out of the bounds of the character limit");

      $(".validation-error").slideDown("slow", function () {});
    }
  });
});
