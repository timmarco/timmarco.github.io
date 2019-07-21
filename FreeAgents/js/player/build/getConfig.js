/* jshint esversion:6 */
Player.prototype.getConfig = function() {
  const player = this;

  if(player.isPitcher) {
    player.config = new PitcherConfig();
    d3.json("rawData/2018_all_pitching.json")
      .then((dataset) => {
        player.comparePlayers = dataset;
        player.checkIfReady();
      });
  } else {
    player.config = new HitterConfig();
    d3.json("yearlyData/2018_all_hitting.json")
      .then((dataset) => {
        player.comparePlayers = dataset;
        player.checkIfReady();
      });
  }

  return player.config;
}
