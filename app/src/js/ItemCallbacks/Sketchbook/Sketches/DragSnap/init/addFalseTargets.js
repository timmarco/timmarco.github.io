DragSnap.prototype.addFalseTargets = function() {
  const snap = this;

  const first = snap.sketch.svg
    .append("circle")
    .attr("cx",500)
    .attr("cy",125)
    .attr("data-x",400)
    .attr("r",50)
    .attr("fill",snap.backgroundColor)
    .attr("stroke",snap.falseTargetColor)
    .attr("stroke-width",10)
    .attr("stroke-dasharray","20,20");

  const second = snap.sketch.svg
    .append("circle")
    .attr("cx",100)
    .attr("cy",300)
    .attr("data-x",100)
    .attr("r",50)
    .attr("fill",snap.backgroundColor)
    .attr("stroke",snap.falseTargetColor)
    .attr("stroke-width",10)
    .attr("stroke-dasharray","20,20");

  first
    .on("mouseover",() => {
      if(snap.isDragging == false) { return };
      const startX = 400;
      const endX = startX + 20;
      const backX = startX - 40;
      first
        .transition()
        .duration(150)
        .attr("cx",endX)
        .transition()
        .duration(225)
        .attr("cx",backX)
        .transition()
        .duration(100)
        .attr("cx",startX)
    });


    second
      .on("mouseover",() => {
        if(snap.isDragging == false) { return };
        const startX = 400;
        const endX = startX + 20;
        const backX = startX - 40;
        second
          .transition()
          .duration(150)
          .attr("cy",endX)
          .transition()
          .duration(225)
          .attr("cy",backX)
          .transition()
          .duration(100)
          .attr("cy",startX)
      });

}
