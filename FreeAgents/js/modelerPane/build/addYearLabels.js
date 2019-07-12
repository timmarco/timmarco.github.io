/* jshint esversion:6 */
ModelerPane.prototype.addYearLabels = function() {
  const pane = this;

  let labels = [];
  d3.range([0,16]).forEach((yearIndex) =>{
    let year = 2019 + yearIndex;
    let label = new TextLabel({
      "where":pane.yearGroup,
      "text":year,
      "textAnchor":"end"
    }).move({
      "x":0,
      "y":(yearIndex + 1) * pane.referencePoints.tableRowHeight
    })
    .show();

    labels.push(label);
  });


  return labels;
}
