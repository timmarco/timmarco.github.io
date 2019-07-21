/* jshint esversion:6 */
Player.prototype.buildModeler = function() {
  const player = this;
  let compsArray = [];

  player.stats.metadata.similarPlayers.forEach((player) =>{
    let ageArray = [];
    ageArray = player.data.map((a) => { return {"age":a.age,"bWar":+a.bWAR,"fWar":+a.fWar}});

    compsArray.push({
      "name":player.name,
      "bWar":ageArray,
    });
  });


  let modeler = new Modeler({
    "where":"#modeler",
    "tooltip":tooltip,
    "name":player.stats.metadata.name,
    "player":player,
  })
  .registerTooltip(tooltip)
  .addPlayerData(player.stats,player.Name.replace("_"," "))
  .addCompData(compsArray)
  .addProjection(player.projection);

  return player;
}
