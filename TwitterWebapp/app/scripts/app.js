define(['controller', 'events', 'lungo'], function(controller, events, Lungo) { //Hay que requerir el modulo eventos aunque no se utilice, ya que sino no se inicializa
  console.log('App started');

  var init = function(){
    // Init Lungo
    Lungo.init({
        name : 'TwitterApp'
    });
  };

  Lungo.init();

  controller.getTweetsFromTwitter(controller.showLatestTweets);
  //controller.showLatestTweets();
});