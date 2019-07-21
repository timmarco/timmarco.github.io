const csv = require('csvtojson');
const fs = require('fs');

let newCsv = "";

csv()
  .fromFile('playerMenuMLB.csv')
  .then((players) => {
    players.forEach((player,index) => {
      if(index === 0) {
        Object.keys(player).forEach((key) => {
          newCsv += key + ",";
        });
        newCsv += "\n";
      }
      let fileName = __dirname + "/combinedAgentData/" + player.Name.replace(" ","_") + ".json";
      try {
        let read = fs.readFileSync(fileName);
        let blob = JSON.parse(read);
        let metadata = blob.metadata;
        player["3yearZips"] = metadata.projectedZipsWins;
        let playerLine = "";
        Object.keys(player).forEach((key) => {
          playerLine += player[key] + ",";
        });
        playerLine += "\n";
        newCsv += playerLine;
      } catch(err) {
        console.log("NO FILE FOUND FOR ", fileName);
      }
    });
    console.log(newCsv);
    fs.writeFileSync(__dirname + "/playerMenu.csv",newCsv);
  });
