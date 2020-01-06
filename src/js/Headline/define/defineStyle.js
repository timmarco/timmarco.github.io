Headline.prototype.defineStyle = function(options) {
  const headline = this;

  const style = options.style ? options.style : {};

  style.background = style.background ? style.background : {};
  style.background.fill = style.background.fill ? style.background.fill : "black";

  style.accent = style.accent ? style.accent : {};
  style.accent.fill = style.accent.fill ? style.accent.fill : "red";

  style.text = style.text ? style.text : {};
  style.text.fontFamily = style.text.fontFamily ? style.text.fontFamily : "Oswald";
  style.text.fontWeight = style.text.fontWeight ? style.text.fontWeight : 500;
  style.text.fontFill = style.text.fontFill ? style.text.fontFill : "white";

  return style;
}
