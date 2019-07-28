/* jshint esversion:6 */
Minibar.prototype.defineStyles = function(options) {
  const bar = this;
  let styles = defaulter(options.styles,{});

  styles.track = defaulter(styles.track,{});
  styles.track.fill = defaulter(styles.track.fill,"#aaa");
  styles.track.stroke = defaulter(styles.track.stroke,"#000");
  styles.track.strokeWidth = defaulter(styles.track.strokeWidth,1);
  styles.track.height = defaulter(styles.track.height,5);

  styles.active = defaulter(styles.active,{});
  styles.active.height = defaulter(styles.active.height,5);
  styles.active.fill = defaulter(styles.active.fill,"blue");
  styles.active.stroke = defaulter(styles.active.stroke,"none");
  styles.active.strokeWidth = defaulter(styles.active.strokeWidth,2);

  styles.line = defaulter(styles.line,{});
  styles.line.stroke = defaulter(styles.line.stroke,"#000099");
  styles.line.strokeWidth = defaulter(styles.line.strokeWidth,3);
  styles.line.height = defaulter(styles.line.height,10);

  styles.labels = defaulter(styles.labels,{});
  styles.labels.fontFamily = defaulter(styles.labels.fontFamily,"Source Sans Pro");
  styles.labels.fontSize = defaulter(styles.labels.fontSize,"14px");
  styles.labels.fontFill = defaulter(styles.labels.fontFill,"black");
  styles.labels.fontWeight = defaulter(styles.labels.fontWeight,"normal");
  styles.labels.offset = defaulter(styles.labels.offset,3);

  styles.valueLabel = defaulter(styles.valueLabel,{});
  styles.valueLabel.fontFamily = defaulter(styles.valueLabel.fontFamily,"Source Sans Pro");
  styles.valueLabel.fontSize = defaulter(styles.valueLabel.fontSize,"16px");
  styles.valueLabel.fontFill = defaulter(styles.valueLabel.fontFill,"bold");
  styles.valueLabel.fontWeight = defaulter(styles.valueLabel.fontWeight,"bold");
  styles.valueLabel.offset = defaulter(styles.valueLabel.offset,3);
  styles.valueLabel.xOffset = defaulter(styles.valueLabel.xOffset,5);
  styles.valueLabel.ghostStroke = "white";
  styles.valueLabel.ghostStrokeWidth = 3;

  styles.title = defaulter(styles.title,{});
  styles.title.fontFamily = defaulter(styles.title.fontFamily,"Source Sans Pro");
  styles.title.fontWeight = defaulter(styles.title.fontWeight,"normal");
  styles.title.fontSize = defaulter(styles.title.fontSize,"14px");
  styles.title.fontFill = defaulter(styles.title.fontFill,"#999");

  return styles;

  function defaulter(s,v) {
    return s ? s : v;
  }
}
