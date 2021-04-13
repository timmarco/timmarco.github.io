DragSnap.prototype.dragging = function() {
  const snap = this;
  return () => {
    const coordinates = {"x":event.offsetX,"y":event.offsetY};

    const distance = Math.pow(
      Math.pow(coordinates.x - 100,2) +
      Math.pow(coordinates.y - 125,2),
      0.5
    );

    const strokeDistanceScale = d3.scaleLinear()
      .domain([0,500])
      .range([30,1]);

    snap.connectingLine
      .attr("x2",coordinates.x)
      .attr("y2",coordinates.y)
      .attr("stroke-width",strokeDistanceScale(distance));

    snap.antsMarching
      .attr("x2",coordinates.x)
      .attr("y2",coordinates.y)
      .attr("stroke-width",strokeDistanceScale(distance) / 2);


  }
}
