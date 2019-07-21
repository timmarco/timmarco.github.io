/* jshint esversion:6 */
PlayerMenu.prototype.addPositionRow = function() {
  const menu = this;


  let header = d3.select("#filterNameRow")
    .node().getBoundingClientRect();

  let positionFilterRow = d3.select("#positionFilter")
    .style("display","none")
    .style("width",header.width + "px")
    .style("height",header.height + "px")
    .style("top",header.y + "px")
    .style("left",header.x + "px")
    .style("border","1px solid black")
    .style("margin","auto");


  let positionFilter = positionFilterRow
    .append("div")
    .style("width","100%")
    .style("height","100%")
    .style("background-color","#20639b")
    .style("color","#20639b")
    .style("display","flex")
    .style("justify-content","space-between");

  let positions = [
    {
      "label":"Catchers",
      "key":"catcher"
    },
    {
      "label":"First Basemen",
      "key":"firstBase"
    },
    {
      "label":"Second Basemen",
      "key":"secondBase"
    },
    {
      "label":"Shortstops",
      "key":"shortstop"
    },
    {
      "label":"Third Basemen",
      "key":"thirdBase"
    },
    {
      "label":"Left Fielders",
      "key":"leftField"
    },
    {
      "label":"Center Fielders",
      "key":"centerField"
    },
    {
      "label":"Right Fielders",
      "key":"rightField"
    },
    {
      "label":"Starters",
      "key":"starter"
    },
    {
      "label":"Relievers",
      "key":"reliever"
    }
  ];

  let positionSpans = positionFilter.selectAll(".positionSpan")
    .data(positions)
    .enter()
    .append("div")
    .style("cursor","pointer")
    .style("display","table")
    .style("margin","0.25em");


  positionSpans
    .append("div")
    .style("display","table-cell")
    .style("vertical-align","middle")
    .style("height","35px")
    .style("padding-left","0.125em")
    .style("padding-right","0.125em")
    .classed("filter-active",function(d) {
      return menu.filters[d.key];
    })
    .classed("filter-inactive",function(d) {
      return !menu.filters[d.key];
    })
    .html((d) => { return d.label; })
    .on('mouseover',function(d) {
      let message;

      if(menu.filters[d.key]) {
        message = "Click to hide <strong>" + d.label + "</strong>";
      } else {
        message = "Click to show <strong>" + d.label + "</strong>";
      }

      menu.tooltip
        .update(message)
        .show()
        .move();
    })
    .on('mousemove',function() {
      menu.tooltip
        .move();
    })
    .on('mouseout',function() {
      menu.tooltip
        .hide();
    })
    .on("click",function(d) {
      menu.filters[d.key] = !menu.filters[d.key];

      menu.tooltip
        .hide();

      menu
        .updateFilters();

      d3.select(this)
        .classed("filter-active",function(d) {
          return menu.filters[d.key];
        })
        .classed("filter-inactive",function(d) {
          return !menu.filters[d.key];
        });


    });

  window.addEventListener("resize",resizeRow);

  menu
    .definePositionFilters();


  function resizeRow() {
    let header = d3.select("#filterNameRow").node().getBoundingClientRect();
    positionFilterRow = d3.select("#positionFilter")
      .style("width",header.width + "px")
      .style("height",header.height + "px")
      .style("top",header.y + "px")
      .style("left",header.x + "px");
  }


  return positionFilterRow;
};
