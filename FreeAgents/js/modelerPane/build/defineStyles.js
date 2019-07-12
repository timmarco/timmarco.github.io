/* jshint esversion:6 */
ModelerPane.prototype.defineStyles = function(options) {
  const pane = this;
  let styles = defaulter(options.styles,{});

  styles.backgroundColor = defaulter(styles.backgroundColor,"white");
  styles.fontFamily = defaulter(styles.fontFamily,"Source Sans Pro");
  styles.titleFontSize = defaulter(styles.titleFontSize,"16pt");
  styles.titleFontWeight = defaulter(styles.titleFontWeight,"bold");

  styles.contractCostLabelFontSize = defaulter(styles.contractCostLabelFontSize,"10pt");
  styles.contractCostLabelFontWeight = defaulter(styles.contractCostLabelFontWeight,"normal");

  styles.contractCostFontSize = defaulter(styles.contractCostFontSize,"14pt");
  styles.contractCostFontWeight = defaulter(styles.contractCostFontWeight,"bold");

  return styles;
  
  function defaulter(setValue,defaultValue) {
    return setValue ? setValue : defaultValue;
  }
};
