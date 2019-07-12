/* global FunctionPlotterInput */
/* global d3 */
FunctionPlotterInput.prototype.mouseout = function() {
  const input = this;

  return () => {

    let highlightTransition;

    highlightTransition = d3
      .transition()
      .duration(125);

    input.inputCircle
      .transition(highlightTransition)
      .attr("fill",input.fill)
      .attr("r",input.r);

    input.inputText
      .transition(highlightTransition)
      .attr("opacity",0)
      .on('end',() => {input.inputText.attr("display","none"); });

    input.inputTextGhost
      .transition(highlightTransition)
      .attr("opacity",0)
      .on('end',() => {input.inputText.attr("display","none"); });


    if(isFinite(input.data.output)) {
      input.line
        .transition(highlightTransition)
        .attr("stroke",input.lineStroke);

      input.outputCircle
        .transition(highlightTransition)
        .attr("fill",input.fill)
        .attr("r",input.r);

      input.outputText
        .transition(highlightTransition)
        .attr("opacity",0)
        .on('end',() => {input.outputText.attr("display","none"); });

      input.outputTextGhost
        .transition(highlightTransition)
        .attr("opacity",0)
        .on('end',() => {input.inputText.attr("display","none"); });      
    }


  };
};
