/* jshint esversion:6 */
Modeler.prototype.addModelerKey = function() {
  const modeler = this;
  
  let key = new ModelerKey({
    "where":modeler.layers.base,
  });
  return key;
};
