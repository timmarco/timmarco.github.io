/* jshint esversion:6 */
function ModelerPane(options) {
  const pane = this;

  init(options);

  return pane;

  function init(options) {

    pane.parent = options.parent;

    pane.styles = pane.defineStyles(options);

    pane.size = pane.defineSize(options);
    pane.referencePoints = pane.defineReferencePoints(options);

    pane.contractValues = pane.defineContractValues();
    pane.contractLength = 3;

    pane.group = pane.addGroup(options.where);
    pane.rect = pane.addRect();
    pane.title = pane.addTitle();

    pane.durationLabel = pane.addContractDurationLabel();
    pane.durationDescription = pane.addContractDescription();
    pane.contractSlider = pane.addContractYearsSlider();

    pane.salaryLabel = pane.addSalaryLabel();
    pane.salaryDescription = pane.addSalaryDescription();
    pane.salarySlider = pane.addSalarySlider();

    // pane.winValueSliders = [];
    pane.marketValueLabel = pane.addMarketValueLabel();
    pane.marketValueDescription = pane.addMarketValueDescription();
    // pane.winValueTable = pane.addWinValueTable();


    pane.salaryGroup = pane.addSalaryGroup();
    pane.salaryChart = pane.addSalaryChart();

    pane.winValueGroup = pane.addWinValueGroup();
    pane.winValueChart = pane.addWinValueChart();



    pane.saveButton = pane.addSaveButton();

    pane.updateContractYears();


  }

}
