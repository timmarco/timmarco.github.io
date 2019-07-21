/* jshint esversion:6 */
function Modeler(options) {
  const modeler = this;

  init(options);

  return modeler;

  function init(options) {
    modeler.tooltip = options.tooltip;
    modeler.player = options.player;
    modeler.name = options.name;
    modeler.size = modeler.defineSize(options.size);
    modeler.chartMargins = modeler.defineChartMargins(options.chartMargins);
    modeler.svg = modeler.addSvg(options.where);
    modeler.referencePoints = modeler.defineReferencePoints();
    modeler.layers = modeler.addLayers();
    modeler.title = modeler.addTitle();
    modeler.subtitle = modeler.addSubtitle();
    modeler.warFormulation = modeler.addWARFormulation();
    modeler.BBRefWARButton = modeler.addBBRefWARButton();
    modeler.fangraphsWARButton = modeler.addFangraphsWARButton();
    modeler.projectionType = modeler.addProjectionType();
    modeler.similarPlayersButton = modeler.addSimilarPlayersButton();
    modeler.agingCurvesButton = modeler.addAgingCurvesButton();
    modeler.paneHint = modeler.addPaneHint();
    modeler.rightPane = modeler.addRightPane();
    modeler.paneContractDetails = modeler.addPaneContractDetails();
    modeler.projectedSurplusHeading = modeler.addProjectedSurplusHeading();
    modeler.projectedSurplusValue = modeler.addProjectedSurplusValue();
    modeler.contractValueHeading = modeler.addContractValueHeading();
    modeler.contractValueLabel = modeler.addContractValueLabel();

    modeler.currentEditView = "salary";

    modeler.chart = modeler.addChart();

    modeler.salaryButton = modeler.addEditSalaryButton();
    modeler.winValueButton = modeler.addEditMarketValueButton();

    modeler.contractYearsSlider = modeler.addContractYearsSlider();
    modeler.salaryChartGroup = modeler.addSalaryChartGroup();
    modeler.winChartGroup = modeler.addWinChartGroup();


    modeler.key = modeler.addModelerKey();
    modeler.pane = modeler.addModelerPane();
    modeler.projectionValueData = {};
  }

}
