var request = require("request");

var url = 'https://cf.biwenger.com/api/v1/competitions/la-liga/data';
request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var jsonObject = JSON.parse(body);
        var playerName = [];
        var playerPoints = [];

        Object.values(jsonObject.data.players).forEach(function(player) {
            if(player.teamID == 1){
                playerName.push(player.name)
                playerPoints.push(player.points);
            }
        });

        for(var i = 0; i < playerName.length; i++)
        {
            console.log(playerName[i]  + "-" + playerPoints[i]);
        }

    }
});
