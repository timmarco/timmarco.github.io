/* jshint esversion:6 */
Modeler.prototype.defineReferencePoints = function() {
  const modeler = this;

  let referencePoints = {};
  referencePoints.leftPaneSize = {
    "width":467,
    "height":500
  };

  referencePoints.nameCoordinates = {
    "x":235,
    "y":31.25
  };

  referencePoints.subTitleCoordinates = {
      "x":235,
      "y":62.5
  };

  referencePoints.warFormulationCoordinates = {
    "x":100,
    "y":93.75
  };

  referencePoints.projectionTypeCoordinates = {
    "x":100,
    "y":114.58
  };

  referencePoints.chartOrigin = {
    "x":0,
    "y":135.42
  };

  referencePoints.chartSize = {
    "width":433.33,
    "height":260.42
  };

  referencePoints.chartMarginLeft = 66.67;
  referencePoints.chartMarginBottom = 52.08;

  referencePoints.chartMargins = {
    "left":66.67,
    "right":0,
    "top":0,
    "bottom":52.08
  };

  referencePoints.chartEffectiveMidX = 266.68;
  referencePoints.chartEffectiveMidY = 239.59;

  referencePoints.chartXAxisLabelCoordinates = {
    "x":referencePoints.chartEffectiveMidX,
    "y":369.8
  };

  referencePoints.chartYAxisLabelCoordinates = {
    "x":50,
    "y":referencePoints.chartEffectiveMidY
  };




  referencePoints.chartEffectiveSize = {
    "width":366.67,
    "height":208.34
  };

  referencePoints.chartXAxisMin = referencePoints.chartOrigin.x + referencePoints.chartMarginLeft;
  referencePoints.chartYAxisMin = referencePoints.chartOrigin.y + referencePoints.chartEffectiveSize.height;

  referencePoints.chartXAxisMax = referencePoints.chartXAxisMin + referencePoints.chartEffectiveSize.width;
  referencePoints.chartYAxisMax = referencePoints.chartYAxisMin - referencePoints.chartEffectiveSize.height;

  referencePoints.chartMinCoordinates = {
    "x":referencePoints.chartXAxisMin,
    "y":referencePoints.chartYAxisMin
  };

  referencePoints.legendCoordinates = {
    "x":16.67,
    "y":416.67
  };

  referencePoints.legendSize = {
    "width":433.33,
    "height":52.09
  };

  referencePoints.rightPaneSize = {
    "width":250,
    "height":500
  };

  referencePoints.rightPaneCoordinates = {
    "x":550,
    "y":0
  };

  referencePoints.overlayPlaneSize = {
    "width":716.67,
    "height":500
  };

  referencePoints.overlayPlaneOffscreen = {
    "x":800,
    "y":0
  };

  referencePoints.overlayPlaneOnscreen = {
    "x":83.33,
    "y":0
  };

  referencePoints.overlayTitleCoordinates = {
    "x":14.92,
    "y":41.67
  };

  referencePoints.overlayContractCoordinates = {
    "x":14.92,
    "y":104.17
  };

  referencePoints.overlayContractDescriptionCoordinates = {
    "x":14.92,
    "y":125
  };

  referencePoints.overlayContractSliderCoordinates =  {
    "x":14.92,
    "y":177.083
  };

  referencePoints.overlaySalaryCoordinates = {
    "x":253.94,
    "y":104.17
  };

  referencePoints.overlaySalaryDescriptionCoordinates = {
    "x":253.94,
    "y":125
  };

  referencePoints.overlaySalarySliderCoordinates =  {
    "x":253.94,
    "y":177.083
  };

  referencePoints.overlayWinValueCoordinates = {
    "x":492.94,
    "y":104.17
  };

  referencePoints.overlayWinValueDescriptionCoordinates = {
    "x":492.94,
    "y":125
  };

  referencePoints.overlayWinValueTableCoordinates = {
    "x":492.94,
    "y":177.083
  };

  referencePoints.saveButtonCoordinates = {
    "x":492.94,
    "y":437.5
  };

  referencePoints.saveButtonSize = {
    "width":209.13,
    "height":41.667
  };

  referencePoints.contractDetailsHeadingCoordinates = {
    "x":625,
    "y":41.68
  };

  referencePoints.projectedSurplusHeadingCoordinates = {
    "x":566.67,
    "y":72.92
  };

  referencePoints.projectedSurplusValueCoordinates = {
    "x":566.67,
    "y":93.75
  };

  referencePoints.contractValueHeadingCoordinates = {
    "x":700,
    "y":72.92
  };

  referencePoints.contractValueCoordinates = {
    "x":700,
    "y":93.75
  };

  referencePoints.editSalaryButtonCoordinates = {
    "x":566.67,
    "y":197.92
  };

  referencePoints.winValueButtonCoordinates = {
    "x":675,
    "y":197.92
  };

  referencePoints.contractTableCoordinates = {
    "x":483.333,
    "y":197.92
  };

  referencePoints.contractTableSize = {
    "width":300,
    "height":260.41
  };

  referencePoints.rightPaneContractLengthSliderCoordinates = {
    "x":483.33,
    "y":135
  };

  referencePoints.aavSliderCoordinates = {
    "x":483.33,
    "y":150
  };


  referencePoints.overlayColumnWidth = 209.13;
  referencePoints.overlayDescriptionHeight = 41.667;
  referencePoints.overlaySliderHeight = 41.667;
  referencePoints.overlayColumnTableHeight = 218.75;

  return referencePoints;
};
