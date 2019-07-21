/* jshint esversion:6 */
ModelerPane.prototype.updateContractYears = function() {
  const pane = this;

  //
  // pane.winValueSliders.forEach((slider,yearIndex) => {
  //   if(yearIndex >= pane.contractValues.contractLength) {
  //     slider
  //       .hide();
  //   } else {
  //     slider
  //       .show();
  //   }
  // });

  pane
    .updateContractValue();


  return pane;
};
