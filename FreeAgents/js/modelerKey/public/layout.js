/* jshint esversion:6 */
ModelerKey.prototype.layout = function() {
  const key = this;

  let trueValues = Object.keys(key.visibleKeys).filter((a) => { return key.visibleKeys[a]; }).length;
  let spacing = 140;

  let currentIndex = 0;
  let lastXPosition = 0;
  let yPosition = 0;
  let xPosition = 0;

  Object.keys(key.visibleKeys).forEach((keyName) => {
    if(key.visibleKeys[keyName]) {

      if((lastXPosition + spacing) > key.size.width) {
        yPosition += 45;
        xPosition = 0;
      } else {
        xPosition = lastXPosition;
      }

      key[keyName].group
        .attr("transform","translate("+xPosition+","+yPosition+")")
        .attr("display","block");

      currentIndex += 1;
      lastXPosition = xPosition + spacing;

    } else {
      key[keyName].group
        .attr("display","none");
    }

  });

  return key;
};
