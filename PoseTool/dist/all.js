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

/* jshint esversion:6 */
function ModelSlider(options) {
  const slider = this;

  init(options);


  return slider;

  function init(options) {
    slider.domain = options.domain;
    slider.currentValue = options.domain[0];

    slider.callbacks = slider.defineCallbacks(options);
    slider.formatter = slider.defineFormatter(options);
    slider.coordinates = slider.defineCoordinates(options);
    slider.size = slider.defineSize(options);
    slider.margins = slider.defineMargins(options);
    slider.styles = slider.defineStyles(options);

    slider.referencePoints = slider.defineReferencePoints();
    slider.scale = slider.defineScale(options.domain);

    slider.group = slider.addGroup(options.where);
    slider.layers = slider.addLayers();

    slider.track = slider.addTrack();
    slider.activeTrack = slider.addActiveTrack();
    slider.circleGroup = slider.addCircleGroup();
    slider.highlightCircle = slider.addHighlightCircle();
    slider.circle = slider.addCircle();
    slider.labelGhost = slider.addTextGhost();
    slider.labelText = slider.addTextLabel();
    slider.heading = slider.addHeading(options.labelText);

    slider.updateValue(slider.currentValue);

    slider.dragLock = false;

  }
}

function menuDataset() {
  return [
    {
      "name":"Lucas Giolito",
      "imagePath":"giolito1/",
      "player_image":"thumbnails/giolito.png",
      "description":"Strikeout v. Michael Chavis",
      "opponent_player":"Michael Chavis",
      "opponent_team":"thumbnails/bos.gif",
      "opponent_team_name":"Red Sox",
      "result":"strikeout",
      "count":{"balls":0,"strikes":2},
      "results":"Strikeout",
      "inning":1,
      "date":"5/5/2019",
      "against":"Michael Chavis",
      "json":"giolito1.json",
      "path":"giolito1",
      "size":{"width":258,"height":384},
      "pitchData":{"gameNumber":"29","location":"h","weather":"Cloudy","opponent":"BOS","date":"2019-05-02","pitchNumber":"25","mlbAtBatIndex":"5","realAtBatIndex":"5","batterName":"Michael Chavis","battingSide":"R","playResult":"Strikeout","playResultType":"strikeout","countBalls":"0","countStrikes":"2","pitchResultCode":"S","pitchType":"FF","startSpeed":"94.6","endSpeed":"86.8","aY":"29.79","aZ":"-10.5","pfxX":"-5.92","pfxZ":"11.25","pX":"-0.11","pZ":"3.23","vX0":"5.43","vY0":"-137.75","vZ0":"-7.02","x":"121.29","y":"151.55","x0":"-1.34","y0":"50","z0":"6.52","aX":"-11.4","breakAngle":"40.8","breakLength":"3.6","breakY":"24","spinRate":"2309","spinDirection":"206","plateTime":"0.39","extension":"7.32","strikeZoneTop":"3.48","strikeZoneBottom":"1.65","":""}
    },
    {
      "name":"Lucas Giolito",
      "imagePath":"giolito2/",
      "player_image":"thumbnails/giolito.png",
      "description":"Strikeout v. Rafael Devers",
      "opponent_player":"Rafael Devers",
      "opponent_team":"thumbnails/bos.gif",
      "opponent_team_name":"Red Sox",
      "result":"strikeout",
      "count":{"balls":1,"strikes":2},
      "results":"Strikeout",
      "inning":5,
      "date":"5/5/2019",
      "against":"Rafael Devers",
      "json":"giolito2.json",
      "path":"giolito2",
      "size":{"width":476,"height":376},
      "pitchData":{"gameNumber":"76","location":"a","weather":"Partly Cloudy","opponent":"BOS","date":"2019-06-24","pitchNumber":"14","mlbAtBatIndex":"6","realAtBatIndex":"3","batterName":"Rafael Devers","battingSide":"L","playResult":"Strikeout","playResultType":"strikeout","countBalls":"0","countStrikes":"2","pitchResultCode":"S","pitchType":"FF","startSpeed":"94.9","endSpeed":"87.1","aY":"29.67","aZ":"-11.42","pfxX":"-7.01","pfxZ":"10.72","pX":"0.11","pZ":"3","vX0":"5.86","vY0":"-138.04","vZ0":"-7.41","x":"112.82","y":"157.73","x0":"-1.13","y0":"50","z0":"6.48","aX":"-13.58","breakAngle":"43.2","breakLength":"3.6","breakY":"24","spinRate":"2287","spinDirection":"212","plateTime":"0.39","extension":"6.59","strikeZoneTop":"3.49","strikeZoneBottom":"1.57","":""}
    },
    {
      "name":"Lucas Giolito",
      "imagePath":"giolito3/",
      "player_image":"thumbnails/giolito.png",
      "description":"Strikeout of Aldemys Diz",
      "opponent_player":"Aledmys Diaz",
      "opponent_team":"thumbnails/hou.gif",
      "opponent_team_name":"Astros",
      "result":"strikeout",
      "count":{"balls":0,"strikes":2},
      "results":"Strikeout",
      "inning":2,
      "date":"5/23/2019",
      "against":"Aldemys Diaz",
      "json":"giolito3.json",
      "path":"giolito3",
      "size":{"width":450,"height":350},
      "pitchData":{"gameNumber":"49","location":"a","weather":"Roof Closed","opponent":"HOU","date":"2019-05-23","pitchNumber":"24","mlbAtBatIndex":"12","realAtBatIndex":"5","batterName":"Aledmys Diaz","battingSide":"R","playResult":"Strikeout","playResultType":"strikeout","countBalls":"0","countStrikes":"2","pitchResultCode":"S","pitchType":"SL","startSpeed":"88.4","endSpeed":"81.8","aY":"25.55","aZ":"-25.61","pfxX":"0.66","pfxZ":"3.9","pX":"1.22","pZ":"1.62","vX0":"5.62","vY0":"-128.68","vZ0":"-7.1","x":"70.4","y":"195.09","x0":"-1.07","y0":"50","z0":"6.38","aX":"1.11","breakAngle":"4.8","breakLength":"6","breakY":"24","spinRate":"2092","spinDirection":"157","plateTime":"0.42","extension":"6.72","strikeZoneTop":"3.35","strikeZoneBottom":"1.63","":""}
    },
    {
      "name":"Dylan Cease",
      "imagePath":"cease1/",
      "player_image":"thumbnails/cease.png",
      "description":"HBP of Jeimer Candelario",
      "opponent_player":"Jeimer Candelario",
      "opponent_team":"thumbnails/det.gif",
      "opponent_team_name":"Tigers",
      "result":"ball",
      "count":{"balls":1,"strikes":2},
      "results":"Ball",
      "inning":1,
      "date":"7/3/2019",
      "against":"Jeimer Candelario",
      "json":"cease1.json",
      "path":"cease1",
      "size":{"width":350,"height":400},
      "pitchData":{"gameNumber":"82","location":"h","weather":"Cloudy","opponent":"DET","date":"2019-07-03","pitchNumber":"22","mlbAtBatIndex":"4","realAtBatIndex":"4","batterName":"Jeimer Candelario","battingSide":"L","playResult":"Hit By Pitch","playResultType":"hit_by_pitch","countBalls":"1","countStrikes":"2","pitchResultCode":"H","pitchType":"FF","startSpeed":"96.7","endSpeed":"88.5","aY":"31.38","aZ":"-15.6","pfxX":"0.97","pfxZ":"8.28","pX":"1.68","pZ":"4.03","vX0":"8.47","vY0":"-140.49","vZ0":"-3.51","x":"undefined","y":"undefined","x0":"-1.5","y0":"50","z0":"6.31","aX":"1.93","breakAngle":"13.2","breakLength":"3.6","breakY":"24","spinRate":"2424","spinDirection":"166","plateTime":"0.39","extension":"5.91","strikeZoneTop":"3.46","strikeZoneBottom":"1.69","":""}
    },
    // {
    //   "name":"Dylan Cease",
    //   "imagePath":"cease2/",
    //   "player_image":"thumbnails/cease.png",
    //   "description":"Single allowed to Harold Castro",
    //   "opponent_player":"Harold Castro",
    //   "opponent_team":"thumbnails/det.gif",
    //   "opponent_team_name":"Tigers",
    //   "result":"ball",
    //   "count":{"balls":0,"strikes":1},
    //   "results":"Single",
    //   "inning":1,
    //   "date":"7/3/2019",
    //   "against":"Chrsitin Stewart",
    //
    //   "json":"cease2.json",
    //   "path":"cease2",
    //   "size":{"width":350,"height":400}
    // },
    {
      "name":"Dylan Cease",
      "imagePath":"cease3/",
      "player_image":"thumbnails/cease.png",
      "description":"Strikeout of Christin Stewart",
      "opponent_player":"Chrsitin Stewart",
      "opponent_team":"thumbnails/det.gif",
      "opponent_team_name":"Tigers",
      "result":"ball",
      "count":{"balls":0,"strikes":2},
      "results":"Strikeout",
      "inning":4,
      "date":"7/3/2019",
      "against":"Christin Stewart",
      "json":"cease3.json",
      "path":"cease3",
      "size":{"width":350,"height":400},
      "pitchData":{"gameNumber":"82","location":"h","weather":"Cloudy","opponent":"DET","date":"2019-07-03","pitchNumber":"86","mlbAtBatIndex":"33","realAtBatIndex":"19","batterName":"Christin Stewart","battingSide":"L","playResult":"Strikeout","playResultType":"strikeout","countBalls":"0","countStrikes":"2","pitchResultCode":"C","pitchType":"CH","startSpeed":"80.6","endSpeed":"75.4","aY":"18.42","aZ":"-23.93","pfxX":"-0.72","pfxZ":"5.79","pX":"-0.91","pZ":"1.88","vX0":"0.8","vY0":"-117.48","vZ0":"-4.64","x":"151.54","y":"188.09","x0":"-1.15","y0":"50","z0":"6.06","aX":"-1.02","breakAngle":"2.4","breakLength":"7.2","breakY":"24","spinRate":"1440","spinDirection":"186","plateTime":"0.46","extension":"6.32","strikeZoneTop":"3.09","strikeZoneBottom":"1.49","":""}
    },
    {
      "name":"Eloy Jimenez",
      "imagePath":"jimenez1/",
      "player_image":"thumbnails/jimenez.png",
      "description":"Home Run off of Jonathan Holder",
      "opponent_player":"Jonathan Holder",
      "opponent_team":"thumbnails/nyy.gif",
      "opponent_team_name":"Yankees",
      "result":"hit",
      "count":{"balls":2,"strikes":1},
      "results":"Home Run",
      "inning":5,
      "date":"4/12/2019",
      "against":"Jonathan Holder",
      "json":"jimenez1.json",
      "path":"jimenez1",
      "size":{"width":350,"height":400},
      "pitchData":{"gameNumber":"12","location":"a","weather":"Cloudy","opponent":"NYY","date":"2019-04-12","mlbAtBatIndex":"43","realAtBatIndex":"2","pitcherName":"Jonathan Holder","battingSide":"R","playResult":"Home Run","playResultType":"home_run","countBalls":"2","countStrikes":"1","pitchResultCode":"E","pitchType":"FF","startSpeed":"92.2","endSpeed":"84.8","aY":"27.17","aZ":"-13.33","pfxX":"-2.53","pfxZ":"10.26","pX":"-0.33","pZ":"3.38","vX0":"2.78","vY0":"-134.22","vZ0":"-4.34","x":"129.41","y":"147.62","x0":"-1.04","y0":"50","z0":"5.95","aX":"-4.64","breakAngle":"15.6","breakLength":"3.6","breakY":"24","spinRate":"2423","spinDirection":"192","plateTime":"undefined","extension":"undefined","":"","strikeZoneTop":3.5,"strikeZoneBottom":1.65}
    },
    {
      "name":"Eloy Jimenez",
      "imagePath":"jimenez2/",
      "player_image":"thumbnails/jimenez.png",
      "description":"Home Run off of Chad Green",
      "opponent_player":"Chad Green",
      "opponent_team":"thumbnails/nyy.gif",
      "opponent_team_name":"Yankees",
      "result":"hit",
      "count":{"balls":1,"strikes":1},
      "results":"Home Run",
      "inning":4,
      "date":"4/12/2019",
      "against":"Chad Green",
      "json":"jimenez2.json",
      "path":"jimenez2",
      "size":{"width":350,"height":400},
      "pitchData":{"gameNumber":"12","location":"a","weather":"Cloudy","opponent":"NYY","date":"2019-04-12","mlbAtBatIndex":"62","realAtBatIndex":"3","pitcherName":"Chad Green","battingSide":"R","playResult":"Home Run","playResultType":"home_run","countBalls":"1","countStrikes":"1","pitchResultCode":"E","pitchType":"FF","startSpeed":"93.7","endSpeed":"86","aY":"28.73","aZ":"-14.89","pfxX":"-3.51","pfxZ":"9.13","pX":"-0.61","pZ":"3.06","vX0":"3.83","vY0":"-136.41","vZ0":"-4.8","x":"140.11","y":"156.22","x0":"-1.57","y0":"50","z0":"5.86","aX":"-6.64","breakAngle":"20.4","breakLength":"3.6","breakY":"24","spinRate":"2123","spinDirection":"199","plateTime":"undefined","extension":"undefined","":"","strikeZoneTop":3.5,"strikeZoneBottom":1.65}
    }
  ];
}

