DragSnap.prototype.dragEnd = function() {
  const snap = this;
  return () => {
    snap.isDragging = false;

    const coordinates = {"x":event.offsetX,"y":event.offsetY};

    const distance = Math.pow(
      Math.pow(coordinates.x - 100,2) +
      Math.pow(coordinates.y - 125,2),
      0.5
    );

    if(!snap.canDrop) {
      snap.connectingLine
        .transition()
        .duration(distance)
        .ease(d3.easePolyOut)
        .attr("x2",100)
        .attr("y2",125);

      snap.antsMarching
        .transition()
        .duration(distance)
        .ease(d3.easePolyOut)
        .attr("x2",100)
        .attr("y2",125);


      snap.destination
        .attr("r",50);

    } else {
      snap.isDone = true;

      snap.destination
        .transition()
        .duration(250)
        .attr("stroke",snap.connectingColor)
        .attr("fill",snap.activeColor)
        .attr("stroke-width",5);

      loopAnts();

      function loopAnts() {
        const antsLength = snap.antsMarching
          .node()
          .getTotalLength();

        snap.antsMarching
          .attr("stroke-dashoffset",antsLength / 2)
          .transition()
          .ease(d3.easeLinear)
          .duration(5000)
          .attr("stroke-dashoffset",0)
          .on("end",loopAnts)
      }
    }

  }
}
