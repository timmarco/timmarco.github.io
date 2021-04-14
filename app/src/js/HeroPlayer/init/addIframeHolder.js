HeroPlayer.prototype.addIframeHolder = function() {
  const hero = this;

  return hero.videoDiv
    .append("div")
    .attr("data-role","vimeoIframe")
    .style("background-size","cover")
    .style("width","100%")
    .style("height","100%")
    .style("top",0)
    .style("left",0)
    .style("position","absolute");
}
