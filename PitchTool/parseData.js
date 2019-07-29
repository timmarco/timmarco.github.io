/* jshint esversion:6 */

const fs = require('fs');
const rq = require('request-promise');


let set_1 = [565702,565703,565704,565316,565317,567263,567264,567265,567266,567267,567268,567462,567463];
let set_2 = [567464,567269,567270,567271,565518,565519,565521,564940,564941,564942];
let set_3 = [567272,567274,567275,567277,567276,567278,567279,567280,567281,565330];
let set_4 = [565331,565332,565333,566882,566883,566884,567282,567283,567284,567285];
let set_5 = [567286,567287,565626,565627,565628,565629,566985,566986,566987,567288];
let set_6 = [567288,567289,567290,567291,567292,567293,567294,565923,565924,565733];
let set_7 = [565734,565735,567295,567296,567297,567298,567299,567300,565159,565160];
let set_8 = [566803,566804,566805,565064,565065,565066,567301,567302,567303,567273];
let set_9 = [567305,567306,567307,567308,566130,566131,566132,565749,565750,565751];
let set_10 = [565752,566712,566713,566714,567309,567310];
let set_11 = [567311,567312,567313,567314,567315]

let distinct = (value,index,self) => {
  return self.indexOf(value) === index;
};


let whichSet = set_11;
loopData();

function loopData() {
  if(whichSet.length === 0) {

    console.log("WE'RE DONE!");
  } else {
    let baseUrl = "http://statsapi.mlb.com/api/v1.1/game/";
    let endUrl = "/feed/live";
    let fullUrl = baseUrl + whichSet[0] + endUrl;
    console.log(fullUrl);
    rq(fullUrl)
      .then((raw,err) => {
        if(err) {
          console.log("OH NO ERROR");
          console.log(err);
        }
        let rawData = JSON.parse(raw);
        saveAllData(rawData);
        whichSet.shift();
        setTimeout(loopData,3000);
      });
  }
}


// saveAllData(allGames[0]);

// saveAllData("gameData2.json");


