/* jshint esversion:6 */
ModelerKey.prototype.layout = function() {
  const key = this;

  let trueValues = Object.keys(key.visibleKeys).filter((a) => { return key.visibleKeys[a]; }).length;
  let spacing = key.size.width / trueValues;

  let currentIndex = 0;
  Object.keys(key.visibleKeys).forEach((keyName) => {
    if(key.visibleKeys[keyName]) {
      let position = spacing * currentIndex;

      key[keyName].group
        .attr("transform","translate("+position+",0)")
        .attr("display","block");

      currentIndex += 1;
    } else {
      key[keyName].group
        .attr("display","none");
    }
  });

  return key;
};