/* jshint esversion:6 */
function PitchSmallPlot(options) {
  const plot = this;
  init(options);
  return plot;

  function init(options) {
    plot.where = options.where;
    plot.pitchData = options.pitchData;
    plot.layout = plot.defineLayout();

    plot.svg = plot.addSvg();
    plot.layers = plot.addLayers();
    plot.catcherView = plot.addCatcherView();
  }
}

/* jshint esversion:6 */
function PitchUpdateView(d) {

  d3.select("#playDescription")
    .html(d.description);

  d3.select("#framePlayerName")
    .html(d.name);

  d3.select("#frameOpponentName")
    .html(d.opponent_player);

  d3.select("#frameDate")
    .html(d.date);

  d3.select("#frameOuts")
    .html(d.outs);

  d3.select("#frameInning")
    .html(d.inning);

  d3.select("#frameCount")
    .html(d.count.balls + " - " + d.count.strikes);

  d3.select("#frameOpponentTeam")
    .html(d.opponent_team_name);

  d3.select("#pitchType")
    .html(d.pitchData.pitchType);

  d3.select("#pitchStartVelocity")
    .html(d.pitchData.startSpeed + " MPH");

  d3.select("#pitchEndVelocity")
    .html(d.pitchData.endSpeed + " MPH");

  d3.select("#spinRate")
    .html(d.pitchData.spinRate + " RPM");

  d3.select("#breakAngle")
    .html(d.pitchData.breakAngle);

  d3.select("#breakLength")
    .html(d.pitchData.breakLength + "\"");

  d3.select("#pitchHorizontalMovement")
    .html(d.pitchData.pfxX + "\"");

  d3.select("#pitchVerticalMovement")
    .html(d.pitchData.pfxX + "\"");



}

