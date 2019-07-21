/* jshint esversion:6 */
PlayerTable.prototype.addMetricNames = function() {
  const table = this;

  let metricNames = table.subSectionRows
    .append("div")
    .classed("stats-numberline-table-cell",true)
    .classed("right-align",true)
    .style("width","100px")
    .style("padding-right","10px")
    .style("height",(d) => {
      if(d.isSpacer) {
        return "25px"
      }
    })
    .html((d) => {

      if(d.isSpacer) {
        return "&nbsp;"
      }

      return d.display;
    })
    .on('mouseover',function(d) {
      if(!d.isHeader && !d.isSpacer) {
        let descriptionHtml = "<div class='tooltip-metric-description''>";
        descriptionHtml += "<div class='tooltip-metric-description-text'>" + d.description + "</div>";

        descriptionHtml += "<div class='tooltip-metric-source-header'>Source</div>"
        if(d.source === "Fangraphs") {
          descriptionHtml += "<div class='tooltip-metric-description-source'><img src='fangraphs.png' class='tooltip-metric-icon' /> Fangraphs </div>"
        }

        if(d.source == "Baseball Savant") {
          descriptionHtml += "<div class='tooltip-metric-description-source'><img src='savant.png' class='tooltip-metric-icon' /> Baseball Savant </div>"
        }

        if(d.source == "Baseball-Reference") {
          descriptionHtml += "<div class='tooltip-metric-description-source'><img src='bbref.png' class='tooltip-metric-icon' /> Baseball-Reference.com </div>"
        }


        descriptionHtml += "</div>";
        table.player.tooltip
          .update(descriptionHtml)
          .show()
          .move();
      }
    })
    .on('mousemove',() => { table.player.tooltip.move(); })
    .on('mouseout',() => { table.player.tooltip.hide(); });


  return metricNames;
}
