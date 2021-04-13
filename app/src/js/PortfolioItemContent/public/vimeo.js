PortfolioItemContent.prototype.vimeo = function(vimeoId,previewSource) {
  const content = this;

  const videoDiv = content.videoDiv
    .append("div")
    .classed("content-video-container",true);

  const iframeHolder = videoDiv
    .append("div")
    .attr("data-role","vimeoIframe")
    .style("background-size","cover")
    .style("width","100%")
    .style("height","100%")
    .style("top",0)
    .style("left",0)
    .style("position","absolute");


  const videoLoad = videoDiv
    .append("img")
    .style("background-size","cover")
    .style("width","100%")
    .style("height","100%")
    .style("top",0)
    .style("left",0)
    .style("background-color","black")
    .style("position","absolute")
    .attr("src",previewSource);

  const playerOverlay = videoDiv
    .append("div")
    .attr("data-role","videoOverlay")
    .style("background-color","rgba(0,0,0,0.125)")
    .style("position","absolute")
    .style("width","100%")
    .style("height","100%")
    .style("top",0)
    .style("left",0)
    .style("cursor","pointer")
    .html("<div style='color:white; text-align:center; background-color:rgb(60,144,60); font-size:2.5em'>DOUBLE-TAP TO PLAY VIDEO</h1>");

  return content;
}
