function MenuTables(datasets) {
  let nested = d3.nest()
    .key((d) => { return d.name; })
    .key((d) => { return d.date; })
    .entries(datasets);

  let players = d3.select("#datasets")
    .selectAll("div")
    .data(nested)
    .enter()
    .append("div")
    .classed("player",true)
    .classed("table",true);

  let games = players
    .selectAll("div")
    .data((d) =>{ return d.values })
    .enter()
    .append("div");


  let tables = games
    .append("div");

  let playerRow = tables
    .append("div")
    .classed("row",true);

  playerRow
    .append("div")
    .classed("row-cell",true)
    .classed("player-name-cell",true)
    .html((d,i) => { return i === 0 ? d.values[0].name : "" });

  playerRow
    .append("div")
    .classed("row-cell",true)
    .classed("date-cell",true)
    .classed("spacer",((d,i) => { return i !== 0}));

  playerRow
    .append("div")
    .classed("row-cell",true)
    .classed("team-cell",true);

  playerRow
    .append("div")
    .classed("row-cell",true)

  playerRow
    .append("div")
    .classed("row-cell",true)

  playerRow
    .append("div")
    .classed("row-cell",true)

  playerRow
    .append("div")
    .classed("row-cell",true)

  let headers = tables
    .append("div")
    .classed("row",true);


  headers
    .append("div")
    .classed("row-cell",true)
    .classed("date-cell",true)
    .html((d) => { return d.key + " vs. "; });

  let playRowHeaders = tables
    .append("div")
    .classed("row",true);




  playRowHeaders
    .append("div")
    .classed("row-cell",true)
    .classed("team-cell",true);


  playRowHeaders
    .append("div")
    .classed("row-cell",true)
    .classed("play-header",true)
    .classed("play-description",true)
    .html("Play");

  playRowHeaders
    .append("div")
    .classed("row-cell",true)
    .classed("play-header",true)
    .html("Result");

  playRowHeaders
    .append("div")
    .classed("row-cell",true)
    .classed("play-header",true)
    .classed("play-inning",true)
    .html("Inning");

  playRowHeaders
    .append("div")
    .classed("row-cell",true)
    .classed("play-header",true)
    .classed("play-count",true)
    .style("padding-left","1em")
    .html("Count");


  let teamCell = headers
    .append("div")
    .classed("row-cell",true)
    .classed("team-cell",true)

  teamCell
    .append("img")
    .classed("team-thumbnail",true)
    .attr("src",(d) => { return d.values[0].opponent_team; });

  teamCell
    .append("span")
    .html((d) => { return d.values[0].opponent_team_name; });

  headers
    .append("div")
    .classed("row-cell",true);

  headers
    .append("div")
    .classed("row-cell",true);

  headers
    .append("div")
    .classed("row-cell",true);

  headers
    .append("div")
    .classed("row-cell",true);

  let rows = tables
    .selectAll(".rows")
    .data((d) => { return d.values; })
    .enter()
    .append("div")
    .classed("play-row",true)
    .classed("row",true)
    .on('click',(d) => {
      showDataSet(d);
    });

  rows
    .append("div")
    .classed("row-cell",true);

  rows
    .append("div")
    .classed("play-description",true)
    .classed("row-cell",true)
    .classed("play",true)
    .classed("play-odd",(d,i) => { return i % 2 == 1 })
    .html((d) => { return d.description; });

  rows
    .append("div")
    .classed("row-cell",true)
    .classed("play-result",true)
    .classed("play",true)
    .classed("play-odd",(d,i) => { return i % 2 == 1 })
    .html((d) => { return d.results; });

  rows
    .append("div")
    .classed("row-cell",true)
    .classed("play",true)
    .classed("play-odd",(d,i) => { return i % 2 == 1 })
    .classed("play-inning",true)
    .html((d) => { return d.inning});

  rows
    .append("div")
    .classed("row-cell",true)
    .classed("play",true)
    .classed("play-count",true)
    .classed("play-odd",(d,i) => { return i % 2 == 1 })
    .html((d) => { return d.count.balls +"-"+ d.count.strikes; });  
}