/* jshint esversion:6 */
function PitchSidePlot(options) {
  const plot = this;
  init(options);
  return plot;

  function init(options) {
    plot.where = options.where;
    plot.pitchData = options.pitchData;

    plot.svg = plot.addSvg();
    plot.layout = plot.defineLayout();
    plot.layers = plot.addLayers();

    plot.batter = plot.addBatter();
    plot.addVisuals();
  }
}

/* jshint esversion:6 */
function updateImage(datum) {

}

/* jshint esversion:6 */
ModelSlider.prototype.addActiveTrack = function() {
  const slider = this;

  let track = slider.layers.track
    .append("rect")
    .attr("x",slider.referencePoints.xMin)
    .attr("y",-slider.styles.trackHeight / 2)
    .attr("height",slider.styles.trackHeight)
    .attr("width",0)
    .attr("fill",slider.styles.activeTrackFill);


  return track;
}

/* jshint esversion:6 */
ModelSlider.prototype.addCircle = function() {
  const slider = this;

  let circle = slider.circleGroup
    .append("circle")
    .attr("r",slider.styles.circleRadius)
    .attr("cx",0)
    .attr("cy",0)
    .attr("fill",slider.styles.circleFill)
    .attr("stroke",slider.styles.circleStroke)
    .attr("stroke-width",slider.styles.circleStrokeWidth);

  return circle;
}

