/* global FunctionPlotterInput */
/* global d3 */
FunctionPlotterInput.prototype.mouseover = function() {
  const input = this;

  return () => {
    let highlightTransition;

    highlightTransition = d3
      .transition()
      .duration(125);

    input.inputCircle
      .transition(highlightTransition)
      .attr("fill",input.highlightFill)
      .attr("r",input.highlightRadius);

    input.inputTextGhost
      .attr("display","block")
      .transition(highlightTransition)
      .attr("opacity",1);

    input.inputText
      .attr("display","block")
      .transition(highlightTransition)
      .attr("opacity",1);

    if(isFinite(input.data.output)) {
      input.line
        .transition(highlightTransition)
        .attr("stroke",input.highlightFill);

      input.outputCircle
        .transition(highlightTransition)
        .attr("fill",input.highlightFill)
        .attr("r",input.highlightRadius);

      input.outputText
        .attr("display","block")
        .transition(highlightTransition)
        .attr("opacity",1);

      input.outputTextGhost
        .attr("display","block")
        .transition(highlightTransition)
        .attr("opacity",1);      
    }

  };
};
