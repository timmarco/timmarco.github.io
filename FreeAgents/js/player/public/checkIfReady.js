/* jshint esversion:6 */
Player.prototype.checkIfReady = function() {
  const player = this;
  let toCheck = [player.stats,player.config,player.comparePlayers];
  let proceed = true;
  toCheck.forEach((check) => {
    if(check === undefined || check === false) {
      proceed = false;
    }
  });

  if(proceed) {
    d3.select("#loadingRegion")
      .style("display","none");

    d3.select("#modelerAndStats")
      .style("display","block");


    player.getProjection();
    player.buildModeler();
    player.buildTables();
  }

  return player;
};
