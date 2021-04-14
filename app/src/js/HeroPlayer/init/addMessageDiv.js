HeroPlayer.prototype.addMessageDiv = function() {
  const hero = this;

  return hero.playerOverlay
    .append("img")
    .style("left",0)
    .style("top",0)
    .style("width","100%")
    .style("height","100%");
}
