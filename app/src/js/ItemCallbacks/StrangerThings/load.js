function loadedStrangerThings(parent) {

  const videoDiv = parent.contentPane.containerDiv.select("[data-role='vimeoIframe']");

  const url = "https://player.vimeo.com/video/522909563?color=000000&title=0&byline=0&portrait=0&playsinline=0"

  const iframe = videoDiv
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

  const player = new Vimeo.Player(iframe.node());

  player.on("play", () =>{
    parent.contentPane.containerDiv.select(".video-overlay")
      .style("background-color","rgba(1,0,0,0.25)")
      .transition()
      .duration(250)
      .style("top","100%")

    parent.contentPane.containerDiv.select("img")
      .style("display","none");
  });


}
