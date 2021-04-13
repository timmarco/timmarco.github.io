BlurAttentionSketch.prototype.reset = function() {
  const blur = this;

  blur.buttons
    .forEach((button) => {
      button
        .reset();

      blur.gaussian
        .transition()
        .duration(200)
        .ease(d3.easeLinear)
        .attr("stdDeviation",0);
    });
}
