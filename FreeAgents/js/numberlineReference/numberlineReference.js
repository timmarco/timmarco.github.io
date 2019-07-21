/* jshint esversion:6 */
function NumberlineReference(options) {
  const chart = this;

  init(options);

  return chart;

  function init(options) {
    chart.playerName = options.name;
    chart.svg = chart.addSvg(options.where);
    chart.styles = chart.defineStyles();
    chart.bottomLine = chart.addBottomLine();
    chart.labels = chart.defineLabels(options.type);
    chart.leftText = chart.addLeftText();
    chart.rightText = chart.addRightText();
    chart.circleKey = chart.addCircleKey();
    chart.qualifierKey = chart.addQualifierKey();
  }

}
