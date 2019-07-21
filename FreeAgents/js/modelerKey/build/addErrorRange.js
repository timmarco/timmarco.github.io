/* jshint esversion:6 */
ModelerKey.prototype.addErrorRange = function() {
  const key = this;
  let toReturn = {};

  toReturn.group = key.group
    .append("g");

  toReturn.rect = toReturn.group
    .append("rect")
    .attr("x",-5)
    .attr("y",-5)
    .attr("width",10)
    .attr("height",10)
    .attr("stroke","none")
    .attr("fill",key.styles.errorRangeFill);

  toReturn.errorRange = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Similar Players"
  }).show()
  .move({
    "x":10,
    "y":-7
  });

  toReturn.warLabel = new TextLabel({
    "where":toReturn.group,
    "textAnchor":"start",
    "foregroundColor":key.styles.textColor,
    "fontFamily":key.styles.fontFamily,
    "fontWeight":key.styles.fontWeight,
    "fontSize":key.styles.fontSize,
    "text":"Career WAR Range"
  }).show()
  .move({
    "x":10,
    "y":7
  });


  return toReturn;
};
