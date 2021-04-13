RadialGroup.prototype.backgroundMouseMove = function() {
  const radial = this;
  return () => {
    if(radial.state !== "active") { return }
    const cursorPosition = {"x":event.offsetX - 250,"y":event.offsetY - 250};
    const wedgeCentroids = [];


    radial.wedges
      .each(function(index) {
        const wedgePosition = d3.select(this)
          .node()
          .getBBox();

        const centroid = {
          "x":wedgePosition.x + wedgePosition.width / 2,
          "y":wedgePosition.y + wedgePosition.height / 2,
        }

        centroid.distance = Math.pow(
          Math.pow(centroid.x - cursorPosition.x,2) +
          Math.pow(cursorPosition.y - centroid.y,2),
          0.5
        );

        centroid.index = index;

        wedgeCentroids
          .push(centroid)
      });


    wedgeCentroids.sort((a,b) => { return a.distance - b.distance });

    const distances = d3.extent(wedgeCentroids.map((wedge) => { return wedge.distance; }));
    const opacityScale = d3.scaleLinear()
      .domain(distances)
      .range([1,0]);

    const outerRadiusScale = d3.scaleLinear()
      .domain(distances)
      .range([radial.outerRadius + 10,radial.radius]);

    radial.wedges
      .attr("opacity",(index) => {
        const distance = wedgeCentroids.filter((wedge) => { return wedge.index == index; })[0].distance;
        return opacityScale(distance);
      })
      .attr("d",(index) => {
        const distance = wedgeCentroids.filter((wedge) => { return wedge.index == index; })[0].distance;
        const startAngle = index * Math.PI / 5;
        const endAngle = startAngle + Math.PI / 5;
        return d3.arc()
          .innerRadius(radial.radius)
          .outerRadius(outerRadiusScale(distance))
          .startAngle(startAngle)
          .endAngle(endAngle)();
      })
  }
}
