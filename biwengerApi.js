var request = require("request");

var url = 'https://cf.biwenger.com/api/v1/competitions/la-liga/data';
request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var jsonObject = JSON.parse(body);

        Object.values(jsonObject.data.teams).forEach(function(team) {

            console.log("\n" + team.name + "\n");

            Object.values(jsonObject.data.players).forEach(function(player) {
                if(player.teamID == team.id){
                    console.log(player.name);
                }
            });

        });

    }
});
