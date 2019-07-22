/* jshint esversion:6 */
ModelerKey.prototype.defineStyles = function(options) {
  const key = this;
  let styles = defaulter(options.styles,{});

  styles.fontFamily = defaulter(styles.fontFamily,"Source Sans Pro");
  styles.fontSize = "10pt";
  styles.fontWeight = defaulter(styles.fontWeight,"normal");
  styles.lineStrokeWidth = defaulter(styles.lineStrokeWidth,4);
  styles.playerHistoryStroke = defaulter(styles.playerHistoryStroke,"#173f5f");
  styles.playerProjectionStroke = defaulter(styles.playerProjectionStroke,"#173f5f");
  styles.playerProjectStrokeDasharray = defaulter(styles.playerPrjectionStrokeDasharray,"3,3");
  styles.similarPlayersStroke = defaulter(styles.similarPlayersStroke,"#ddd");
  styles.contractValueStroke = defaulter(styles.contractValueStroke,"#ed553b");
  styles.errorRangeFill = defaulter(styles.errorRangeFill,"#bbd");
  styles.textColor = defaulter(styles.textColor,"#173f5f");

  return styles;

  function defaulter(setValue,defaultValue) {
    return setValue !== undefined ? setValue : defaultValue;
  }
};
