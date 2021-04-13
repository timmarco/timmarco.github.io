BlurAttentionSketch.prototype.drawAttention = function(button) {
  const blur = this;

  blur.buttons
    .forEach((iteratedButton) => {
      blur.gaussian
        .transition()
        .duration(250)
        .ease(d3.easeLinear)
        .attr("stdDeviation",5);

      if(button == iteratedButton) {
        iteratedButton
          .bringForward();
      } else {
        iteratedButton
          .sendBack();
      }
    });

}
