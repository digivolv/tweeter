/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

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
      ${tweets.content.text}
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
    $(".tweets-container").prepend(createTweetElement(tweet));
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

$(document).ready(function () {
  // const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like
  // renderTweets(tweetData);
  loadTweets();

  // $(".container").append(renderTweets(tweetData)); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
