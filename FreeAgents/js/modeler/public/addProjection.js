/* jshint esversion:6 */
Modeler.prototype.addProjection = function(projection) {
  const modeler = this;

  modeler.projection = projection;

  modeler.chart
    .addProjection(projection);

  return modeler;
};