/* jshint esversion:6 */
ModelSlider.prototype.addCircleGroup = function() {
  const slider = this;

  let group = slider.layers.circle
    .append("g")
    .attr("cursor","pointer")
    .on('mouseover',slider.circleGroupMouseover())
    .on('mouseout',slider.circleGroupMouseout())
    .call(d3.drag()
      .on('start',slider.circleGroupDragStart())
      .on('drag',slider.circleGroupDrag())
      .on('end',slider.circleGroupDragEnd())
    );

  return group;
}

/* jshint esversion:6 */
ModelSlider.prototype.addGroup = function(where) {
  const slider = this;

  let group = where
    .append("g")
    .attr("transform","translate("+slider.coordinates.x+","+slider.coordinates.y+")")
    .on('mouseover',slider.groupMouseover())
    .on('mouseout',slider.groupMouseout());

  return group;
}

/* jshint esversion:6 */
ModelSlider.prototype.addHeading = function(labelText) {
  const slider = this;

  let heading;

  header = slider.group
    .append("text")
    .attr("x",slider.margins.left)
    .attr("y",-10)
    .attr("font-size","8pt")
    .attr("text-anchor","start")
    .text(labelText)

  return heading;
}

/* jshint esversion:6 */
ModelSlider.prototype.addHighlightCircle = function() {
  const slider = this;

  let circle = slider.circleGroup
    .append("circle")
    .attr("cx",0)
    .attr("cy",0)
    .attr("r",slider.styles.circleRadius)
    .attr("fill",slider.styles.highlightCircleFill)
    .attr("opacity",slider.styles.highlightCircleOpacity);

  return circle;
}

/* jshint esversion:6 */
ModelSlider.prototype.addLayers = function() {
  const slider = this;

  let layers = {};
  layers.track = slider.addSingleLayer();
  layers.activeTrack = slider.addSingleLayer();
  layers.circle = slider.addSingleLayer();
  layers.heading = slider.addSingleLayer();

  return layers;
}

