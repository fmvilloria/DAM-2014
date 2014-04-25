define(['controller'], function(controller) {
  console.log('App started');

  controller.getTweetsFromTwitter(controller.showLatestTweets);
  //controller.showLatestTweets();
});