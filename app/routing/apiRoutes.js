
const friendsList = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });

  app.post("/api/friends", function(req, res) {

        //grabs the new friend's scores to compare with friends in friendList array
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;
    
        //runs through all current friends in list
        for(var i=0; i<friendsList.length; i++){
          var scoresDiff = 0;
          //run through scores to compare friends
          for(var j=0; j<newFriendScores.length; j++){
            scoresDiff += (Math.abs(parseInt(friendsList[i].scores[j]) - parseInt(newFriendScores[j])));
          }
    
          //push results into scoresArray
          scoresArray.push(scoresDiff);
        }
    
        //after all friends are compared, find best match
        for(var i=0; i<scoresArray.length; i++){
          if(scoresArray[i] <= scoresArray[bestMatch]){
            bestMatch = i;
          }
        }
    
        //return bestMatch data
        var bff = friendsList[bestMatch];
        res.json(bff);

    friendsList.push(req.body);

  });


  app.post("/api/clear", function(req, res) {
    friends.length = 0;
    res.json({ ok: true });
  });
};
