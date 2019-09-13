
const friendsList = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });

  app.post("/api/friends", function(req, res) {

        let friendScore = req.body.scores;
        let scoresArray = [];
        let bestFriend = 0;
    
        for(let i=0; i<friendsList.length; i++){
          let scoresDiff = 0;

          for(let x=0; x<friendScore.length; x++){
            scoresDiff += (Math.abs(parseInt(friendsList[i].scores[x]) - parseInt(friendScore[x])));
          }
    
      
          scoresArray.push(scoresDiff);
        }
    
        for(let i=0; i<scoresArray.length; i++){
          if(scoresArray[i] <= scoresArray[bestFriend]){
            bestFriend = i;
          }
        }
    
        let BF = friendsList[bestFriend];
       

    friendsList.push(req.body);

    res.json(BF);

  });


  app.post("/api/clear", function(req, res) {
    friendsList.length = 0;
    res.json({ ok: true });
  });
};
