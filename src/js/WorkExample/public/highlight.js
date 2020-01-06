WorkExample.prototype.highlight = function() {
  const example = this;
  return () => {

    // Hide scaling from Firefox due to poor performance in FF SVG
    if(!example.parent.browserInfo.isFirefox) {
      example.filters.saturation
        .transition()
        .duration(250)
        .attr("values",1);

      example.filters.blur
        .transition()
        .duration(250)
        .attr("stdDeviation",0);

      example.layers.text
        .selectAll("rect")
        .transition()
        .duration(125)
        .attr("fill","green");

      if(!example.parent.browserInfo.isSafari) {
        example.scales
          .transition()
          .duration(function(d,i) { return 125 + i * 125})
          .attr("transform",function(d,i) {
            const maxScale = 1 + i * 0.1;
            return "scale("+maxScale+")";
          });        
      }
    }


    example.headline
      .transition()
      .duration(125)
      .ease(d3.easeQuad)
      .attr("transform","translate("+example.layout.textTranslateX+","+example.layout.headlineHighlightY+")");

    const headlineSize = example.headline.node().getBBox().height;

    example.body
      .transition()
      .duration(250)
      .attr("y",example.layout.headlineHighlightY + headlineSize);

    return example;
  }
}
