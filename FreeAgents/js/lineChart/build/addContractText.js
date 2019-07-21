/* jshint esversion:6 */
LineChart.prototype.addContractText = function() {
  const chart = this;

  let text = new TextLabel({
    "where":chart.layers.contract,
    "fontSize":"10pt",
    "fontWeight":"bold",
    "text":"Contract Value",
    "textAnchor":"start",
    "foregroundColor":chart.styles.contractLineStroke,
    "backgroundStroke":"white",
    "outlineWidth":4
  });

  return text;
}
