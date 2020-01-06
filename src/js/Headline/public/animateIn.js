Headline.prototype.animateIn = function() {
  const headline = this;

  if(!headline.hasTransitioned) {

    headline.accent
      .transition()
      .duration(250)
      .ease(d3.easeCubic)
      .attr("height",headline.layout.accent.size.height)
      .attr("y",0)
      .transition()
      .delay(500)
      .duration(250)
      .ease(d3.easeCubicOut)
      .attr("height",0)
      .attr("y",headline.layout.size.height / 2);

    const endX = headline.background
      .node()
      .getBBox()
      .width;

    headline.curtainGroup
      .transition()
      .ease(d3.easeLinear)
      .duration(375)
      .delay(250)
      .attr("transform","translate("+endX+",0)");

    headline.hasTransitioned = true;
  }

  const textEndPosition = headline.text
    .attr("x");

  const textStartWidth = headline.text.node()
    .getBBox()
    .width;

  const textStartPosition = -textEndPosition - textStartWidth;

  const backgroundEndPosition = headline.background
    .attr("width");

  const accentEndHeight = headline.accent
    .attr("height");


  // headline.accent
  //   .transition()
  //   .duration(250)
  //   .delay(0)
  //   .ease(d3.easeCubic)
  //   .attr("height",headline.animationFactors.accentEndHeight)
  //   .attr("y",0);
  //
  // headline.background
  //   .transition()
  //   .delay(175)
  //   .duration(625)
  //   .ease(d3.easeExp)
  //   .attr("x",0);
  //
  // headline.text
  //   .transition()
  //   .duration(250)
  //   .delay(250)
  //   .ease(d3.easeExp)
  //   .attr("opacity",1)
  //   .attr("x",headline.animationFactors.textEndPosition);

  return headline;
}
