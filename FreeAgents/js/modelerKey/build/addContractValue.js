/* jshint esversion:6 */
ModelerKey.prototype.addContractValue = function() {
  const key = this;
  let toReturn = {};

  toReturn.group = key.group
    .append("g");

  toReturn.line = toReturn.group
    .append("line")
    .attr("x1",-7.5)
    .attr("x2",7.5)
    .attr("y1",0)
    .attr("y2",0)
    .attr("stroke",key.styles.contractValueStroke)
    .attr("stroke-width",5);

  toReturn.playerNameLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Contract Fair"
  }).show()
  .move({
    "x":10,
    "y":-6
  });

  toReturn.warLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Market Value"
  }).show()
  .move({
    "x":10,
    "y":6
  });


  return toReturn;
};
