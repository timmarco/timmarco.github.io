/* jshint esversion:6 */
ModelerPane.prototype.addTitle = function() {
  const pane = this;

  let title = new TextLabel({
    "where":pane.group,
    "fontFamily":pane.styles.fontFamily,
    "fontSize":pane.styles.titleFontSize,
    "fontWeight":pane.styles.titleFontWeight,
    "text":"Simulate Contract for [Player Name]"
  }).move(pane.referencePoints.titleCoordinates)
  .show();

  return title;
};
