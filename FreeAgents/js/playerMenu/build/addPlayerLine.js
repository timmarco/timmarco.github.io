/* jshint esversion:6 */
PlayerMenu.prototype.addPlayerLine = function(player) {
  const menu = this;

  let playerRow = menu.addPlayerRow(menu.containerElement,player);
  let playerName = menu.addPlayerName(playerRow,player);
  let playerPosition = menu.addPlayerPosition(playerRow,player);
  let playerAge = menu.addPlayerAge(playerRow,player);
  let playerSparkline = menu.addPlayerSparkline(playerRow,player);
  let playerCareerbWar = menu.addCareerBWar(playerRow,player);
  let player2018bWar = menu.add2018PlayerBWar(playerRow,player);

};