function saveAllData(rawData) {

  // let baseUrl = "http://statsapi.mlb.com/api/v1.1/game/";
  //
  // let endUrl = "/feed/live";
  //
  // let readData = fs.readFileSync(fileName);
  // let rawData = JSON.parse(readData);

  let copyright = rawData.copyright;
  let metadata = rawData.metaData;
  let link = rawData.link;
  let gameData = rawData.gameData;
  let liveData = rawData.liveData;

  // console.log(Object.keys(gameData));
  // console.log("-");
  // console.log(Object.keys(liveData));
  // console.log("-");
  // console.log(Object.keys(liveData.plays));
  // console.log("ALL PLAYS ZERO");
  // extractPitchesFromPitchEvent(liveData.plays.allPlays[0].playEvents);
  // console.log("-----");
  // extractPitchesFromPitchEvent(liveData.plays.allPlays[1].playEvents);
  // console.log("------");
  // extractPitchesFromPitchEvent(liveData.plays.allPlays[2].playEvents);
  // console.log("------");
  // extractPitchesFromPitchEvent(liveData.plays.allPlays[3].playEvents);
  // console.log("------");
  // extractPitchesFromPitchEvent(liveData.plays.allPlays[4].playEvents);
  // console.log("------");
  // extractPitchesFromPitchEvent(liveData.plays.allPlays[5].playEvents);
  // console.log("------");
  // extractPitchesFromPitchEvent(liveData.plays.allPlays[6].playEvents);

  /*
  Pitch Codes:

    B,*B,C,

    F: Foul,
    B: Ball,
    X: In Play, Out(s),
    C: Called Strike
    S: Swinging Strike
    T: Foul Tip
    D: In Play, No Out(s)
    *B: Ball in Dirt
    E: In Play, Run(s)
    L: Foul Bunt
  */

  /*
    Play Types Are:
    'Groundout',
    'Strikeout',
    'Pop Out',
    'Flyout',
    'Lineout',
    'Single',
    'Double',
    'Home Run',
    'Walk',
    'Field Error',
    'Grounded Into DP'
  */

  /*
    event types are
    field_out',
    'strikeout',
    'single',
    'double',
    'home_run',
    'walk',
    'field_error',
    'grounded_into_double_play
  */

  /*
    NEED TO GET ALL PITCH TYPES!!!!

  */

  let location,
    weather,
    date,
    opponent,
    gameNumber,
    players;

  location = getLocation(gameData);
  weather = getWeather(gameData);
  date = getDate(gameData);
  opponent = getOpponent(gameData);
  gameNumber = getGameNumber(gameData);
  players = getPlayers(gameData);

  pitchersToSave = {};
  hittersToSave = {};

  pitcherStats = {};
  hitterStats = {};

  iterateGameEvents(liveData,players);
  savePlayersIfNecessary(pitchersToSave);
  savePlayersIfNecessary(hittersToSave);
  updatePitcherData(pitcherStats);
  updateHitterData(hitterStats);

  // console.log(date);
  // console.log(opponent);
  // console.log(gameNumber);
  // console.log(players);
  // console.log(playerPitchStats);

  // let csvHeader = "";
  // Object.keys(tempYoan[0]).forEach((key) => {
  //   csvHeader += key + ",";
  // });
  // csvHeader += "\n";
  //
  // let file = csvHeader;
  // tempYoan.forEach((pitch) => {
  //   Object.keys(pitch).forEach((key) => {
  //     file += pitch[key];
  //   });
  //   file += "\n";
  // });
  //

  function updatePitcherData(stats) {
    let csvHeaderRow = "";

    Object.keys(stats).forEach((pitcherId,index) => {
      if(index === 0) {

        Object.keys(stats[pitcherId][0]).forEach((stat) => {
          csvHeaderRow += stat + ",";
        });

        csvHeaderRow += "\n";

      }

      let filePath = __dirname + "/data/pitchers/" + pitcherId + ".csv";
      let check = fs.existsSync(filePath);
      if(!check) {
        fs.writeFileSync(filePath,csvHeaderRow);
      }
      let existingFile = fs.readFileSync(filePath).toString();
      let playerStats = stats[pitcherId];
      playerStats.forEach((pitch) => {
        let pitchLine = "";
        Object.keys(pitch).forEach((key) => {
          pitchLine += pitch[key] + ",";
        });
        pitchLine += "\n";
        existingFile += pitchLine;
      });
      fs.writeFileSync(filePath,existingFile);
    });
  }






  function updateHitterData(stats) {
    let csvHeaderRow = "";

    Object.keys(stats).forEach((hitterId,index) => {
      if(index === 0) {

        Object.keys(stats[hitterId][0]).forEach((stat) => {
          csvHeaderRow += stat + ",";
        });

        csvHeaderRow += "\n";

      }

      let filePath = __dirname + "/data/hitters/" + hitterId + ".csv";
      let check = fs.existsSync(filePath);
      if(!check) {
        fs.writeFileSync(filePath,csvHeaderRow);
      }
      let existingFile = fs.readFileSync(filePath).toString();
      let playerStats = stats[hitterId];
      playerStats.forEach((pitch) => {
        let pitchLine = "";
        Object.keys(pitch).forEach((key) => {
          pitchLine += pitch[key] + ",";
        });
        pitchLine += "\n";
        existingFile += pitchLine;
      });
      fs.writeFileSync(filePath,existingFile);
    });
  }



  function savePlayersIfNecessary(players) {
    let getPlayers = fs.readFileSync(__dirname + "/data/players.json");
    let savedPlayers = JSON.parse(getPlayers);
    Object.keys(players).forEach((playerToSaveId) => {
      if(!savedPlayers.hasOwnProperty(playerToSaveId)) {
        let thisPlayer = players[playerToSaveId];
        savedPlayers[playerToSaveId] = thisPlayer;
      }
    });
    fs.writeFileSync(__dirname + "/data/players.json",JSON.stringify(savedPlayers));
  }

  function iterateGameEvents(liveData,players) {
    let pitchingSwap;

    if(location == "h") {
      pitchingSwap = "top";
    } else {
      pitchingSwap = "bottom";
    }

    liveData.plays.allPlays.forEach((play,index) => {
      if(play.about.halfInning == pitchingSwap) {
          parseAtBatPitcher(play);
      } else {
          parseAtBatHitter(play);
      }
    });
  }

  function parseAtBatPitcher(play) {
    let pitcherId = play.matchup.pitcher.id;
    let currentBatter = play.matchup.batter.fullName;
    let battingSide = play.matchup.batSide.code;
    let result = play.result.event;
    let resultType = play.result.eventType;
    let atBatIndex = play.atBatIndex;

    checkToAddPitcherToSave(pitcherId);

    let realAtBatIndex;
    if(pitcherStats[pitcherId].length === 0) {
      realAtBatIndex = 0;
    } else {
      let allAtBatIndices = pitcherStats[pitcherId].map((a) => { return +a.realAtBatIndex;});
      let maxAtBatIndex = Math.max.apply(null,allAtBatIndices);
      realAtBatIndex = maxAtBatIndex + 1;
    }


    play.playEvents.forEach((pitch) => {
      if(pitch.details.ballColor && pitch.details.type) {
        let realPitchInfo = {};

        realPitchInfo.gameNumber = gameNumber;
        realPitchInfo.location = location;
        realPitchInfo.weather = weather;
        realPitchInfo.opponent = opponent;
        realPitchInfo.date = date;
        realPitchInfo.pitchNumber = pitcherStats[pitcherId].length;
        realPitchInfo.mlbAtBatIndex = atBatIndex;
        realPitchInfo.realAtBatIndex = realAtBatIndex;

        realPitchInfo.batterName = currentBatter;
        realPitchInfo.battingSide = battingSide;
        realPitchInfo.playResult = result;
        realPitchInfo.playResultType = resultType;
        realPitchInfo.countBalls = pitch.details.isBall ? pitch.count.balls - 1 : pitch.count.balls;
        realPitchInfo.countStrikes = pitch.details.isStrike ? pitch.count.strikes - 1 : pitch.count.strikes;
        realPitchInfo.pitchResultCode = pitch.details.code;
        realPitchInfo.pitchType = pitch.details.type.code;
        realPitchInfo.startSpeed = pitch.pitchData.startSpeed;
        realPitchInfo.endSpeed = pitch.pitchData.endSpeed;
        realPitchInfo.aY = pitch.pitchData.coordinates.aY;
        realPitchInfo.aZ = pitch.pitchData.coordinates.aZ;
        realPitchInfo.pfxX = pitch.pitchData.coordinates.pfxX;
        realPitchInfo.pfxZ = pitch.pitchData.coordinates.pfxZ;
        realPitchInfo.pX = pitch.pitchData.coordinates.pX;
        realPitchInfo.pZ = pitch.pitchData.coordinates.pZ;
        realPitchInfo.vX0 = pitch.pitchData.coordinates.vX0;
        realPitchInfo.vY0 = pitch.pitchData.coordinates.vY0;
        realPitchInfo.vZ0 = pitch.pitchData.coordinates.vZ0;
        realPitchInfo.x = pitch.pitchData.coordinates.x;
        realPitchInfo.y = pitch.pitchData.coordinates.y;
        realPitchInfo.x0 = pitch.pitchData.coordinates.x0;
        realPitchInfo.y0 = pitch.pitchData.coordinates.y0;
        realPitchInfo.z0 = pitch.pitchData.coordinates.z0;
        realPitchInfo.aX = pitch.pitchData.coordinates.aX;
        realPitchInfo.breakAngle = pitch.pitchData.breaks.breakAngle;
        realPitchInfo.breakLength = pitch.pitchData.breaks.breakLength;
        realPitchInfo.breakY = pitch.pitchData.breaks.breakY;
        realPitchInfo.spinRate = pitch.pitchData.breaks.spinRate;
        realPitchInfo.spinDirection = pitch.pitchData.breaks.spinDirection;
        realPitchInfo.plateTime = pitch.pitchData.plateTime;
        realPitchInfo.extension = pitch.pitchData.extension;
        realPitchInfo.strikeZoneTop = pitch.pitchData.strikeZoneTop;
        realPitchInfo.strikeZoneBottom = pitch.pitchData.strikeZoneBottom;

        pitcherStats[pitcherId].push(realPitchInfo);
      }
    });

  }

  function checkToAddPitcherToSave(id) {
    if(!pitchersToSave.hasOwnProperty(id)) {
      pitchersToSave[id] = players[id];
      pitcherStats[id] = [];
    }
  }

  function checkToAddHitterToSave(id) {
    if(!hittersToSave.hasOwnProperty(id)) {
      hittersToSave[id] = players[id];
      hitterStats[id] = [];
    }
  }

  function parseAtBatHitter(play) {

    let batterId = play.matchup.batter.id;
    let currentPitcher = play.matchup.pitcher.fullName;
    let battingSide = play.matchup.batSide.code;
    let result = play.result.event;
    let resultType = play.result.eventType;

    checkToAddHitterToSave(batterId);

    let atBatIndex = play.atBatIndex;

    let realAtBatIndex;
    if(hitterStats[batterId].length === 0) {
      realAtBatIndex = 0;
    } else {
      let allAtBatIndices = hitterStats[batterId].map((a) => { return +a.realAtBatIndex;});
      let maxAtBatIndex = Math.max.apply(null,allAtBatIndices);
      realAtBatIndex = maxAtBatIndex + 1;
    }

    play.playEvents.forEach((pitch) => {
      if(pitch.details.ballColor && pitch.details.type) {
        let realPitchInfo = {};

        realPitchInfo.gameNumber = gameNumber;
        realPitchInfo.location = location;
        realPitchInfo.weather = weather;
        realPitchInfo.opponent = opponent;
        realPitchInfo.date = date;
        realPitchInfo.mlbAtBatIndex = atBatIndex;
        realPitchInfo.realAtBatIndex = realAtBatIndex;

        realPitchInfo.pitcherName = currentPitcher;
        realPitchInfo.battingSide = battingSide;
        realPitchInfo.playResult = result;
        realPitchInfo.playResultType = resultType;
        realPitchInfo.countBalls = pitch.details.isBall ? pitch.count.balls - 1 : pitch.count.balls;
        realPitchInfo.countStrikes = pitch.details.isStrike ? pitch.count.strikes - 1 : pitch.count.strikes;

        realPitchInfo.pitchResultCode = pitch.details.code;
        realPitchInfo.pitchType = pitch.details.type.code;
        realPitchInfo.startSpeed = pitch.pitchData.startSpeed;
        realPitchInfo.endSpeed = pitch.pitchData.endSpeed;
        realPitchInfo.aY = pitch.pitchData.coordinates.aY;
        realPitchInfo.aZ = pitch.pitchData.coordinates.aZ;
        realPitchInfo.pfxX = pitch.pitchData.coordinates.pfxX;
        realPitchInfo.pfxZ = pitch.pitchData.coordinates.pfxZ;
        realPitchInfo.pX = pitch.pitchData.coordinates.pX;
        realPitchInfo.pZ = pitch.pitchData.coordinates.pZ;
        realPitchInfo.vX0 = pitch.pitchData.coordinates.vX0;
        realPitchInfo.vY0 = pitch.pitchData.coordinates.vY0;
        realPitchInfo.vZ0 = pitch.pitchData.coordinates.vZ0;
        realPitchInfo.x = pitch.pitchData.coordinates.x;
        realPitchInfo.y = pitch.pitchData.coordinates.y;
        realPitchInfo.x0 = pitch.pitchData.coordinates.x0;
        realPitchInfo.y0 = pitch.pitchData.coordinates.y0;
        realPitchInfo.z0 = pitch.pitchData.coordinates.z0;
        realPitchInfo.aX = pitch.pitchData.coordinates.aX;
        realPitchInfo.breakAngle = pitch.pitchData.breaks.breakAngle;
        realPitchInfo.breakLength = pitch.pitchData.breaks.breakLength;
        realPitchInfo.breakY = pitch.pitchData.breaks.breakY;
        realPitchInfo.spinRate = pitch.pitchData.breaks.spinRate;
        realPitchInfo.spinDirection = pitch.pitchData.breaks.spinDirection;
        realPitchInfo.plateTime = pitch.pitchData.plateTime;
        realPitchInfo.extension = pitch.pitchData.extension;


        hitterStats[batterId].push(realPitchInfo);
      }
    });
    //     let realPitchInfo = {};
    //     realPitchInfo.pitcher = currentPitcher;
    //     realPitchInfo.battingSide = battingSide;
    //     realPitchInfo.code = pitch.details.code;
    //     realPitchInfo.pitchType = pitch.details.type.code;
    //     realPitchInfo.startSpeed = pitch.pitchData.startSpeed;
    //     realPitchInfo.endSpeed = pitch.pitchData.endSpeed;
    //     realPitchInfo.aY = pitch.pitchData.coordinates.aY;
    //     realPitchInfo.aZ = pitch.pitchData.coordinates.aZ;
    //     realPitchInfo.pfxX = pitch.pitchData.coordinates.pfxX;
    //     realPitchInfo.pfxZ = pitch.pitchData.coordinates.pfxZ;
    //     realPitchInfo.pX = pitch.pitchData.coordinates.pX;
    //     realPitchInfo.pZ = pitch.pitchData.coordinates.pZ;
    //     realPitchInfo.vX0 = pitch.pitchData.coordinates.vX0;
    //     realPitchInfo.vY0 = pitch.pitchData.coordinates.vY0;
    //     realPitchInfo.vZ0 = pitch.pitchData.coordinates.vZ0;
    //     realPitchInfo.x = pitch.pitchData.coordinates.x;
    //     realPitchInfo.y = pitch.pitchData.coordinates.y;
    //     realPitchInfo.x0 = pitch.pitchData.coordinates.x0;
    //     realPitchInfo.y0 = pitch.pitchData.coordinates.y0;
    //     realPitchInfo.z0 = pitch.pitchData.coordinates.z0;
    //     realPitchInfo.aX = pitch.pitchData.coordinates.aX;
    //     realPitchInfo.breakAngle = pitch.pitchData.breaks.breakAngle;
    //     realPitchInfo.breakLength = pitch.pitchData.breaks.breakLength;
    //     realPitchInfo.breakY = pitch.pitchData.breaks.breakY;
    //     realPitchInfo.spinRate = pitch.pitchData.breaks.spinRate;
    //     realPitchInfo.spinDirection = pitch.pitchData.breaks.spinDirection;
    //     realPitchInfo.plateTime = pitch.pitchData.plateTime;
    //     realPitchInfo.extension = pitch.pitchData.extension;
    // });

  }


  function getWeather(gameData) {
    return gameData.weather.condition;
  }

  function getLocation(gameData) {
    if(gameData.venue.name === "Guaranteed Rate Field") {
      return "h";
    } else {
      return "a";
    }
  }

  function getDate(gameData) {
    return gameData.datetime.originalDate;
  }

  function getTeams(gameData) {
    let teams = {};
    teams.awayFullName = gameData.teams.away.name;
    teams.awayShortName = gameData.teams.away.teamName;
    teams.awayAbbreviation = gameData.teams.away.abbreviation;
    teams.homeFullName = gameData.teams.home.name;
    teams.homeShortName = gameData.teams.home.teamName;
    teams.homeAbbreviation = gameData.teams.home.abbreviation;
    return teams;
  }

  function getPlayers(gameData) {
    let players = {};
    Object.keys(gameData.players).forEach((player) => {
      let toPush = {};
      let thisPlayer = gameData.players[player];
      toPush.id = thisPlayer.id;
      toPush.name = thisPlayer.fullName;
      toPush.lastName = thisPlayer.lastName;
      toPush.position = thisPlayer.primaryPosition.abbreviation;
      toPush.battingSide = thisPlayer.batSide.code;
      toPush.strikeZone = {};
      toPush.strikeZone.bottom = thisPlayer.strikeZoneBottom;
      toPush.strikeZone.top = thisPlayer.strikeZoneTop;
      let feet = +thisPlayer.height.split("\'")[0];
      let inches = +thisPlayer.height.split("\'")[1];
      let realFeet = feet + (inches / 12);
      players[toPush.id] = toPush;
    });
    return players;
  }

  function getOpponent(gameData) {
    let teams = getTeams(gameData);
    if(location == "h") {
      return teams.awayAbbreviation;
    }
    return teams.homeAbbreviation;
  }

  function getGameNumber(gameData) {
    if(location == "h") {
      return gameData.teams.home.record.wins + gameData.teams.home.record.losses;
    }
    return gameData.teams.away.record.wins + gameData.teams.away.record.losses;
  }

}
