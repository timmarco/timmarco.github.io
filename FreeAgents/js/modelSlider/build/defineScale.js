/* jshint esversion:6 */
ModelSlider.prototype.defineScale = function(domain) {
  const slider = this;

  let scale = d3.scaleLinear()
    .domain(domain)
    .range([slider.referencePoints.xMin,slider.referencePoints.xMax]);

  return scale;
}
