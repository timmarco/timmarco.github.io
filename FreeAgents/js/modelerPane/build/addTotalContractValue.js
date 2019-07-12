/* jshint esversion:6 */
ModelerPane.prototype.addTotalContractValue = function() {
  const pane = this;

  let groupHeight = pane.referencePoints.topSixth;

  let toReturn = {};
  toReturn.group = pane.group
    .append("g")
    .attr("transform","translate(100,"+pane.referencePoints.bottomLine+")");

  toReturn.nameLabel = new TextLabel({
    "where":toReturn.group,
    "text":"Total Contract Cost",
    "fontFamily":pane.styles.fontFamily,
    "fontSize":pane.styles.contractCostLabelFontSize,
    "fontWeight":pane.styles.contractCostLabelFontWeight,
    "textAnchor":"middle"
  }).move({
    "x":0,
    "y":groupHeight / 4
  })
  .show();

  toReturn.contractValueLabel = new TextLabel({
    "where":toReturn.group,
    "text":"$MM",
    "fontFamily":pane.styles.fontFamily,
    "fontSize":pane.styles.contractCostFontSize,
    "fontWeight":pane.styles.contractCostFontWeight,
    "textAnchor":"middle"
  }).move({
    "x":0,
    "y":groupHeight * 2 / 3
  })
  .show();

  return toReturn;
};
