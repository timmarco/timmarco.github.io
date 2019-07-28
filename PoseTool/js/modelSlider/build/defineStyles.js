/* jshint esversion:6 */
ModelSlider.prototype.defineStyles = function(options) {
  const slider = this;

  let styles = defaulter(options.styles,{});

  styles.trackFill = defaulter(styles.trackfill,"#eee");
  styles.trackHeight = defaulter(styles.trackHeight,4);
  styles.activeTrackFill = defaulter(styles.activeTrackFill,"#ed553b");

  styles.circleRadius = defaulter(styles.circleRadius,3);
  styles.circleFill = defaulter(styles.circleFill,"white");
  styles.circleStroke = defaulter(styles.circleStroke,"#aaa");
  styles.circleStrokeWidth = defaulter(styles.circleStrokeWidth,1);

  styles.highlightCircleRadius = defaulter(styles.highlightCircleRadius,7);
  styles.highlightCircleFill = defaulter(styles.highlightCircleFill,"#ed553b");
  styles.highlightCircleOpacity = defaulter(styles.highlightCircleOpacity,0.25);

  styles.dragCircleOpacity = defaulter(styles.dragCircleOpacity,1);

  styles.labelFontSize = defaulter(styles.labelFontSize,"10pt");
  styles.labelFontFamily = defaulter(styles.labelFontFamily,"Source Sans Pro");
  styles.labelFontFill = defaulter(styles.labelFontFill,"#333");
  styles.labelFontOpacity = defaulter(styles.labelFontOpacity,1);
  styles.labelActiveFontSize = defaulter(styles.labelActiveFontSize,"12pt");
  styles.labelActiveFontFill = defaulter(styles.labelActiveFontFill,"black");
  styles.labelGhostStroke = defaulter(styles.labelGhostStroke,"white");
  styles.labelGhostStrokeWidth = defaulter(styles.labelGhostStrokeWidth,3);


  return styles;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}
