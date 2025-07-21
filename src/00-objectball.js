function gameObject(){
return{
    home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assistes: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assistes: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assistes: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assistes: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assistes: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            },
        },
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien":{
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assistes: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            }, 
            "Bismak Biyombo":{
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assistes: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assistes: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            }, 
            "Ben Gordon":{
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assistes: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            "Brendan Haywood":{
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assistes: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            }
        },
    },
}
}

function allPlayers(){
    const game = gameObject();
    return {...game.home.players, ...game.away.players};
}

function numPointsScored(playerName){
    return allPlayers()[playerName].points;
}

function shoeSize(playerName){
    return allPlayers()[playerName].shoe;
}

function teamColors(teamName){
    const game = gameObject();
    if(game.home.teamName === teamName){
        return game.home.colors;
    }else if(game.away.teamName = teamName){
        return game.away.colors;
    }else{
        return [];
    }
}


function teamNames(){
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName){
    const game = gameObject();
    let numbers = [];
    
    if(game.home.teamName === teamName){
        for(const player in game.home.players){
            numbers.push(game.home.players[player].number);
        }
    }else if(game.away.teamName === teamName){
        for(const player in game.away.players){
            numbers.push(game.away.players[player].number);
        }
    }
    
    return numbers; 
}

function playerStats(playerName){
    return allPlayers()[playerName];
}

function bigShoeRebounds(){
    let largestShoeSize = 0;
    let rebounds = 0;
    const players = allPlayers();

    for(const player in players){
        const shoeSize = players[player].shoe;
        if(shoeSize > largestShoeSize){
            largestShoeSize = shoeSize;
            rebounds = players[player].rebounds;
        }
    }
    return rebounds;
}


function mostPointsScored() {
  const players = allPlayers();
  let topPlayer = "";
  let maxPoints = 0;

  for (const player in players) {
    if (players[player].points > maxPoints) {
      maxPoints = players[player].points;
      topPlayer = player;
    }
  }

  return topPlayer;
}

function winningTeam() {
  const game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;

  for (const player in game.home.players) {
    homePoints += game.home.players[player].points;
  }

  for (const player in game.away.players) {
    awayPoints += game.away.players[player].points;
  }

  return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
  const players = Object.keys(allPlayers());
  return players.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

function doesLongNameStealATon() {
  const longestName = playerWithLongestName();
  const players = allPlayers();
  let maxSteals = 0;

  for (const player in players) {
    if (players[player].steals > maxSteals) {
      maxSteals = players[player].steals;
    }
  }

  return players[longestName].steals === maxSteals;
}



/*
mostPointsScored
winningTeam
playerWithLongestName

doesLongNameStealATon
*/