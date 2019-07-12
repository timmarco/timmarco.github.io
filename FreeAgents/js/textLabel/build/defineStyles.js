/* jshint esversion:6 */
TextLabel.prototype.defineStyles = function(options) {
  const label = this;
  let styles;

  styles = defaulter(options.styles,{});

  styles.fontFamily = defaulter(options.fontFamily,"Source Sans Pro");
  styles.fontSize = defaulter(options.fontSize,"10pt");
  styles.fontWeight = defaulter(options.fontWeight,"bold");
  styles.backgroundStroke = defaulter(options.backgroundStroke,"white");
  styles.outlineWidth = defaulter(options.outlineWidth,5);
  styles.foregroundColor = defaulter(options.foregroundColor,"black");
  styles.textAnchor = defaulter(options.textAnchor,"middle");

  return styles;

  function defaulter(value,defaultValue) {
    return value === undefined ? defaultValue : value;
  }
};
