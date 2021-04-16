HeroPlayer.prototype.load = function(loadedCallback) {
  const hero = this;

  const url = "https://player.vimeo.com/video/"+hero.vimeoId+"?color=000000&title=0&byline=0&portrait=0&playsinline=0"

  const iframe = hero.iframeHolder
    .append("iframe")
    .attr("src",url)
    .attr("allow","autoplay; fullscreen; picture-in-picture")
    .attr("allowfullscreen","true")
    .attr("autoplay",true)
    .style("background-size","cover")
    .style("width","100%")
    .style("height","100%")
    .style("top",0)
    .style("left",0)
    .style("position","absolute");

  const playerInstance = new Vimeo.Player(iframe.node());

  playerInstance.on("play", () => {

    hero.playerOverlay
      .transition()
      .duration(250)
      .style("top","100%");

    hero.videoLoad
      .style("display","none");

    player
      .setCurrentTime(0);

    hero.videoLoad
      .style("display","none");

  });

  iframe.on("load",() => {
    if(loadedCallback) {
      loadedCallback();
    }
  });

  hero.beep();

  return hero;
}
