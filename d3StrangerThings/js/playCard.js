function addPlayCard(svg,soundTrack) {
  // 
  // svg.playLayer
  //   .append("rect")
  //   .attr("x",0)
  //   .attr("y",0)
  //   .attr("width",1280)
  //   .attr("height",240)
  //   .attr("fill","#333");

  svg.playLayer
    .append("text")
    .attr("x",320)
    .attr("y",357)
    .attr("dominant-baseline","text-before-edge")
    .attr("text-anchor","middle")
    .attr("font-size","0.33em")
    .text("Click Here To Watch The Re-Creation")
    .attr("fill","white");

  svg.playLayer
    .append("image")
    .attr("xlink:href","recreated.gif")
    .attr("width",640)
    .attr("height",357)
    .attr("x",0)
    .attr("y",0);

  svg.playLayer
    .append("text")
    .attr("x",960)
    .attr("y",340)
    .attr("text-anchor","middle")
    .attr("font-size","0.33em")
    .text("Click Here To Watch The Real Thing")
    .attr("fill","white");

  svg.playLayer
    .append("image")
    .attr("xlink:href","original.gif")
    .attr("width",640)
    .attr("height",357)
    .attr("x",640)
    .attr("y",357);


  svg.playLayer
    .append("rect")
    .attr("x",0)
    .attr("y",240)
    .attr("width",640)
    .attr("height",780)
    .attr("cursor","pointer")
    .attr("fill","rgba(0,0,0,0)")
    .on('click',function() { playTitle(svg,soundTrack); });

  svg.playLayer
    .append("rect")
    .attr("x",640)
    .attr("y",240)
    .attr("width",640)
    .attr("height",780)
    .attr("cursor","pointer")
    .attr("fill","rgba(0,0,0,0)")
    .on('click',function() {
      window.open("https://vimeo.com/174870794");
    });
}
