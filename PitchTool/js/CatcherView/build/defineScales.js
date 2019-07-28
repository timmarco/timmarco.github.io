/* jshint esversion:6 */
CatcherView.prototype.defineScales = function() {
  const view = this;

  let scales = {};

  scales.x = d3.scaleLinear()
    .domain([-3,3])
    .range([0,view.size.width]);

  scales.y = d3.scaleLinear()
    .domain([0,6])
    .range([view.size.height,0]);

  return scales;
};
