/* jshint esversion:6 */
Button.prototype.defineStyles = function(options) {
  const button = this;
  let styles = defaulter(options.styles,{});

  styles.backgroundFill = defaulter(styles.backgroundFill,"orange");
  styles.stroke = defaulter(styles.stroke,"blue");
  styles.strokeWidth = defaulter(styles.strokeWidth,2);

  styles.fontFamily = defaulter(styles.fontFamily,"Source Sans Pro");
  styles.fontWeight = defaulter(styles.fontWeight,"bold");
  styles.fontForeground = defaulter(styles.fontForeground,"white");
  styles.fontBackground = defaulter(styles.fontBackground,"back");

  return styles;

  function defaulter(setValue,defaultValue) {
    return setValue !== undefined ? setValue: defaultValue;
  }
}
