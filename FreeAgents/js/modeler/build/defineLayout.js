/* jshint esversion:6 */
Modeler.prototype.defineLayout = function() {
  const modeler = this;

  let layout = {};

  layout.chartSize = {
    "height":400,
    "width":500
  };

  layout.chartOrigin = {
    "x":0,
    "y":0
  };

  return layout;
};