/* jshint esversion:6 */
ModelSlider.prototype.addSingleLayer = function() {
  const slider = this;

  let layer = slider.group
    .append("g");

  return layer;
}

/* jshint esversion:6 */
ModelSlider.prototype.addTextGhost = function() {
  const slider = this;

  let text = slider.circleGroup
    .append("text")
    .attr("x",10)
    .attr("y",0)
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .attr("font-size",slider.styles.labelFontSize)
    .attr("font-family",slider.styles.labelFontFamily)
    .attr("stroke",slider.styles.labelGhostStroke)
    .attr("stroke-width",slider.styles.labelGhostStrokeWidth)
    .attr("opacity",slider.styles.labelFontOpacity)
    .text("LABEL TEXT!");

  return text;
}

/* jshint esversion:6 */
ModelSlider.prototype.addTextLabel = function() {
  const slider = this;

  let text = slider.circleGroup
    .append("text")
    .attr("x",10)
    .attr("y",0)
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .attr("font-size",slider.styles.labelFontSize)
    .attr("font-family",slider.styles.labelFontFamily)
    .attr("fill",slider.styles.labelFontFill)
    .attr("opacity",slider.styles.labelFontOpacity)
    .text("LABEL TEXT!");

  return text;
}

/* jshint esversion:6 */
ModelSlider.prototype.addTrack = function() {
  const slider = this;

  let track = slider.layers.track
    .append("rect")
    .attr("x",slider.referencePoints.xMin)
    .attr("y",-slider.styles.trackHeight / 2)
    .attr("height",slider.styles.trackHeight)
    .attr("width",slider.referencePoints.effectiveWidth)
    .attr("fill",slider.styles.trackFill);


  return track;
}

/* jshint esversion:6 */
ModelSlider.prototype.defineCallbacks = function(options) {
  const slider = this;

  callbacks = defaulter(options.callbacks,{});
  callbacks.groupMouseover = defaulter(callbacks.groupMouseover,() => {});
  callbacks.groupMouseout = defaulter(callbacks.groupMouseout,() => {});
  callbacks.circleGroupMouseover = defaulter(callbacks.circleGroupMouseover,() => {});
  callbacks.circleGroupMouseout = defaulter(callbacks.circleGroupMouseout,() => {});
  callbacks.dragStart = defaulter(callbacks.dragStart,() => {});
  callbacks.dragEnd = defaulter(callbacks.dragEnd,() => {});
  callbacks.change = defaulter(callbacks.change,() => {});

  return callbacks;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}

/* jshint esversion:6 */
ModelSlider.prototype.defineCoordinates = function(options) {
  const slider = this;

  let coordinates = defaulter(options.coordinates,{});
  coordinates.x = defaulter(coordinates.x,0);
  coordinates.y = defaulter(coordinates.y,0);

  return coordinates;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}

/* jshint esversion:6 */
ModelSlider.prototype.defineFormatter = function(options) {
  const slider = this;

  let formatter = defaulter(options.formatter,(value) => { return value.toFixed(0); });

  return formatter;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}

/* jshint esversion:6 */
ModelSlider.prototype.defineMargins = function(options) {
  const slider = this;

  let margins = defaulter(options.margins,{});
  margins.left = defaulter(margins.left,10);
  margins.right = defaulter(margins.right,10);
  margins.top = defaulter(margins.top,10);
  margins.bottom = defaulter(margins.bottom,10);

  return margins;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }

}

/* jshint esversion:6 */
ModelSlider.prototype.defineReferencePoints = function() {
  const slider = this;

  let referencePoints = {};
  
  referencePoints.xMin = slider.margins.left;
  referencePoints.xMax = slider.size.width - slider.margins.right;

  referencePoints.effectiveWidth = slider.size.width - slider.margins.right - slider.margins.left;

  return referencePoints;
}

/* jshint esversion:6 */
ModelSlider.prototype.defineScale = function(domain) {
  const slider = this;

  let scale = d3.scaleLinear()
    .domain(domain)
    .range([slider.referencePoints.xMin,slider.referencePoints.xMax]);

  return scale;
}

/* jshint esversion:6 */
ModelSlider.prototype.defineSize = function(options) {
  const slider = this;

  let size = defaulter(options.size,{});
  size.width = defaulter(size.width,200);
  size.height = defaulter(size.height,20);

  return size;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}

