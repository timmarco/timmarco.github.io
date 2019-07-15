/* jshint esversion:6 */
Modeler.prototype.addPaneHint = function() {
  const modeler = this;

  let object = modeler.layers.base
    .append("foreignObject")
    .attr("x",modeler.referencePoints.rightPaneCoordinates.x)
    .attr("y",modeler.referencePoints.rightPaneCoordinates.y)
    .attr("width",modeler.referencePoints.rightPaneSize.width)
    .attr("height",modeler.referencePoints.rightPaneSize.height)
    .attr("cursor","pointer");

  let body = object
    .append("xhtml:body")
    .style("height","100%")
    .style("width","100%")
    .style("margin",0)
    .style("background-color","#eee");

  let tableDisplay = body
    .append("div")
    .style("display","table")
    .style("height","100%")
    .style("width","100%");

  let tableCenter = tableDisplay
    .append("div")
    .style("display","table-cell")
    .style("height","100%")
    .style("vertical-align","middle")
    .style("padding-left","1em")
    .style("padding-right","1em");

  let emptyDiv = tableCenter
    .append("div")
    .style("border","5px dashed #20639B")
    .style("padding","0.25em");

  let display = emptyDiv
    .append("div")
    .style("color","#20639B")
    .html("<div style='font-size:2em; font-weight:bold'>Contract Simulator</div><div><strong>Click here</strong> to evaluate potential contracts for <span class='playerName'></span>.</div>");



  object
    .on('mouseover',() => {
      body
        .transition()
        .duration(250)
        .style("background-color","#20639B");

      display
        .transition()
        .duration(250)
        .style("color","#eee");

      emptyDiv
        .transition()
        .duration(250)
        .style("border","5px dashed #eee");

    })
    .on('mouseout',() => {
      body
        .transition()
        .duration(175)
        .style("background-color","#eee");

      display
        .transition()
        .duration(175)
        .style("color","#20639B");

      emptyDiv
        .transition()
        .duration(175)
        .style("border","5px dashed #20639B");


    })
    .on('click',() => {
      modeler.pane
        .transitionIn();
    });

  return object;
};
