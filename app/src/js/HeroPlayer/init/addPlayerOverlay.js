HeroPlayer.prototype.addPlayerOverlay = function() {
  const hero = this;

  return hero.videoDiv
    .append("div")
    .classed("video-overlay",true)
    .style("pointer-events","none");
}
