/* global FunctionPlotter */
/* global d3 */
FunctionPlotter.prototype.mousemove = function() {
  const plotter = this;

  return () => {
    let mouseValue;

    if(!plotter.interactive) { return; }

    mouseValue = plotter.xScale.invert(d3.event.offsetX);

    if(mouseValue < plotter.domain[0]) { return; }
    if(mouseValue > plotter.domain[1]) { return; }
    plotter
      .calculateValues(mouseValue)
      .updateValues();

  };

};
