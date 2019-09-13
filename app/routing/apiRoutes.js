
const friendsList = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });

  app.post("/api/friends", function(req, res) {
    let newFriendScores = req.body;
    console.log(newFriendScores)

    friendsList.push(req.body);

  });


  app.post("/api/clear", function(req, res) {
    friends.length = 0;
    res.json({ ok: true });
  });
};
