/* jshint esversion:6 */
Modeler.prototype.addPlayerData = function(data,projections,name) {
  const modeler = this;

  modeler.chart
    .addPlayerData(data,projections,name);

  modeler.projections = projections;

  modeler.title
    .text(name);

  modeler.key
    .playerName(name);

  d3.selectAll(".playerName")
    .html(name);

  return modeler;
};
