/* jshint esversion:6 */
ModelerPane.prototype.finishEditing = function() {
  const pane = this;

  pane.contractValues.aav = pane.salaryChart.aavSlider.currentValue;

  pane
    .transitionOut();

  pane.parent
    .dataFromPane(pane.contractValues);

  return pane;
};