/* jshint esversion:6 */
ModelSlider.prototype.defineStyles = function(options) {
  const slider = this;

  let styles = defaulter(options.styles,{});

  styles.trackFill = defaulter(styles.trackfill,"#eee");
  styles.trackHeight = defaulter(styles.trackHeight,4);
  styles.activeTrackFill = defaulter(styles.activeTrackFill,"#ed553b");

  styles.circleRadius = defaulter(styles.circleRadius,3);
  styles.circleFill = defaulter(styles.circleFill,"white");
  styles.circleStroke = defaulter(styles.circleStroke,"#aaa");
  styles.circleStrokeWidth = defaulter(styles.circleStrokeWidth,1);

  styles.highlightCircleRadius = defaulter(styles.highlightCircleRadius,7);
  styles.highlightCircleFill = defaulter(styles.highlightCircleFill,"#ed553b");
  styles.highlightCircleOpacity = defaulter(styles.highlightCircleOpacity,0.25);

  styles.dragCircleOpacity = defaulter(styles.dragCircleOpacity,1);

  styles.labelFontSize = defaulter(styles.labelFontSize,"10pt");
  styles.labelFontFamily = defaulter(styles.labelFontFamily,"Source Sans Pro");
  styles.labelFontFill = defaulter(styles.labelFontFill,"#333");
  styles.labelFontOpacity = defaulter(styles.labelFontOpacity,1);
  styles.labelActiveFontSize = defaulter(styles.labelActiveFontSize,"12pt");
  styles.labelActiveFontFill = defaulter(styles.labelActiveFontFill,"black");
  styles.labelGhostStroke = defaulter(styles.labelGhostStroke,"white");
  styles.labelGhostStrokeWidth = defaulter(styles.labelGhostStrokeWidth,3);


  return styles;

  function defaulter(setValue,defaultValue) {
    return setValue === undefined ? defaultValue : setValue;
  }
}

/* jshint esversion:6 */
ModelSlider.prototype.circleGroupDrag = function(d,i) {
  const slider = this;

  return function() {
    let xPosition,
      xValue;

    xPosition = d3.event.x;
    xValue = slider.scale.invert(xPosition);
    xValue = xValue < slider.domain[0] ? slider.domain[0] : xValue;
    xValue = xValue > slider.domain[1] ? slider.domain[1] : xValue;

    slider.circleGroup
      .attr("transform","translate("+slider.scale(xValue)+",0)");

    slider.activeTrack
      .attr("width",slider.scale(xValue) - slider.referencePoints.xMin);

    slider.labelGhost
      .text(slider.formatter(xValue));

    slider.labelText
      .text(slider.formatter(xValue));

    slider.callbacks
      .change(xValue);

    slider.currentValue = xValue;

  }
}

/* jshint esversion:6 */
ModelSlider.prototype.circleGroupDragEnd = function() {
  const slider = this;

  return function() {
    slider.dragLock = false;
    slider.highlightCircle
      .attr("opacity",slider.styles.highlightCircleOpacity);

      slider.highlightCircle
        .transition()
        .duration(150)
        .attr("r",slider.styles.circleRadius);

      slider.labelText
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelFontSize)
        .attr("fill",slider.styles.labelFontFill);

      slider.labelGhost
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelFontSize);

      slider.callbacks
        .dragEnd();

  }

}

/* jshint esversion:6 */
ModelSlider.prototype.circleGroupDragStart = function() {
  const slider = this;

  return function() {
    slider.dragLock = true;
    slider.highlightCircle
      .attr("opacity",slider.styles.dragCircleOpacity);

    slider.callbacks
      .dragStart();
  }
}

/* jshint esversion:6 */
ModelSlider.prototype.circleGroupMouseout = function() {
  const slider = this;
  return function() {
    if(!slider.dragLock) {
      slider.highlightCircle
        .transition()
        .duration(150)
        .attr("r",slider.styles.circleRadius);

      slider.labelText
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelFontSize)
        .attr("fill",slider.styles.labelFontFill);

      slider.labelGhost
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelFontSize);

      slider.callbacks
        .circleGroupMouseout();

    }
  }
}

/* jshint esversion:6 */
ModelSlider.prototype.circleGroupMouseover = function() {
  const slider = this;
  return function() {
    if(!slider.dragLock) {
      slider.highlightCircle
        .transition()
        .duration(150)
        .attr("r",slider.styles.highlightCircleRadius);

      slider.labelText
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelActiveFontSize)
        .attr("fill",slider.styles.labelActiveFontFill);

      slider.labelGhost
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelActiveFontSize);

      slider.callbacks
        .circleGroupMouseover();

    }
  }
};

/* jshint esversion:6 */
ModelSlider.prototype.groupMouseout = function(d,i) {
  const slider = this;

  return function() {
    if(!slider.dragLock) {
      slider.highlightCircle
        .transition()
        .duration(150)
        .attr("r",slider.styles.circleRadius);

      slider.labelText
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelFontSize)
        .attr("fill",slider.styles.labelFontFill);

      slider.labelGhost
        .transition()
        .duration(150)
        .attr("font-size",slider.styles.labelFontSize);

      slider.callbacks
        .groupMouseout();

    }
  };

}

