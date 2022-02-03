/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  $(".tweet-submit-container").hide();
  $(".validation-error").hide();
  loadTweets();

  $(".write-tweet").click(function () {
    if ($(".tweet-submit-container").is(":hidden")) {
      $(".tweet-submit-container").slideDown("slow", function () {});
    } else {
      $(".tweet-submit-container").slideUp("slow", function () {});
    }
  });
});

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = (tweets) => {
  const layout = `<article class="article-container">
  <header class="tweet-header">
    <div class="profileDisplayNameOnTweet">
      <img class="profilePic" src ="${tweets.user.avatars}">
      <span class="profileName">${tweets.user.name}</span>
    </div>
    <div>
      <span class="twitter-handle">${tweets.user.handle}</span>
    </div>
  </header>
  <main>
    <div>
      <p>
      ${escape(tweets.content.text)}
      </p>
    </div>
  </main>
  <footer>
    <div>${timeago.format(new Date(tweets.created_at))}</div>
    <div>
      <span>
        <i class="fas fa-flag"></i>
      </span>
      <span>
        <i class="fas fa-retweet"></i>
      </span>
      <span>
        <i class="fas fa-heart"></i>
      </span>
    </div>
  </footer>
  </article>`;
  return layout;
};

const renderTweets = (tweetData) => {
  tweetData.forEach((tweet) => {
    $(".new-tweets-container").prepend(createTweetElement(tweet));
  });

  // for (let tweet of tweetElements) {
  //   $(".container").append(createTweetElement(tweet));
  // }
};

const loadTweets = () => {
  $.get("/tweets", (tweets) => {
    renderTweets(tweets);
  });
};
