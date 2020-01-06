SvgTutorialContainer.prototype.defineStyle = function(options) {
  const container = this;
  const style = options.style ? options.style : {};

  style.stageFill = style.stageFill ? style.stageFill : "rgba(0,0,0,0)";

  style.codeBlock = style.codeBlock ? style.codeBlock : {};
  style.codeBlock.background = style.codeBlock.background ? style.codeBlock.background : "#022E00";
  style.codeBlock.fontColor = style.codeBlock.fontColor ? style.codeBlock.fontColor : "white";
  style.codeBlock.fontFamily = style.codeBlock.fontFamily ? style.codeBlock.fontFamily : "Source Code Pro";
  style.codeBlock.fontWeight = style.codeBlock.fontWeight ? style.codeBlock.fontWeight : "300";
  style.codeBlock.fontSize = style.codeBlock.fontSize ? style.codeBlock.fontSize : "10pt";

  style.svgElement = style.svgElement ? style.svgElement : {};
  style.svgElement.background = style.svgElement.background ? style.svgElement.background : "#9FDE9C";


  return style;
}
