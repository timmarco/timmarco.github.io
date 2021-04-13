SnellsLaw.prototype.updateForMouseCoordinates = function(coordinates) {
  const snells = this;

  if(coordinates.y >= 250) { return }

  const distance = Math.pow(Math.pow(coordinates.x - 250,2) + Math.pow(coordinates.y - 250,2),0.05);

  let incidentStart,
    incidentEnd;

  incidentEnd =  Math.atan2(coordinates.y - 250,coordinates.x - 250) + Math.PI / 2;
  incidentStart = 0;


  snells.source
    .attr("cx",coordinates.x)
    .attr("cy",coordinates.y);

  snells.incidentRay
    .attr("x1",Math.cos(incidentEnd - Math.PI / 2) * 5000 + 250)
    .attr("y1",Math.sin(incidentEnd - Math.PI / 2) * 5000 + 250);

  snells.incidentArc
    .attr("d",snells.arcGenerator.endAngle(incidentEnd).startAngle(incidentStart));

  const indexRatio = snells.firstIndexOfRefraction / snells.secondIndexOfRefraction;
  const sinOfSecond = indexRatio * Math.sin(incidentEnd);
  const refractionTheta = Math.asin(sinOfSecond);

  snells.refractedArc
    .attr("d",snells.arcGenerator.startAngle(refractionTheta + Math.PI / 2).endAngle(Math.PI / 2));

  snells.refractedRay
    .attr("x2",5000 * Math.cos(refractionTheta + Math.PI / 2) + 250)
    .attr("y2",5000 * Math.sin(refractionTheta + Math.PI / 2) + 250);

  return snells;
}
