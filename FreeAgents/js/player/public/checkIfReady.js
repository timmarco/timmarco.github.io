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
    player.getProjection();
    player.buildModeler();
    player.buildTables();
  }

  return player;
}
