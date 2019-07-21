/* jshint esversion:6 */
Player.prototype.getStats = function() {
  const player = this;

  let fileName = "combinedAgentData/" + player.Name.replace(" ","_") + ".json";


  player.checkIfReady();

  d3.json(fileName)
  .then((stats,err) => {
    player.stats = stats;
    player.checkIfReady();
  });


  return false;
};
