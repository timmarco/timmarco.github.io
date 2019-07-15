/* jshint esversion:6 */
ModelerPane.prototype.finishEditing = function() {
  const pane = this;

  pane
    .transitionOut();

  pane.contractValues.salary.forEach((value,index) => {
    pane.contractValues.salary[index] = pane.contractValues.aav;
  });

  pane.parent
    .dataFromPane(pane.contractValues);

  return pane;
};
