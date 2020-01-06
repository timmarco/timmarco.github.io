WorkExample.prototype.unhighlight = function() {
  const example = this;
  return() => {

    example.filters.saturation
      .transition()
      .duration(175)
      .attr("values",0.25);

    example.filters.blur
      .transition()
      .duration(175)
      .attr("stdDeviation",5);

    example.body
      .transition()
      .duration(100)
      .attr("y",example.layout.size.height);

    example.layers.text
      .selectAll("rect")
      .transition()
      .duration(75)
      .attr("fill","black");

    example.scales
      .transition()
      .duration(250)
      .attr("transform","scale(1)");

    const textGroupHeight = example.headline.node().getBBox().height;
    const headlineY = example.layout.centerY - textGroupHeight / 2;

    example.headline
      .transition()
      .duration(125)
      .attr("transform","translate("+example.layout.textTranslateX+","+headlineY+")");


    return example;
  }
}