/* jshint esversion:6 */
ModelSlider.prototype.groupMouseover = function(d,i) {
  const slider = this;

  return function() {

    slider.callbacks
      .groupMouseover();

  }
}

/* jshint esversion:6 */
ModelSlider.prototype.updateValue = function(newValue) {
  const slider = this;

  slider.currentValue = newValue;
  
  slider.circleGroup
    .attr("transform","translate("+slider.scale(newValue)+",0)");

  slider.activeTrack
    .attr("width",slider.scale(newValue) - slider.scale(slider.domain[0]))

  slider.labelText
    .text(slider.formatter(newValue));

  slider.labelGhost
    .text(slider.formatter(newValue));

  return slider;
}

/* jshint esversion:6 */
PitchSmallPlot.prototype.addCatcherView = function() {
  const plot = this;

  let pitchPosition = {
    "x":+plot.pitchData.pX,
    "y":+plot.pitchData.pZ
  };


  let view;

  plot.layers.catcherView
    .attr("transform","translate("+plot.layout.catcherViewCoordinates.x+","+plot.layout.catcherViewCoordinates.y+")");

  let scales = {};

  scales.x = d3.scaleLinear()
    .domain([-3,3])
    .range([plot.layout.catcherViewBounds.xMin,plot.layout.catcherViewBounds.xMax]);

  scales.y = d3.scaleLinear()
    .domain([0,6])
    .range([plot.layout.catcherViewBounds.yMin,plot.layout.catcherViewBounds.yMax]);

  let hpPoints = [
    {"x":scales.x(-8.5/12),"y":scales.y(0)},
    {"x":scales.x(8.5/12),"y":scales.y(0)},
    {"x":scales.x(8.5/12),"y":scales.y(-4.25/12)},
    {"x":scales.x(0),"y":scales.y(-8.5/12)},
    {"x":scales.x(-8.5/12),"y":scales.y(-4.25/12)},
    {"x":scales.x(-8.5/12),"y":scales.y(0)}
  ];

  let pathGen = d3.line().x((d) => { return d.x; }).y((d) => { return d.y;});

  let homePlate = plot.layers.catcherView
    .append("path")
    .datum(hpPoints)
    .attr("stroke","#666")
    .attr("fill","none")
    .attr("stroke-width",1)
    .attr("d",pathGen);


  let strikeZoneHeight = plot.pitchData.strikeZoneTop - plot.pitchData.strikeZoneBottom;

  let strikeZone = plot.layers.catcherView
    .append("rect")
    .attr("x",scales.x(-8.5/12))
    .attr("width",scales.x(17/12) - scales.x(0))
    .attr("y",scales.y(plot.pitchData.strikeZoneTop))
    .attr("height",scales.y(0) - scales.y(strikeZoneHeight))
    .attr("fill","none")
    .attr("stroke","black")
    .attr("stroke-width",1);

  let expected = plot.layers.catcherView
    .append("circle")
    .attr("cx",scales.x(pitchPosition.x - (plot.pitchData.pfxX / 12)))
    .attr("cy",scales.y(pitchPosition.y - (plot.pitchData.pfxZ / 12)))
    .attr("r",3)
    .attr("fill","white")
    .attr("stroke","red");

  let pitch = plot.layers.catcherView
    .append("circle")
    .attr("cx",scales.x(pitchPosition.x))
    .attr("cy",scales.y(pitchPosition.y))
    .attr("r",3)
    .attr("fill","red");


  return view;
};

/* jshint esversion:6 */
PitchSmallPlot.prototype.addDividingLine = function() {
  const plot = this;

  let line = plot.svg
    .append("line")
    .attr("x1",plot.layout.dividingLine.x1)
    .attr("x2",plot.layout.dividingLine.x2)
    .attr("y1",plot.layout.dividingLine.y1)
    .attr("y2",plot.layout.dividingLine.y2)
    .attr("stroke","#aaa");

  return line;
}

/* jshint esversion:6 */
PitchSmallPlot.prototype.addLayers = function() {
  const plot = this;

  let layers = {};
  layers.catcherView = addLayer();
  layers.sideView = addLayer();


  return layers;

  function addLayer() {
    return plot.svg
      .append("g");
  }
};

/* jshint esversion:6 */
PitchSmallPlot.prototype.addSvg = function() {
  const plot = this;
  let svg = plot.where
    .append("svg")
    .attr("width",150)
    .attr("height",175)
    .style("background-color","white")
    .style("border","1px solid #aaa");
  return svg;
};

