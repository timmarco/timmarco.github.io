const fs = require('fs');

let theList = getNewPlayerList()
  .then(openNewData);

function openNewData(list) {
  list.forEach((file) => {
    let toSave = {};

    let newPath = __dirname + "/newAgentData/" + file;
    let getNewData = fs.readFileSync(newPath);
    let NewJSONObject = JSON.parse(getNewData);

    try {
      let oldPath = __dirname + "/agentData/" + file;
      let getOldData = fs.readFileSync(oldPath);
      let oldJSONObject = JSON.parse(getOldData);

      Object.keys(oldJSONObject).forEach((key,index) => {
        toSave[key] = {};
      });

      Object.keys(NewJSONObject.stats).forEach((key,index) => {
        let matchKeys = Object.keys(toSave)[index];
        toSave[matchKeys] = NewJSONObject.stats[key];
        toSave[matchKeys].age = +key;
      });

      toSave['2018'].similarPlayers = oldJSONObject['2018'].similarPlayers;
      let stringify = JSON.stringify(toSave);

      try {
        console.log(toSave);
        console.log("\n\n\n\n\n\n");
        // save = fs.writeFileSync(__dirname + "/combinedAgentData/" + file,JSON.stringify(toSave));
      } catch(err) {
        console.log("COULDNT SAVE BECAUSE ,", err);
      }
    } catch(err) {
      console.log("NO DATA FOR ", file);
    }

  });
}

function getNewPlayerList() {
  let list,
    path,
    promise;

  promise = new Promise((resolve,reject) => {
    path = __dirname + "/newAgentData/";
    fs.readdir(path,(err,files) => {
      resolve(files);
    });
  })

  promise.catch(() => {});

  return promise;
}
