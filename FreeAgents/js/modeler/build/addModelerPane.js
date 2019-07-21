/* jshint esversion:6 */
Modeler.prototype.addModelerPane = function() {
  const modeler = this;

  let pane = new ModelerPane({
    "where":modeler.layers.pane,
    "parent":modeler
  });

  return pane;
};