/* jshint esversion:6 */
PitchSmallPlot.prototype.defineLayout = function() {
  const plot = this;
  let layout = {};
  layout.catcherViewCoordinates = {"x":10,"y":10};
  layout.catcherViewSize = {"height":130,"width":130};
  layout.catcherViewBounds = {"xMin":0,"xMax":130,"yMin":130,"yMax":0};
  layout.dividingLine = {"x1":150,"x2":150,"y1":10,"y2":140};
  layout.sideViewCoordinates = {"x":160,"y":10};
  layout.sideViewSize = {"width":180,"height":65};
  layout.sideViewBounds = {"width":180,"height":130};
  return layout;
};

/* jshint esversion:6 */
PitchSidePlot.prototype.addBatter = function() {
  const plot = this;
  let image;
  image = plot.layers.batter
    .append("image")
    .attr("xlink:href","miniBatter.png")
    .attr("x",370)
    .attr("y",6)
    .attr("height",41)
    .attr("width",27)
    .attr("opacity",0.5);
};

/* jshint esversion:6 */
PitchSidePlot.prototype.addLayers = function() {
  const plot = this;
  let layers = {};
  layers.batter = addLayer();
  layers.lines = addLayer();
  layers.circles = addLayer();
  return layers;

  function addLayer() {
    return plot.svg.append("g");
  }
};

/* jshint esversion:6 */
PitchSidePlot.prototype.addSvg = function() {
  const plot = this;
  let svg = plot.where
    .append("svg")
    .attr("width",450)
    .attr("height",50)
    .style("background-color","white");

  return svg;
};

/* jshint esversion:6 */
PitchSidePlot.prototype.addVisuals = function() {
  const plot = this;

  let scales = {};
  scales.x = d3.scaleLinear()
    .domain([0,60])
    .range([plot.layout.minX,plot.layout.maxX]);

  scales.y = d3.scaleLinear()
    .domain([0,8])
    .range([plot.layout.minY,plot.layout.maxY]);


  // SO THIS IS THE REAL GRADIENT
  let gradient = (scales.y(plot.pitchData.z0) - scales.y(plot.pitchData.pZ)) / (-scales.x(plot.pitchData.y0) + scales.x(0));
  let linearFunction = (inputX) => {
    return -(gradient * (inputX - scales.x(plot.pitchData.y0)) - scales.y(plot.pitchData.z0));
  };


  let verticalBreakFeet = (plot.pitchData.pfxZ / 12);
  let expectedVertical = +plot.pitchData.pZ - verticalBreakFeet;

  let expectedEndPoint = {
    "x":scales.x(0),
    "y":scales.y(expectedVertical)
  };

  // NOW MAKE AN EXPECTED GRADIENT
  let perceivedGradient = (scales.y(plot.pitchData.z0) - expectedEndPoint.y) / (-scales.x(plot.pitchData.y0) + expectedEndPoint.x);
  let perceivedLinearFunction = (inputX) => {
    return -(perceivedGradient * (inputX - scales.x(plot.pitchData.y0)) - scales.y(plot.pitchData.z0));
  };

  plot.layers.lines
    .append("line")
    .attr("x1",scales.x(plot.pitchData.y0))
    .attr("x2",expectedEndPoint.x)
    .attr("y1",scales.y(plot.pitchData.z0))
    .attr("y2",expectedEndPoint.y)
    .attr("stroke-dasharray","3,3")
    .attr("stroke","black");

  let points = [
    {"x":scales.x(60),"y":linearFunction(scales.x(60))},
    {"x":scales.x(plot.pitchData.y0),"y":scales.y(plot.pitchData.z0)},
    {"x":scales.x(40),"y":perceivedLinearFunction(scales.x(40))},
    {"x":scales.x(0),"y":scales.y(plot.pitchData.pZ)}
  ];

  plot.layers.circles
    .append("circle")
    .attr("cx",scales.x(0))
    .attr("cy",expectedEndPoint.y)
    .attr("r",3)
    .attr("fill","white")
    .attr("stroke","red");

  plot.layers.circles.selectAll(".f")
    .data(points)
    .enter()
    .append("circle")
    .attr("cx",(d) => { return d.x; })
    .attr("cy",(d) => { return d.y; })
    .attr("fill","red")
    .attr("r",3);

  let lineGen = d3.line().x((d) => { return d.x; }).y((d) => { return d.y; }).curve(d3.curveCardinal);
  plot.layers.lines
    .append("path")
    .datum(points)
    .attr("stroke","black")
    .attr("stroke-width",1)
    .attr("fill","none")
    .attr("d",lineGen);


};

/* jshint esversion:6 */
PitchSidePlot.prototype.defineLayout = function() {
  const plot = this;
  let layout = {};

  layout.minX = 365;
  layout.maxX = 10;
  layout.effectiveWidth = 355;
  layout.effectiveHeight = 47.33;
  layout.minY = 47.33;
  layout.maxY = 0;

  return layout;
};
