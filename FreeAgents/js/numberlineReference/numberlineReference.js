/* jshint esversion:6 */
function NumberlineReference(options) {
  const chart = this;

  init(options);

  return chart;

  function init(options) {
    chart.svg = chart.addSvg(options.where);
    chart.styles = chart.defineStyles();
    chart.labels = chart.defineLabels(options.type);
    chart.leftText = chart.addLeftText();
    chart.rightText = chart.addRightText();
  }

  function defineStyles() {
  }

  function defineLabels(type) {
  }

  function addSvg(where) {
  }


  function addLeftText() {
  }

  function addRightText() {
  }
}
