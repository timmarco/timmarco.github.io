DetailsBox.prototype.transitionOut = function() {
  const box = this;

  box.containerDiv
    .transition()
    .duration(250)
    .style("left",window.innerWidth + "px")
    .on("end",() => {
      box.containerDiv
        .style("display","none");

      box.subtitleDiv
        .html();

      box.dateDiv
        .html();
    });

  return box;
}
