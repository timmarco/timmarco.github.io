/* jshint esversion:6 */
Modeler.prototype.addPlayerData = function(data,projections,name) {
  const modeler = this;

  modeler.chart
    .addPlayerData(data,projections,name);

  modeler.projections = projections;

  let yearsToProject = projections.mean.map((a) => { return a.age; });
  yearsToProject.shift();

  // modeler.salarySliders = modeler.addSalarySliders(yearsToProject);
  // modeler.winValueSliders = modeler.addWinValueSliders(yearsToProject);
  //
  // modeler.calculateContractValues();

  return modeler;
};
