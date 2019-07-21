/* jshint esversion:6 */
Modeler.prototype.addCompData = function(data) {
  const modeler = this;

  modeler.chart
    .addCompData(data);

  return modeler;
};
