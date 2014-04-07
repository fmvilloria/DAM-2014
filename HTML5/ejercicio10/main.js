(function(){

    var db = openDatabase('tweetdb', '1.0', 'All my tweets', 2 * 1024 * 1024);

    var createTable = function(){
        console.log("TABLA CREADA...");
    };
/*
    db.transaction(function (tx) {
        tx.executeSql('DROP TABLE users');
    });

    db.transaction(function (tx) {
        tx.executeSql('DROP TABLE tweets');
    });
*/
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS tweets(id INTEGER PRIMARY KEY, from_user INTEGET, created_at INTEGER, text TEXT, FOREIGN KEY(from_user) REFERENCES users (id))', [], createTable);
    });

    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, user TEXT, image TEXT)', [], createTable);
    });

    var onError = function(tx, error){
                    console.log(error.message);
                  };

    var existsUser = function(id, tx){

        tx.executeSql('SELECT * FROM users WHERE id = ?', [id],
            function(tx, results) {
                console.log("SELECT USER");

                console.log(results.rows.length);

                if(results.rows.length == 1) {
                    console.log(results.rows.item(0));

                    user = results.rows.item(0);
                }else{
                    var user = {
                      "id" : "1",
                      "name" : "Yo",
                      "image" : "Foto"
                    };

                    addUser(user, tx);
                }
            }, onError);
    };

    var addUser = function(user, tx){
        // INSERT OR IGNORE INTO nombre_tabla
        tx.executeSql('INSERT INTO users (id, user, image) VALUES (?, ?, ?)',
                      [user.id, user.name, user.image], function(){
                        console.log("INSERT USER");
                      });
    };

    var existsTweet = function(tweet, tx){

        tx.executeSql('SELECT * FROM tweets WHERE id = ?', [tweet.id],
            function(tx, results) {
                console.log("SELECT TWEET");

                console.log(results.rows.length);

                if(results.rows.length == 0) {
                    addTweet(tweet, tx);
                }else{
                    console.log("ID TWEET EXISTENTE");
                }
            }, onError);
    };

    var addTweet = function(tweet, tx){
        tx.executeSql('INSERT INTO tweets (id, from_user, created_at, text) VALUES (?, ?, ?, ?)',
                      [tweet.id, tweet.from_user, tweet.created_at / 1000, tweet.text], function(){
                        console.log("INSERT TWEET");
                      }, onError);
    };

    var tweet = {
        "id" : "4",
        "from_user" : "1",
        "created_at" : new Date().getTime(),
        "text" : "Tweet 1"
    };

    var addTweetUser = function(tweet){
        db.transaction(function (tx) {
            existsUser(tweet.from_user, tx);

            existsTweet(tweet, tx);
        });
    };

    var removeTweet = function(id){
        db.transaction(function (tx) {
            tx.executeSql('DELETE FROM tweets WHERE id = ?',
                          [id], function(){
                            console.log("DELETE TWEET");
                          }, onError);
        });
    };

    var updateTweet = function(updatedTweet){
        db.transaction(function (tx) {
            tx.executeSql('UPDATE tweets SET from_user = ?, created_at = ?, text = ? WHERE id = ?',
                          [updatedTweet.from_user, updatedTweet.created_at, updatedTweet.text, updatedTweet.id], function(){
                            console.log("DELETE TWEET");
                          }, onError);
        });
    };

    var getTweets = function(time){
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM tweets, users WHERE tweets.from_user = users.id AND created_at >= ?',
                          [time], function(tx, results){
                            console.log("GET TWEETS");

                            var len = results.rows.length, i;
                            for (i = 0; i < len; i++) {
                                var row = results.rows.item(i);

                                console.log(row);
                                console.log(row.from_user, row.created_at, row.text, row.user);
//                                alert(results.rows.item(i).text);
                            }
                          }, onError);
        });
    };

    addTweetUser(tweet);

    removeTweet("1");

    tweet.text = "Updated Tweet2";
    updateTweet(tweet);

    getTweets(new Date().getTime() - 100000000);
})();