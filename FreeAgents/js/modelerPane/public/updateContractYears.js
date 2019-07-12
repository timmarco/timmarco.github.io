/* jshint esversion:6 */
ModelerPane.prototype.updateContractYears = function() {
  const pane = this;

  pane.yearLabels.forEach((label,yearIndex) => {
    if(yearIndex >= pane.contractValues.contractLength) {
      label
        .hide();
    }
  });


  pane.salarySliders.forEach((slider,yearIndex) => {
    if(yearIndex >= pane.contractValues.contractLength) {
      slider
        .hide();
    } else {
      slider
        .show();
    }
  });

  pane.winValueSliders.forEach((slider,yearIndex) => {
    if(yearIndex >= pane.contractValues.contractLength) {
      slider
        .hide();
    } else {
      slider
        .show();
    }
  });

  pane
    .updateContractValue();


  return pane;
};
