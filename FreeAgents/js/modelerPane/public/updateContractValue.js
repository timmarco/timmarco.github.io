/* jshint esversion:6 */
ModelerPane.prototype.updateContractValue = function() {
  const pane = this;


  let totalValue;
  totalValue = 0;

  totalValue = pane.contractValues.contractLength * pane.contractValues.aav;

  pane.salarySlider.valueLabel.updateText("$" + pane.contractValues.aav.toFixed(2) + "M");

  pane.contractValues.winValue.forEach((value,yearIndex) => {
    pane.winValueSliders[yearIndex].valueLabel.updateText("$" + pane.contractValues.winValue[yearIndex].toFixed(2) + "M");
  });


  // pane.totalContractValue.contractValueLabel
  //   .updateText("$" + totalValue.toFixed(0) + "mm");

  return pane;
};
