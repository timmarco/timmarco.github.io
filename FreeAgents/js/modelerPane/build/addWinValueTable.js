/* jshint esversion:6 */
ModelerPane.prototype.addWinValueTable = function() {
  const pane = this;
  let foreignObject = pane.group
    .append("foreignObject")
    .attr("x",pane.referencePoints.overlayWinValueTableCoordinates.x)
    .attr("y",pane.referencePoints.overlayWinValueTableCoordinates.y)
    .attr("width",pane.referencePoints.overlayColumnWidth)
    .attr("height",pane.referencePoints.overlayColumnTableHeight)
    .style("overflow","scroll");

  let foreignBody = foreignObject
    .append("xhtml:body")
    .attr("height","100%")
    .attr("width","100%")
    .style("overflow","scroll");


  d3.range(0,16).forEach((number) => {
    let embeddedSvg = foreignBody
      .append("svg")
      .attr("width",pane.referencePoints.overlayColumnWidth)
      .attr("height",50);

    let year = number + 2019;

    let slider = new Slider({
      "where":embeddedSvg,
      "label":year,
      "coordinates":{"x":0,"y":0},
      "domain":[8,30],
      "defaultValue":pane.contractValues.winValue[number],
      "significantDigits":0,
      "size":{
        "width":pane.referencePoints.overlayColumnWidth - 10,
        "height":35
      }
    }).setDragCallback((newValue) => {
      pane.contractValues.winValue[number] = +newValue.toFixed(2);
      pane.killAllGlows();
      pane.updateContractValue();
      pane.hasDragged = true;
    })
    .runGlow();

    pane.winValueSliders.push(slider);
  });

  return foreignObject;
};
