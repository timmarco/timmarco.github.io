/* jshint esversion:6 */
BrushBox.prototype.defineStyles = function(options) {
  const box = this;

  let styles = defaulter(options.styles,{});

  styles.defaultRect = defaulter(styles.defaultRect,{});
  styles.defaultRect.fill = defaulter(styles.defaultRect.fill,"rgba(0,0,0,0)");
  styles.defaultRect.stroke = defaulter(styles.defaultRect.stroke,"#999");
  styles.defaultRect.strokeWidth = defaulter(styles.defaultRect.strokeWidth,1);
  styles.defaultRect.strokeDashArray = defaulter(styles.defaultRect.strokeDashArray,"4,4");

  styles.rectHighlightTransition = defaulter(styles.rectHighlightTransition,{});
  styles.rectHighlightTransition.duration = defaulter(styles.rectHighlightTransition.duration,100);

  styles.highlightRect = defaulter(styles.highlightRect,{});
  styles.highlightRect.fill = defaulter(styles.highlightRect.fill,"rgba(0,0,255,0.0675)");
  styles.highlightRect.stroke = defaulter(styles.highlightRect.stroke,"blue");
  styles.highlightRect.strokeWidth = defaulter(styles.highlightRect.strokeWidth,1);
  styles.highlightRect.strokeDashArray = defaulter(styles.highlightRect.strokeDashArray,"4,4");

  styles.groundIndicator = defaulter(styles.groundIndicator,{});
  styles.groundIndicator.stroke = defaulter(styles.groundIndicator.stroke,"rgba(255,0,0,0.5)");
  styles.groundIndicator.strokeWidth = defaulter(styles.groundIndicator.strokeWidth,3);
  styles.groundIndicator.strokeDashArray = defaulter(styles.groundIndicator.strokeDashArray,"5,3");
  styles.groundIndicator.radius = defaulter(styles.groundIndicator.radius,3);
  styles.groundIndicator.circleFill = defaulter(styles.groundIndicator.circleFill,"rgba(255,0,0,1)");
  styles.groundIndicator.circleStroke = defaulter(styles.groundIndicator.circleStroke,"black");
  styles.groundIndicator.circleStrokeWidth = defaulter(styles.groundIndicator.circleStrokeWidth,1);
  styles.groundIndicator.fontFamily = defaulter(styles.groundIndicator.fontFamily,"sans serif");
  styles.groundIndicator.fontSize = defaulter(styles.groundIndicator.fontSize,"10px");
  styles.groundIndicator.fontFill = defaulter(styles.groundIndicator.fontFill,"rgba(255,0,0,1)");



  styles.defaultCorner = defaulter(styles.defaultCorner,{});
  styles.defaultCorner.radius = defaulter(styles.defaultCorner.radius,3);
  styles.defaultCorner.fill = defaulter(styles.defaultCorner.fill,"white");
  styles.defaultCorner.stroke = defaulter(styles.defaultCorner.stroke,"green");
  styles.defaultCorner.strokeWidth = defaulter(styles.defaultCorner.strokeWidth,"1");

  styles.cornerHotspot = defaulter(styles.cornerHotspot,{});
  styles.cornerHotspot.radius = defaulter(styles.cornerHotspot.radius,10);
  styles.cornerHotspot.fill = defaulter(styles.cornerHotspot.fill,"rgba(0,0,0,0)");
  styles.cornerHotspot.stroke = defaulter(styles.cornerHotspot.stroke,"none");
  styles.cornerHotspot.strokeWidth = defaulter(styles.cornerHotspot.strokeWidth,0);

  styles.cornerHotspotTransition = defaulter(styles.cornerHotspotTransition,{});
  styles.cornerHotspotTransition.duration = defaulter(styles.cornerHotspotTransition.duration,150);

  styles.highlightCorner = defaulter(styles.highlightCorner,{});
  styles.highlightCorner.radius = defaulter(styles.highlightCorner.radius,10);
  styles.highlightCorner.fill = defaulter(styles.highlightCorner.fill,"rgba(0,255,0,1)");
  styles.highlightCorner.stroke = defaulter(styles.highlightCorner.stroke,"blue");
  styles.highlightCorner.strokeWidth = defaulter(styles.highlightCorner.strokeWidth,0);

  styles.edgeIndicators = defaulter(styles.edgeIndicators,{});
  styles.edgeIndicators.stroke = defaulter(styles.edgeIndicators.stroke,"rgba(0,255,0,1)");
  styles.edgeIndicators.strokeWidth = defaulter(styles.edgeIndicators.strokeWidth,3);

  styles.activeCorner = defaulter(styles.activeCorner,{});
  styles.activeCorner.radius = defaulter(styles.activeCorner.radius,5);
  styles.activeCorner.fill = defaulter(styles.activeCorner.fill,"rgba(0,255,0,1)");
  styles.activeCorner.stroke = defaulter(styles.activeCorner.stroke,"blue");
  styles.activeCorner.strokeWidth = defaulter(styles.activeCorner.strokeWidth,2);

  styles.sizeIndicator = defaulter(styles.sizeIndicator,{});
  styles.sizeIndicator.fill = defaulter(styles.sizeIndicator.fill,"rgba(0,255,0,1)");
  styles.sizeIndicator.stroke = defaulter(styles.sizeIndicator.stroke,"black");
  styles.sizeIndicator.strokeWidth = defaulter(styles.sizeIndicator.strokeWidth,1);
  styles.sizeIndicator.fontFamily = defaulter(styles.sizeIndicator.fontFamily,"sans serif");
  styles.sizeIndicator.fontWeight = defaulter(styles.sizeIndicator.fontWeight,"bold");
  styles.sizeIndicator.fontSize = defaulter(styles.sizeIndicator.fontSize,"10px");



  return styles;

  function defaulter(setValue,defaultValue) {
    return setValue ? setValue : defaultValue;
  }

}
