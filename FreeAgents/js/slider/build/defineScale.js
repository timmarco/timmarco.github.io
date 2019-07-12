/* jshint esversion:6 */
Slider.prototype.defineScale = function() {
  const slider = this;
  let scale;

  scale = d3.scaleLinear()
    .domain(slider.domain)
    .range([slider.referencePoints.trackMin,slider.referencePoints.trackMax]);

  return scale;
};
