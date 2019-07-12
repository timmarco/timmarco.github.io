/* jshint esversion:6 */
ModelerPane.prototype.defineReferencePoints = function() {
  const pane = this;
  let referencePoints = {};

  referencePoints.centerX = pane.size.width / 2;
  referencePoints.centerY = pane.size.height / 3;
  referencePoints.topSixth = referencePoints.topThird / 2;
  referencePoints.topThird = pane.size.height / 3;
  referencePoints.secondThird = referencePoints.topThird * 2;

  referencePoints.titleCenter = referencePoints.topThird / 6;
  referencePoints.titleCoordinates = {"x":referencePoints.centerX,"y":referencePoints.titleCenter};
  referencePoints.contractSliderCenter = referencePoints.titleCenter * 2;

  referencePoints.rightSixth = pane.size.width / 6;
  referencePoints.rightThird = pane.size.width / 3;
  referencePoints.rightSecondThird = referencePoints.rightThird * 2;

  referencePoints.yearGroupCoordinates = {"x":referencePoints.rightSixth,"y":referencePoints.topThird};
  referencePoints.salaryGroupCoordinates = {"x":referencePoints.rightThird,"y":referencePoints.topThird};
  referencePoints.winValueGroupCoordinates = {"x":referencePoints.rightSecondThird,"y":referencePoints.topThird};

  referencePoints.topSixth = referencePoints.topThird / 2;

  referencePoints.bottomLine = pane.size.height - referencePoints.topSixth;
  referencePoints.bottomCenter = pane.size.height - (referencePoints.topSixth);

  referencePoints.tableRowHeight = (referencePoints.bottomLine - referencePoints.topThird) / 15;

  referencePoints.buttonCoordinates = {"x":referencePoints.rightSecondThird,"y":referencePoints.bottomCenter };

  referencePoints.offscreen = {"x":800,"y":0};
  referencePoints.onscreen = {"x":50,"y":0};


  return referencePoints;
};
