TimelineRole.prototype.addDates = function() {
  const role = this;

  const dateOptions = {
    "month":"short",
    "year":"numeric"
  };

  const startString = role.data.startDate.toLocaleDateString("en-us",dateOptions);
  const endString = role.data.endDate.toLocaleDateString("en-us",dateOptions);
  const dateString = startString + " - " + endString;

  const nameSize = role.name.node().getBBox();
  const startX = nameSize.x + nameSize.width + 5;

  const dates = role.group
    .append("text")
    .attr("x",startX)
    .attr("font-size","12pt")
    .attr("font-weight",300)
    .attr("dominant-baseline","middle")
    .text(dateString);


  return dates;
}
