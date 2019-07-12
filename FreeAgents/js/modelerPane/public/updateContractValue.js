/* jshint esversion:6 */
ModelerPane.prototype.updateContractValue = function() {
  const pane = this;


  let totalValue;
  totalValue = 0;

  pane.contractValues.salary.forEach((dollars,yearIndex) => {
    if(yearIndex < pane.contractValues.contractLength) {
      totalValue += dollars;
      pane.salarySliders[yearIndex].valueLabel.updateText("$" + dollars.toFixed(2) + "M");
      pane.winValueSliders[yearIndex].valueLabel.updateText("$" + pane.contractValues.winValue[yearIndex].toFixed(2) + "M");
    }
  });



  pane.totalContractValue.contractValueLabel
    .updateText("$" + totalValue.toFixed(0) + "mm");

  return pane;
};
