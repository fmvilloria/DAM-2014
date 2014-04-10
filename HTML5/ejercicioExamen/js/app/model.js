var APP = APP || {};

// Modelo de datos
APP.Model = (function(){

    var Show = function(json) {
      this.id = json.id;
      this.date = json.date;
      this.hour = json.hour;
    };

    var Player = function(json, id, idShow) {
      this.id = id;
      this.idShow = idShow;
      this.name = json.name;
      this.age = json.age;
      this.description = json.description;
      this.photo = json.photo;
    };

    var Challenge = function(json, id, idPlayer) {
      this.id = id;
      this.idPlayer = idPlayer;
      this.selected = json.selected;
    };

    var Place = function(json, id, idChallenge) {
      this.id = id;
      this.idChallenge = idChallenge;
      this.address = json.address;
      this.latitude = json.latitude;
      this.longitude = json.longitude;
      this.description = json.description;
      this.photo = json.photo;
    };

    var Option = function(json, id, idChallenge) {
      this.id = id;
      this.id = idChallenge;
      this.name = json.name;
      this.photo = json.photo;
      this.description = json.description;
      this.price = json.price;
      this.likes = json.likes;
    };

    var getShow = function(json){
        return new Show(json);
    };

    var getPlayers = function(json, idShow){
        var players = [];

        $.each(json.players, function(index, item) {
            players.push(new Player(item.player, index, idShow));
        })

        return players;
    };

    var getChallenges = function(json, idPlayer){
        var challenges = [];

        $.each(json.players.challenges, function(index, item) {
            console.log(item);

            challenges.push(new Challenge(item, index, idPlayer));
        })

        return challenges;
    };
    var getPlace = function(json){
        return new Place(json);
    };

    var getOptions = function(json){
        var options = [];

        $.each(json.options, function(index, item) {
            console.log(item);

            options.push(new Option(item));
        })

        return options;
    };

    return {
        getShow : getShow,
        getPlayers : getPlayers,
        getChallenges : getChallenges,
        getPlace : getPlace,
        getOptions : getOptions

    };
})();