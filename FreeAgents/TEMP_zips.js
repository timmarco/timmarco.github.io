const fs = require('fs');
const csv = require('csvtojson');

csv()
  .fromFile("playerMenu.csv")
  .then((players) => {
    players.forEach((player) => {
      console.log(player);
    })
  })
console.log("HELLO WORLD");
