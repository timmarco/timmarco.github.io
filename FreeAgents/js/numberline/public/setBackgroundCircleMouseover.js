/* jshint esversion:6 */
Numberline.prototype.setBackgroundCircleMouseover = function() {
  const chart = this;

  chart.backgroundCircleMouseover = (circle,datum) => {
    chart.showHighlight(datum);
    let toPass = datum;
    toPass.value = circle.datum().value;
    toPass.chartName = chart.options.name;
    toPass.summaryData = chart.summaryData;
    chart.tooltip.showNumberlineDatum(toPass);
  };

};
