/* jshint esversion:6 */
Player.prototype.metadata = function(options) {
  const player = this;

  player.Name = options.Name;
  player.Position = options.Position;
  if(player.Position == "SP" || player.Position == "RP") {
    player.isPitcher = true;
  } else {
    player.isPitcher = false;
  }


  return player;
}
