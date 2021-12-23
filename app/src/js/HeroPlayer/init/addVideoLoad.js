HeroPlayer.prototype.addVideoLoad = function(previewSource) {
  const hero = this;
  return hero.videoDiv
    .append("img")
    .classed("video-overlay-image",true)
    .style("pointer-events","none")
    .attr("src",previewSource)
    .style("display","none")

}
