HeroPlayer.prototype.addVideoDiv = function(where) {
  const hero = this;
  return where
    .append("div")
    .classed("content-video-container",true);
}
