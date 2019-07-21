/* jshint esversion:6 */
ModelerPane.prototype.defineReferencePoints = function() {
  const pane = this;
  let referencePoints = {};

  referencePoints.centerX = pane.size.width / 2;
  referencePoints.centerY = pane.size.height / 3;
  referencePoints.topThird = pane.size.height / 3;
  referencePoints.topSixth = referencePoints.topThird / 2;
  referencePoints.secondThird = referencePoints.topThird * 2;

  referencePoints.titleCenter = referencePoints.topThird / 6;
  referencePoints.titleCoordinates = {"x":referencePoints.centerX,"y":referencePoints.titleCenter};
  referencePoints.contractSliderCenter = referencePoints.titleCenter * 2;

  referencePoints.rightSixth = pane.size.width / 6;
  referencePoints.rightThird = pane.size.width / 3;
  referencePoints.rightSecondThird = referencePoints.rightThird * 2;

  referencePoints.yearGroupCoordinates = {"x":referencePoints.rightSixth,"y":referencePoints.topThird};
  referencePoints.salaryGroupCoordinates = {"x":referencePoints.rightThird,"y":referencePoints.topSixth * 1.5 + 25};
  referencePoints.winValueGroupCoordinates = {"x":referencePoints.rightSecondThird,"y":referencePoints.topSixth * 1.5 + 25};

  referencePoints.topSixth = referencePoints.topThird / 2;

  referencePoints.bottomLine = pane.size.height - referencePoints.topSixth;
  referencePoints.bottomCenter = pane.size.height - (referencePoints.topSixth);

  referencePoints.tableRowHeight = (referencePoints.bottomLine - referencePoints.topThird) / 15;

  referencePoints.buttonCoordinates = {"x":referencePoints.rightSecondThird,"y":referencePoints.bottomCenter };

  referencePoints.offscreen = {"x":800,"y":0};
  referencePoints.onscreen = {"x":83.33,"y":0};


  referencePoints.titleCoordinates = {
    "x":30,
    "y":20.667
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
    "x":30,
    "y":70
  };

  referencePoints.overlayContractDescriptionCoordinates = {
    "x":30,
    "y":75
  };

  referencePoints.overlayContractSliderCoordinates =  {
    "x":14.92,
    "y":referencePoints.topSixth * 1.5 + 20
  };

  referencePoints.overlaySalaryCoordinates = {
    "x":referencePoints.rightThird + 30,
    "y":70
  };

  referencePoints.overlaySalaryDescriptionCoordinates = {
    "x":referencePoints.rightThird + 30,
    "y":75
  };

  referencePoints.overlaySalarySliderCoordinates =  {
    "x":14.92,
    "y":230
  };

  referencePoints.overlayWinValueCoordinates = {
    "x":referencePoints.rightSecondThird + 30,
    "y":70
  };

  referencePoints.overlayWinValueDescriptionCoordinates = {
    "x":referencePoints.rightSecondThird + 30,
    "y":75
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
    "x":700,
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

  referencePoints.overlayColumnWidth = 209.13;
  referencePoints.overlayDescriptionHeight = 41.667;
  referencePoints.overlaySliderHeight = 20;
  referencePoints.overlayColumnTableHeight = 218.75;



  return referencePoints;
};
