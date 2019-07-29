/* jshint esversion:6 */
function BrushBoxCorner(options) {
  const corner = this;
  init(options);
  return corner;

  function init(options) {
    corner.parent = options.parent;
    corner.coordinates = options.coordinates;

    corner.dragLock = false;
    
    corner.drag = corner.defineDrag();
    corner.callbacks = corner.defineCallbacks(options);

    corner.group = corner.addGroup();
    corner.hotspot = corner.addHotspot();
    corner.circle = corner.addCircle();

  }
};

/* jshint esversion:6 */
function BrushBox(options) {
  const box = this;
  init(options);
  return box;



  function init(options) {
    box.where = options.where;
    box.worldCoordinates = options.worldCoordinates;

    box.size = box.defineSize(options);
    box.styles = box.defineStyles(options);
    box.coordinates = box.defineCoordinates(options);
    box.callbacks = box.defineCallbacks(options);
    box.dragLock = false;
    box.drag = box.defineDrag(options);
    box.sizeFormatter = box.defineSizeFormatter(options);
    box.worldCoordinatesFormatter = box.defineWorldCoordinatesFormatter(options);

    box.group = box.addGroup();
    box.layers = box.addLayers();
    box.rect = box.addRect();
    box.corners = box.addCorners();
    box.edgeIndicators = box.addEdgeIndicators();
    box.sizeIndicators = box.addSizeIndicators();
    box.groundIndicators = box.addGroundIndicators();

  }
}

/* jshint esversion:6 */
function CatcherView(options) {
  const view = this;
  init(options);
  return view;

  function init(options) {
    view.player = options.player;
    view.where = options.where;


    view.size = view.defineSize(options);
    view.scales = view.defineScales(options);

    view.group = view.addGroup();
    view.layers = view.addLayers();

    view.group
      .attr("transform","translate(100,50)");

    view.brushBox = view.addBrushBox();

    view.yAxis = d3.axisLeft(view.scales.y);
    view.yAxisGroup = view.layers.axis
      .append("g")
      .attr("transform","translate(0,0)")
      .call(view.yAxis);

    view.xAxis = d3.axisBottom(view.scales.x);
    view.xAxisGroup = view.layers.axis
      .append("g")
      .attr("transform","translate(0,500)")
      .call(view.xAxis)
      .attr("font-family","Source Sans Pro");

      let hpPoints = [
        {"x":view.scales.x(-8.5/12),"y":view.scales.y(0)},
        {"x":view.scales.x(8.5/12),"y":view.scales.y(0)},
        {"x":view.scales.x(8.5/12),"y":view.scales.y(-4.25/12)},
        {"x":view.scales.x(0),"y":view.scales.y(-8.5/12)},
        {"x":view.scales.x(-8.5/12),"y":view.scales.y(-4.25/12)},
        {"x":view.scales.x(-8.5/12),"y":view.scales.y(0)}
      ];

    view.homePlatePathGen = d3.line().x((d) => { return d.x; }).y((d) => { return d.y;});

    view.homePlate = view.layers.axis
      .append("path")
      .datum(hpPoints)
      .attr("stroke","black")
      .attr("fill","white")
      .attr("stroke-width",2)
      .attr("d",view.homePlatePathGen);


    view.layers.axis
      .append("text")
      .attr("y",view.scales.y(0))
      .attr("x",view.scales.x(0))
      .attr("dy",-5)
      .attr("text-anchor","middle")
      .attr("dominant-baseline","baseline")
      .attr("font-size","8pt")
      .attr("font-weight","bold")
      .html("&larr; Distance (feet) &rarr;");

    view.leftBoxLabel = view.layers.axis
      .append("text")
      .attr("y",view.scales.y(0))
      .attr("x",view.scales.x(2))
      .attr("dy",30)
      .attr("text-anchor","middle")
      .attr("dominant-baseline","baseline")
      .attr("font-size","10pt")
      .attr("font-weight","bold")
      .html("LHB Batter's Box &rarr;");

    view.rightBoxLabel = view.layers.axis
      .append("text")
      .attr("y",view.scales.y(0))
      .attr("x",view.scales.x(-2))
      .attr("dy",30)
      .attr("text-anchor","middle")
      .attr("dominant-baseline","baseline")
      .attr("font-size","10pt")
      .attr("font-weight","bold")
      .html("&larr; RHB Batter's Box");

    view.layers.axis
      .append("rect")
      .attr("x",view.scales.x(-3))
      .attr("y",view.scales.y(0) + 75)
      .attr("width",10)
      .attr("height",10)
      .attr("fill",d3.schemeCategory10[0]);

    view.layers.axis
      .append("text")
      .attr("x",view.scales.x(-3))
      .attr("y",view.scales.y(0) + 80)
      .attr("dx",15)
      .attr("text-anchor","start")
      .attr("dominant-baseline","middle")
      .attr("font-size","12px")
      .text("Balls");


    view.layers.axis
      .append("rect")
      .attr("x",view.scales.x(-1.5))
      .attr("y",view.scales.y(0) + 75)
      .attr("width",10)
      .attr("height",10)
      .attr("fill",d3.schemeCategory10[1]);

    view.layers.axis
      .append("text")
      .attr("x",view.scales.x(-1.5))
      .attr("y",view.scales.y(0) + 80)
      .attr("dx",15)
      .attr("text-anchor","start")
      .attr("dominant-baseline","middle")
      .attr("font-size","12px")
      .text("Strikes");

    view.layers.axis
      .append("rect")
      .attr("x",view.scales.x(0))
      .attr("y",view.scales.y(0) + 75)
      .attr("width",10)
      .attr("height",10)
      .attr("fill",d3.schemeCategory10[2]);

    view.layers.axis
      .append("text")
      .attr("x",view.scales.x(0))
      .attr("y",view.scales.y(0) + 80)
      .attr("dx",15)
      .attr("text-anchor","start")
      .attr("dominant-baseline","middle")
      .attr("font-size","12px")
      .text("Hits");

    view.layers.axis
      .append("rect")
      .attr("x",view.scales.x(1.5))
      .attr("y",view.scales.y(0) + 75)
      .attr("width",10)
      .attr("height",10)
      .attr("fill",d3.schemeCategory10[3]);

    view.layers.axis
      .append("text")
      .attr("x",view.scales.x(1.5))
      .attr("y",view.scales.y(0) + 80)
      .attr("dx",15)
      .attr("text-anchor","start")
      .attr("dominant-baseline","middle")
      .attr("font-size","12px")
      .text("Outs");

  }
}

/* jshint esversion:6 */
function FilterTable(options) {
  const table = this;
  init(options);
  return table;

  function init(options) {
    table.title = options.name;
    table.type = options.type;
    table.values = options.values;

    table.div = table.addDiv();
    table.titleDiv = table.addTitleDiv();

    if(table.type == "unique") {
      table.list = table.addList();
      table.listItems = table.addListItems();
    } else {
    }

  }
}

/* jshint esversion:6 */
function Minibar(options) {
  const bar = this;
  init(options);
  return bar;

  function init(options) {

    bar.where = options.where;

    bar.styles = bar.defineStyles(options);
    bar.size = bar.defineSize(options);
    bar.margins = bar.defineMargins(options);
    bar.valueFormatter = bar.defineValueFormatter(options);

    bar.referencePoints = bar.defineReferencePoints();
    bar.scale = bar.defineScales();
    bar.callbacks = bar.defineCallbacks(options);

    bar.svg = bar.addSvg();

    bar.layers = bar.addLayers();

    bar.track = bar.addTrack();
    bar.active = bar.addActive();
    bar.line = bar.addLine();
    bar.labels = bar.addLabels(options);
    bar.valueLabelGhost = bar.addValueLabelGhost();
    bar.valueLabel = bar.addValueLabel();
    // bar.title = bar.addTitle(options);

  }
}

/* jshint esversion:6 */
function Player(options) {
  const player = this;
  init(options);
  return player;

  function init(options) {
    player.defineHighlightRules();

    let path;
    if(options.position === "P") {
      path = "data/pitchers/";
    } else {
      path = "data/hitters/";
    }
    
      d3.csv(path + options.id + ".csv")
        .then((data) => {
          player.rawData = data;

          player.filteredData = JSON.parse(JSON.stringify(data));

          player.filterValues = player.defineFilterValues();
          player.filterPossibleValues = player.getFilterPossibleValues();

          player.filterTables = player.addFilterTables();

          player.playResultsSummary = player.summaryRollup("playResult");
          player.pitchersFaced = player.summaryRollup("pitcherName");
          player.teamsFaced = player.summaryRollup("opponents");
          player.pitchTypes = player.summaryRollup("pitchType");
          player.pitchResults = player.summaryRollup("pitchResult");

          player.resultsPane = player.addResultsPane();

          player.catcherView
            .addPlayerCircles(player.rawData)
            .addPlayerStrikeZone(options.strikeZone);

          player.filterByRegion({
            "minX":-Infinity,
            "maxX":Infinity,
            "minY":-Infinity,
            "maxY":Infinity
          });

          d3.select("#selector")
            .style("display","none");

          d3.select("#viewer")
            .style("display","block");

          d3.selectAll(".playerName")
            .html(options.name);

          d3.selectAll(".switchPerspective")
            .on('click',function() {
              let element = d3.select(this);
              let choice = element.attr("data-perspective");

              d3.selectAll(".switchPerspective")
                .classed("perspectiveCurrentChoice",false);

              element
                .classed("perspectiveCurrentChoice",true);

              player.catcherView
                .switchPerspective(choice);

            });


        });
  }
}

/* jshint esversion:6 */
function PlayerList(options) {
  const list = this;
  init(options);
  return list;

  function init(options) {
    list.views = options.views;

    d3.json('data/players.json')
    .then((rawList) => {
      list.listData = rawList;
      list.asArray = list.recastAsArray();
      list.table = list.addTable();
      list.tableRows = list.addTableRows();
      list.playerNames = list.addPlayerNames();
    });
  }
}

/* jshint esversion:6 */
function ResultsPane(options) {
  const pane = this;
  init(options);
  return pane;

  function init(options) {
    pane.parent = options.parent;

    pane.styles = pane.defineStyles();

    pane.div = pane.addDiv();
    pane.groups = pane.addGroups();

    pane.insideRegionOutsideRegion = pane.addInsideRegionOutsideRegion();

    pane.swingsNoSwings = pane.addSwingsNoSwings();
    pane.balls = pane.addBalls();
    pane.totalStrikes = pane.addTotalStrikes();
    pane.whiffs = pane.addWhiffs();
    pane.calledStrikes = pane.addCalledStrikes();

    pane.homeRuns = pane.addHomeRuns();
    pane.triples = pane.addTriples();
    pane.doubles = pane.addDoubles();
    pane.singles = pane.addSingles();

    pane.ballsInPlay = pane.addBallsInPlay();
    pane.hits = pane.addHits();
    pane.outs = pane.addOuts();

    pane.addPitchTypes();


  }
}

/* jshint esversion:6 */
function colorSchemePitchResults() {
  let scheme = d3.schemeCategory10;
  return {
    "F": scheme[1],
    "B": scheme[0],
    "X": scheme[3],
    "C": scheme[1],
    "S": scheme[1],
    "T": scheme[1],
    "D": scheme[2],
    "*B": scheme[0],
    "E": scheme[2],
    "L": scheme[1],
  };
}

/* jshint esversion:6 */
function mapPitch(code) {
   let pitchMap = {
      "FT":"Two-Seam Fastball",
      "SL":"Slider",
      "FF":"Four-Seam Fastball",
      "SI":"Sinker",
      "CU":"Curveball",
      "CH":"Changeup",
      "FC":"Cut Fastball",
      "KC":"Knuckle Curve",
      "FS":"Sinker",
      "KN":"Knuckelball"
    };

  return pitchMap[code];

}

/* jshint esversion:6 */
function mapPitchResult(code) {
  let codes =
    {
      "F": "Foul",
      "B": "Ball",
      "X": "In Play, Out(s)",
      "C": "Called Strike",
      "S": "Swinging Strike",
      "T": "Foul Tip",
      "D": "In Play, No Out(s)",
      "*B": "Ball in Dirt",
      "E": "In Play, Run(s)",
      "L": "Foul Bunt"
    };

  return codes[code];
}

/* jshint esversion:6*/
function pitch(options) {
  const pitch = this;

  init(options);

  return pitch;

  function init(options) {
  }
}

/* jshint esversion:6 */
BrushBoxCorner.prototype.addCircle = function() {
  const corner = this;

  let circle = corner.group
    .append("circle")
    .attr("r",corner.parent.styles.defaultCorner.radius)
    .attr("fill",corner.parent.styles.defaultCorner.fill)
    .attr("stroke",corner.parent.styles.defaultCorner.stroke)
    .attr("stroke-width",corner.parent.styles.defaultCorner.strokeWidth);

  return circle;
}

/* jshint esversion:6 */
BrushBoxCorner.prototype.addGroup = function() {
  const corner = this;

  let group = corner.parent.layers.corners
    .append("g")
    .attr("transform","translate("+corner.coordinates.x+","+corner.coordinates.y+")")
    .call(corner.drag)
    .on('mouseover',corner.groupMouseover())
    .on('mouseout',corner.groupMouseout());


  return group;
}

/* jshint esversion:6 */
BrushBoxCorner.prototype.addHotspot = function() {
  const corner = this;

  let circle = corner.group
    .append("circle")
    .attr("r",corner.parent.styles.cornerHotspot.radius)
    .attr("fill",corner.parent.styles.cornerHotspot.fill)
    .attr("stroke",corner.parent.styles.cornerHotspot.stroke)
    .attr("stroke-width",corner.parent.styles.cornerHotspot.strokeWidth);


  return circle;
}

/* jshint esversion:6 */
BrushBoxCorner.prototype.defineCallbacks = function(options) {
  const corner = this;

  let callbacks = defaulter(options.callbacks,{});
  callbacks.checkBounds = defaulter(callbacks.checkBounds,() =>{  });
  callbacks.moved = defaulter(callbacks.moved,() => {  });
  callbacks.mouseover = defaulter(callbacks.mouseover,() => { });
  callbacks.mouseout = defaulter(callbacks.mouseout,() => { });

  return callbacks;

  function defaulter(s,v) {
    return s ? s : v;
  }
}

/* jshint esversion:6 */
BrushBoxCorner.prototype.defineDrag = function() {
  const corner = this;

  let drag = d3.drag()
    .on('start',corner.dragStart())
    .on('drag',corner.dragging())
    .on('end',corner.dragEnd());

  return drag;
}

/* jshint esversion:6 */
BrushBoxCorner.prototype.dragEnd = function() {
  const corner = this;
  return function() {
    corner.parent.dragLock = false;
    corner.dragLock = false;
    corner.groupMouseout();

    corner.parent.callbacks
      .valueChanged({
        "size":corner.parent.size,
        "coordinates":corner.parent.coordinates
      });

    corner.parent.callbacks
      .dragEnd();

  }
}

/* jshint esversion:6 */
BrushBoxCorner.prototype.dragStart = function() {
  const corner = this;
  return function() {
    corner.dragLock = true;
    corner.parent.dragLock = true;

    corner.parent.callbacks
      .dragStart();
  }
}

/* jshint esversion:6 */
BrushBoxCorner.prototype.dragging = function() {
  const corner = this;
  return function() {
    corner
      .verifyBounds();

    corner.group
      .attr("transform","translate("+corner.coordinates.x+","+corner.coordinates.y+")");

    corner.callbacks
      .moved(corner.coordinates);

  }
}

/* jshint esversion:6 */
BrushBoxCorner.prototype.groupMouseout = function() {
  const corner = this;
  return function() {

    if(!corner.parent.dragLock) {
      corner.hotspot
        .transition()
        .duration(corner.parent.styles.cornerHotspotTransition.duration)
        .attr("r",corner.parent.styles.cornerHotspot.radius)
        .attr("fill",corner.parent.styles.cornerHotspot.fill)
        .attr("stroke",corner.parent.styles.cornerHotspot.stroke)
        .attr("stroke-width",corner.parent.styles.cornerHotspot.strokeWidth);

      
      corner.callbacks
        .mouseout();
    }

  }
}

/* jshint esversion:6 */
BrushBoxCorner.prototype.groupMouseover = function() {
  const corner = this;
  return function() {

    if(!corner.parent.dragLock) {
      corner.hotspot
        .transition()
        .duration(corner.parent.styles.cornerHotspotTransition.duration)
        .attr("r",corner.parent.styles.highlightCorner.radius)
        .attr("fill",corner.parent.styles.highlightCorner.fill)
        .attr("stroke",corner.parent.styles.highlightCorner.stroke)
        .attr("stroke-width",corner.parent.styles.highlightCorner.strokeWidth);

      corner.callbacks
        .mouseover();
    }
  }
}

/* jshint esversion:6 */
BrushBoxCorner.prototype.verifyBounds = function() {
  const corner = this;

  corner.bounds = corner.callbacks
    .checkBounds();

  let attemptedCoordinates = {};
  attemptedCoordinates.x = d3.event.x > corner.bounds.max.x ? corner.bounds.max.x : d3.event.x;
  attemptedCoordinates.x = attemptedCoordinates.x < corner.bounds.min.x ? corner.bounds.min.x : attemptedCoordinates.x;

  attemptedCoordinates.y = d3.event.y > corner.bounds.max.y ? corner.bounds.max.y : d3.event.y;
  attemptedCoordinates.y = attemptedCoordinates.y < corner.bounds.min.y ? corner.bounds.min.y : attemptedCoordinates.y;

  corner.coordinates.x = attemptedCoordinates.x;
  corner.coordinates.y = attemptedCoordinates.y;

  return corner;
}

/* jshint esversion:6 */
BrushBoxCorner.prototype.move = function(coordinates) {
  const corner = this;

  corner.coordinates = coordinates;

  corner.group
    .attr("transform","translate("+coordinates.x+","+coordinates.y+")");

  return corner;
}

/* jshint esversion:6 */
BrushBox.prototype.addCorners = function() {
  const box = this;
  let corners = {};

  corners.topLeft = box
    .addTopLeftCorner();

  corners.topRight = box
    .addTopRightCorner();

  corners.bottomLeft = box
    .addBottomLeftCorner();

  corners.bottomRight = box
    .addBottomRightCorner();


  return corners;
}

/* jshint esversion:6 */
BrushBox.prototype.addEdgeIndicators = function() {
  const box = this;

  let indicators = {};

  indicators.left = box.layers.hints
    .append("line")
    .attr("x1",0)
    .attr("x2",0)
    .attr("y1",0)
    .attr("y2",box.size.height)
    .attr("stroke",box.styles.edgeIndicators.stroke)
    .attr("stroke-width",0);

  indicators.top = box.layers.hints
    .append("line")
    .attr("x1",0)
    .attr("x2",box.size.width)
    .attr("y1",0)
    .attr("y2",0)
    .attr("stroke",box.styles.edgeIndicators.stroke)
    .attr("stroke-width",0);

  indicators.right = box.layers.hints
    .append("line")
    .attr("x1",box.size.width)
    .attr("x2",box.size.width)
    .attr("y1",0)
    .attr("y2",box.size.height)
    .attr("stroke",box.styles.edgeIndicators.stroke)
    .attr("stroke-width",0);

  indicators.bottom = box.layers.hints
    .append("line")
    .attr("x1",0)
    .attr("x2",box.size.width)
    .attr("y1",box.size.height)
    .attr("y2",box.size.height)
    .attr("stroke",box.styles.edgeIndicators.stroke)
    .attr("stroke-width",0);


  return indicators;
};

/* jshint esversion:6 */
BrushBox.prototype.addGroundIndicators = function() {
  const box = this;

  let indicators = this;

  indicators.line = box.layers.hints
    .append("line")
    .attr("x1",box.size.width / 2)
    .attr("x2",box.size.width / 2)
    .attr("y1",0)
    .attr("y2",1000)
    .attr("stroke",box.styles.groundIndicator.stroke)
    .attr("stroke-width",0)
    .attr("stroke-dasharray",box.styles.groundIndicator.strokeDashArray);

  indicators.bottomCircle = box.layers.hints
    .append("circle")
    .attr("cx",box.size.width / 2)
    .attr("cy",box.size.height)
    .attr("r",0)
    .attr("stroke",box.styles.groundIndicator.circleStroke)
    .attr("stroke-width",box.styles.groundIndicator.circleStrokeWidth)
    .attr("fill",box.styles.groundIndicator.circleFill);

  indicators.bottomText = box.layers.hints
    .append("text")
    .attr("x",box.size.width/2 + 5)
    .attr("y",box.size.height + 5)
    .attr("text-anchor","start")
    .attr("dominant-baseline","hanging")
    .attr("fill",box.styles.groundIndicator.fontFill)
    .attr("font-size",box.styles.groundIndicator.fontSize)
    .attr("font-family",box.styles.groundIndicator.fontFamily);

  indicators.topCircle = box.layers.hints
    .append("circle")
    .attr("cx",box.size.width / 2)
    .attr("cy",0)
    .attr("r",0)
    .attr("stroke",box.styles.groundIndicator.circleStroke)
    .attr("stroke-width",box.styles.groundIndicator.circleStrokeWidth)
    .attr("fill",box.styles.groundIndicator.circleFill);

  indicators.topText = box.layers.hints
    .append("text")
    .attr("x",box.size.width / 2 + 5)
    .attr("y",-5)
    .attr("text-anchor","start")
    .attr("dominant-baseline","baseline")
    .attr("fill",box.styles.groundIndicator.fontFill)
    .attr("font-size",box.styles.groundIndicator.fontSize)
    .attr("font-family",box.styles.groundIndicator.fontFamily);


  return indicators;
}

/* jshint esversion:6 */
BrushBox.prototype.addGroup = function() {
  const box = this;

  let group = box.where
    .append("g")
    .attr("transform","translate("+box.coordinates.x+","+box.coordinates.y+")");
    // .attr("cursor","all-scroll")
    // .call(box.drag);


  return group;
};

/* jshint esversion:6 */
BrushBox.prototype.addLayers = function() {
  const box = this;

  let layers = {};
  layers.rect = addLayer();
  layers.hints = addLayer();
  layers.corners = addLayer();

  return layers;

  function addLayer() {
    return box.group
      .append("g");
  }
};

/* jshint esversion:6 */
BrushBox.prototype.addRect = function() {
  const box = this;

  let rect = box.layers.rect
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",box.size.width)
    .attr("height",box.size.height)
    .attr("fill","none")
    .attr("stroke",box.styles.defaultRect.stroke)
    .attr("stroke-width",box.styles.defaultRect.strokeWidth)
    .attr("stroke-dasharray",box.styles.defaultRect.strokeDashArray);
    // .on('mouseover',box.rectMouseover())
    // .on('mouseout',box.rectMouseout());


  return rect;
};

/* jshint esversion:6 */
BrushBox.prototype.addSizeIndicators = function() {
  const box = this;

  let indicators = {};

  indicators.left = box.layers.hints
    .append("text")
    .attr("x",-5)
    .attr("y",box.size.height / 2)
    .attr("text-anchor","end")
    .attr("dominant-baseline","middle")
    .attr("font-family",box.styles.sizeIndicator.fontFamily)
    .attr("font-size",box.styles.sizeIndicator.fontSize)
    .attr("font-weight",box.styles.sizeIndicator.fontWeight)
    .attr("fill",box.styles.sizeIndicator.fill)
    .attr("stroke",box.styles.sizeIndicator.stroke)
    .attr("stroke-width",box.styles.sizeIndicator.strokeWidth)
    .attr("opacity",0)
    .text(box.sizeFormatter(box.size.height));

  indicators.right = box.layers.hints
    .append("text")
    .attr("x",box.size.width + 5)
    .attr("y",box.size.height / 2)
    .attr("text-anchor","start")
    .attr("dominant-baseline","start")
    .attr("font-family",box.styles.sizeIndicator.fontFamily)
    .attr("font-size",box.styles.sizeIndicator.fontSize)
    .attr("font-weight",box.styles.sizeIndicator.fontWeight)
    .attr("fill",box.styles.sizeIndicator.fill)
    .attr("stroke",box.styles.sizeIndicator.stroke)
    .attr("stroke-width",box.styles.sizeIndicator.strokeWidth)
    .attr("opacity",0)
    .text(box.sizeFormatter(box.size.height));

  indicators.top = box.layers.hints
    .append("text")
    .attr("x",box.size.width / 2)
    .attr("y",-5)
    .attr("text-anchor","middle")
    .attr("dominant-baseline","baseline")
    .attr("font-family",box.styles.sizeIndicator.fontFamily)
    .attr("font-size",box.styles.sizeIndicator.fontSize)
    .attr("font-weight",box.styles.sizeIndicator.fontWeight)
    .attr("fill",box.styles.sizeIndicator.fill)
    .attr("stroke",box.styles.sizeIndicator.stroke)
    .attr("stroke-width",box.styles.sizeIndicator.strokeWidth)
    .attr("opacity",0)
    .text(box.sizeFormatter(box.size.width));

  indicators.bottom = box.layers.hints
    .append("text")
    .attr("x",box.size.width / 2)
    .attr("y",box.size.height + 5)
    .attr("text-anchor","middle")
    .attr("dominant-baseline","hanging")
    .attr("font-family",box.styles.sizeIndicator.fontFamily)
    .attr("font-size",box.styles.sizeIndicator.fontSize)
    .attr("font-weight",box.styles.sizeIndicator.fontWeight)
    .attr("fill",box.styles.sizeIndicator.fill)
    .attr("stroke",box.styles.sizeIndicator.stroke)
    .attr("stroke-width",box.styles.sizeIndicator.strokeWidth)
    .attr("opacity",0)
    .text(box.sizeFormatter(box.size.width));


  return indicators;
}

/* jshint esversion:6 */
BrushBox.prototype.defineCallbacks = function(options) {
  const box = this;
  let callbacks = defaulter(options.callbacks,{});

  callbacks.dragStart = defaulter(callbacks.dragStart,() => {  });
  callbacks.dragging = defaulter(callbacks.dragging,() => {  });
  callbacks.dragEnd = defaulter(callbacks.dragEnd,() => {  });
  callbacks.mouseover = defaulter(callbacks.mouseover,() => {  });
  callbacks.mouseout = defaulter(callbacks.mouseout,() => {  });
  callbacks.valueChanged = defaulter(callbacks.valueChanged,(attributes) => {  });

  return callbacks;

  function defaulter(setValue,defaultValue) {
    return setValue ? setValue : defaultValue;
  }
};

/* jshint esversion:6 */
BrushBox.prototype.defineCoordinates = function(options) {
  const box = this;

  let coordinates = defaulter(options.coordinates,{});
  coordinates.x = defaulter(coordinates.x,0);
  coordinates.y = defaulter(coordinates.y,0);

  return coordinates;

  function defaulter(setValue,defaultValue) {
    return setValue ? setValue : defaultValue;
  }
};

/* jshint esversion:6 */
BrushBox.prototype.defineDrag = function() {
  const box = this;
  let drag = d3.drag();

  drag.on('start',box.rectDragStart());
  drag.on('drag',box.rectDragging());
  drag.on('end',box.rectDragEnd());

  return drag;
}

/* jshint esversion:6 */
BrushBox.prototype.defineSize = function(options) {
  const box = this;

  let size = defaulter(options.size,{});
  size.height = defaulter(size.height,100);
  size.width = defaulter(size.width,100);
  return size;

  function defaulter(setValue,defaultValue) {
    return setValue ? setValue : defaultValue;
  }
}

/* jshint esversion:6 */
BrushBox.prototype.defineSizeFormatter = function(options) {
  const box = this;

  let formatter = defaulter(options.sizeFormatter,(v) => { return v.toFixed(1); });

  return formatter;

  function defaulter(s,v) {
    return s ? s : v;
  }
}

/* jshint esversion:6 */
BrushBox.prototype.defineStyles = function(options) {
  const box = this;

  let styles = defaulter(options.styles,{});

  styles.defaultRect = defaulter(styles.defaultRect,{});
  styles.defaultRect.fill = defaulter(styles.defaultRect.fill,"rgba(0,0,0,0)");
  styles.defaultRect.stroke = defaulter(styles.defaultRect.stroke,"#999");
  styles.defaultRect.strokeWidth = defaulter(styles.defaultRect.strokeWidth,1);
  styles.defaultRect.strokeDashArray = defaulter(styles.defaultRect.strokeDashArray,"4,4");

  styles.rectHighlightTransition = defaulter(styles.rectHighlightTransition,{});
  styles.rectHighlightTransition.duration = defaulter(styles.rectHighlightTransition.duration,100);

  styles.highlightRect = defaulter(styles.highlightRect,{});
  styles.highlightRect.fill = defaulter(styles.highlightRect.fill,"rgba(0,0,255,0.0675)");
  styles.highlightRect.stroke = defaulter(styles.highlightRect.stroke,"blue");
  styles.highlightRect.strokeWidth = defaulter(styles.highlightRect.strokeWidth,1);
  styles.highlightRect.strokeDashArray = defaulter(styles.highlightRect.strokeDashArray,"4,4");

  styles.groundIndicator = defaulter(styles.groundIndicator,{});
  styles.groundIndicator.stroke = defaulter(styles.groundIndicator.stroke,"rgba(255,0,0,0.5)");
  styles.groundIndicator.strokeWidth = defaulter(styles.groundIndicator.strokeWidth,3);
  styles.groundIndicator.strokeDashArray = defaulter(styles.groundIndicator.strokeDashArray,"5,3");
  styles.groundIndicator.radius = defaulter(styles.groundIndicator.radius,3);
  styles.groundIndicator.circleFill = defaulter(styles.groundIndicator.circleFill,"rgba(255,0,0,1)");
  styles.groundIndicator.circleStroke = defaulter(styles.groundIndicator.circleStroke,"black");
  styles.groundIndicator.circleStrokeWidth = defaulter(styles.groundIndicator.circleStrokeWidth,1);
  styles.groundIndicator.fontFamily = defaulter(styles.groundIndicator.fontFamily,"sans serif");
  styles.groundIndicator.fontSize = defaulter(styles.groundIndicator.fontSize,"10px");
  styles.groundIndicator.fontFill = defaulter(styles.groundIndicator.fontFill,"rgba(255,0,0,1)");



  styles.defaultCorner = defaulter(styles.defaultCorner,{});
  styles.defaultCorner.radius = defaulter(styles.defaultCorner.radius,3);
  styles.defaultCorner.fill = defaulter(styles.defaultCorner.fill,"white");
  styles.defaultCorner.stroke = defaulter(styles.defaultCorner.stroke,"green");
  styles.defaultCorner.strokeWidth = defaulter(styles.defaultCorner.strokeWidth,"1");

  styles.cornerHotspot = defaulter(styles.cornerHotspot,{});
  styles.cornerHotspot.radius = defaulter(styles.cornerHotspot.radius,10);
  styles.cornerHotspot.fill = defaulter(styles.cornerHotspot.fill,"rgba(0,0,0,0)");
  styles.cornerHotspot.stroke = defaulter(styles.cornerHotspot.stroke,"none");
  styles.cornerHotspot.strokeWidth = defaulter(styles.cornerHotspot.strokeWidth,0);

  styles.cornerHotspotTransition = defaulter(styles.cornerHotspotTransition,{});
  styles.cornerHotspotTransition.duration = defaulter(styles.cornerHotspotTransition.duration,150);

  styles.highlightCorner = defaulter(styles.highlightCorner,{});
  styles.highlightCorner.radius = defaulter(styles.highlightCorner.radius,10);
  styles.highlightCorner.fill = defaulter(styles.highlightCorner.fill,"rgba(0,255,0,1)");
  styles.highlightCorner.stroke = defaulter(styles.highlightCorner.stroke,"blue");
  styles.highlightCorner.strokeWidth = defaulter(styles.highlightCorner.strokeWidth,0);

  styles.edgeIndicators = defaulter(styles.edgeIndicators,{});
  styles.edgeIndicators.stroke = defaulter(styles.edgeIndicators.stroke,"rgba(0,255,0,1)");
  styles.edgeIndicators.strokeWidth = defaulter(styles.edgeIndicators.strokeWidth,3);

  styles.activeCorner = defaulter(styles.activeCorner,{});
  styles.activeCorner.radius = defaulter(styles.activeCorner.radius,5);
  styles.activeCorner.fill = defaulter(styles.activeCorner.fill,"rgba(0,255,0,1)");
  styles.activeCorner.stroke = defaulter(styles.activeCorner.stroke,"blue");
  styles.activeCorner.strokeWidth = defaulter(styles.activeCorner.strokeWidth,2);

  styles.sizeIndicator = defaulter(styles.sizeIndicator,{});
  styles.sizeIndicator.fill = defaulter(styles.sizeIndicator.fill,"rgba(0,255,0,1)");
  styles.sizeIndicator.stroke = defaulter(styles.sizeIndicator.stroke,"black");
  styles.sizeIndicator.strokeWidth = defaulter(styles.sizeIndicator.strokeWidth,1);
  styles.sizeIndicator.fontFamily = defaulter(styles.sizeIndicator.fontFamily,"sans serif");
  styles.sizeIndicator.fontWeight = defaulter(styles.sizeIndicator.fontWeight,"bold");
  styles.sizeIndicator.fontSize = defaulter(styles.sizeIndicator.fontSize,"10px");



  return styles;

  function defaulter(setValue,defaultValue) {
    return setValue ? setValue : defaultValue;
  }

}

/* jshint esversion:6 */
BrushBox.prototype.defineWorldCoordinatesFormatter = function() {
  const box = this;

  let formatter = (coordinates) => {
    let outputCoordinates = {};
    outputCoordinates.x = coordinates.x - (box.worldCoordinates.width / 2);
    outputCoordinates.y = box.worldCoordinates.height - coordinates.y;
    return outputCoordinates;
  }

  return formatter;
}

/* jshint esversion:6 */
BrushBox.prototype.hideIndicators = function(indicators) {
  const box = this;

  return function() {
    indicators.forEach((indicator) => {
      box.edgeIndicators[indicator]
        .transition()
        .duration(box.styles.cornerHotspotTransition)
        .attr("stroke-width",0);

      box.sizeIndicators[indicator]
        .transition()
        .duration(box.styles.cornerHotspotTransition)
        .attr("stroke-width",box.styles.edgeIndicators.strokeWidth)
        .attr("opacity",0);

    });
  }

}

/* jshint esversion:6 */
BrushBox.prototype.moveCorners = function() {
  const box = this;

  box.corners.topLeft
    .move({"x":0,"y":0});

  box.corners.topRight
    .move({"x":box.size.width,"y":0});

  box.corners.bottomLeft
    .move({"x":0,"y":box.size.height});

  box.corners.bottomRight
    .move({"x":box.size.width,"y":box.size.height});


  return box;
}

/* jshint esversion:6 */
BrushBox.prototype.moveEdgeIndicators = function() {
  const box = this;

  box.edgeIndicators.left
    .attr("y2",box.size.height);

  box.edgeIndicators.top
    .attr("x2",box.size.width);

  box.edgeIndicators.right
    .attr("x1",box.size.width)
    .attr("x2",box.size.width)
    .attr("y2",box.size.height);

  box.edgeIndicators.bottom
    .attr("y1",box.size.height)
    .attr("y2",box.size.height)
    .attr("x2",box.size.width);


  return box;
}

/* jshint esversion:6 */
BrushBox.prototype.moveGroup = function() {
  const box = this;

  box.group
    .attr("transform","translate("+box.coordinates.x+","+box.coordinates.y+")");

  return box;
}

/* jshint esversion:6 */
BrushBox.prototype.movePositionIndicators = function() {
  const box = this;

  box.groundIndicators.line
    .attr("x1",box.size.width / 2)
    .attr("x2",box.size.width / 2)
    .attr("y1",0)

  box.groundIndicators.bottomCircle
    .attr("cy",0)
    .attr("cx",box.size.width / 2);

  box.groundIndicators.topCircle
    .attr("cx",box.size.width / 2)
    .attr("cy",box.size.height);

  box.groundIndicators.topText
    .attr("x",box.size.width / 2 + 5)
    .attr("y",-5)

  if(!box.dragLock) {
    box.groundIndicators.topText
      .text(box.sizeFormatter(box.coordinates.y));

    box.groundIndicators.bottomText
      .text(box.sizeFormatter(box.coordinates.y - box.size.height));

  }


  box.groundIndicators.bottomText
    .attr("x",box.size.width / 2 + 5)
    .attr("y",box.size.height + 5);

  return box;
}

/* jshint esversion:6 */
BrushBox.prototype.moveTextIndicators = function() {
  const box = this;

  box.sizeIndicators.left
    .attr("y",box.size.height / 2);

  box.sizeIndicators.right
    .attr("x",box.size.width + 5)
    .attr("y",box.size.height / 2);

  box.sizeIndicators.top
    .attr("x",box.size.width / 2);

  box.sizeIndicators.bottom
    .attr("x",box.size.width / 2)
    .attr("y",box.size.height + 5)

  return box;
}

/* jshint esversion:6 */
BrushBox.prototype.resizeRect = function() {
  const box = this;

  box.rect
    .attr("width",box.size.width)
    .attr("height",box.size.height);

  return box;
}

/* jshint esversion:6 */
BrushBox.prototype.resized = function() {
  const box = this;

  box
    .moveGroup()
    .resizeRect()
    .moveCorners()
    .moveEdgeIndicators()
    .moveTextIndicators()
    .updateTextIndicators()
    .movePositionIndicators();

  // box.callbacks
  //   .valueChanged({
  //     "size":box.size,
  //     "coordinates":box.coordinates
  //   });


  return box;
};

/* jshint esversion:6 */
BrushBox.prototype.showIndicators = function(indicators) {
  const box = this;

  return function() {
    indicators.forEach((indicator) => {
      box.edgeIndicators[indicator]
        .transition()
        .duration(box.styles.cornerHotspotTransition)
        .attr("stroke-width",box.styles.edgeIndicators.strokeWidth);

      // box.sizeIndicators[indicator]
      //   .transition()
      //   .duration(box.styles.cornerHotspotTransition)
      //   .attr("stroke-width",box.styles.edgeIndicators.strokeWidth)
      //   .attr("opacity",1);
    });
  };

};

/* jshint esversion:6 */
BrushBox.prototype.updateTextIndicators = function() {
  const box = this;

  box.sizeIndicators.top
    .text(box.sizeFormatter(box.size.width));

  box.sizeIndicators.bottom
    .text(box.sizeFormatter(box.size.width));

  box.sizeIndicators.left
    .text(box.sizeFormatter(box.size.height));

  box.sizeIndicators.right
    .text(box.sizeFormatter(box.size.height));

  return box;
}

/* jshint esversion:6 */
BrushBox.prototype.rectDragEnd = function() {
  const box = this;
  return function() {

    box.callbacks
      .valueChanged({
        "size":box.size,
        "coordinates":box.coordinates
      });

    box.callbacks
      .dragEnd();

  }
};

/* jshint esversion:6 */
BrushBox.prototype.rectDragStart = function() {
  const box = this;
  return function() {
    box.cursorOffset = {};
    box.cursorOffset.x = d3.event.x - box.coordinates.x;
    box.cursorOffset.y = d3.event.y - box.coordinates.y;

    box.callbacks
      .dragStart();

  }
}

/* jshint esversion:6 */
BrushBox.prototype.rectDragging = function() {
  const box = this;
  return function() {

    box.coordinates.x = d3.event.x - box.cursorOffset.x;
    box.coordinates.y = d3.event.y - box.cursorOffset.y;

    box
      .resized();
  }
}

/* jshint esversion:6 */
BrushBox.prototype.rectMouseout = function(datum,index) {
  const box = this;

  return function() {

    box.rect
      .transition()
      .duration(box.styles.rectHighlightTransition.duration)
      .attr("fill",box.styles.defaultRect.fill)
      .attr("stroke",box.styles.defaultRect.stroke)
      .attr("stroke-width",box.styles.defaultRect.strokeWidth)
      .attr("stroke-dasharray",box.styles.defaultRect.strokeDashArray);

    box.groundIndicators.line
      .transition()
      .duration(box.styles.rectHighlightTransition.duration)
      .attr("stroke-width",0);

    box.groundIndicators.bottomCircle
      .transition()
      .duration(box.styles.rectHighlightTransition.duration)
      .attr("r",0);

    box.groundIndicators.topCircle
      .transition()
      .duration(box.styles.rectHighlightTransition.duration)
      .attr("r",0);

    box.groundIndicators.bottomText
      .text("");

    box.groundIndicators.topText
      .text("");


    box.callbacks
      .mouseout();
  }
}

/* jshint esversion:6 */
BrushBox.prototype.rectMouseover = function(datum,index) {
  const box = this;
  return function() {
    if(!box.dragLock) {
      box.rect
        .transition()
        .duration(box.styles.rectHighlightTransition.duration)
        .attr("fill",box.styles.highlightRect.fill)
        .attr("stroke",box.styles.highlightRect.stroke)
        .attr("stroke-width",box.styles.highlightRect.strokeWidth)
        .attr("stroke-dasharray",box.styles.highlightRect.strokeDashArray);

      box.groundIndicators.line
        .transition()
        .duration(box.styles.rectHighlightTransition.duration)
        .attr("stroke-width",box.styles.groundIndicator.strokeWidth);

      box.groundIndicators.bottomCircle
        .transition()
        .duration(box.styles.rectHighlightTransition.duration)
        .attr("r",box.styles.groundIndicator.radius);

      box.groundIndicators.topCircle
        .transition()
        .duration(box.styles.rectHighlightTransition.duration)
        .attr("r",box.styles.groundIndicator.radius);

      box.groundIndicators.topText
        .text(box.sizeFormatter(box.coordinates.y));

      box.groundIndicators.bottomText
        .text(box.sizeFormatter(box.coordinates.y - box.size.height));

      box.callbacks
        .mouseover();
    }
  };
};

/* jshint esversion:6 */
CatcherView.prototype.addBrushBox = function() {
  const view = this;

  let box = new BrushBox({
    "where":view.layers.brush,
    "size":{
      "width":500,
      "height":500
    },
    "callbacks":{
      "dragStart":() => {
        view.layers.pitchCircles
          .transition()
          .duration(275)
          .attr("opacity",0.75);

        view.layers.activeCircles
          .selectAll("*")
          .remove();

      },
      "dragEnd":() => {
        view.layers.pitchCircles
          .transition()
          .duration(275)
          .attr("opacity",0);
      },
      "valueChanged":(info) => {
        let minX = view.scales.x.invert(info.coordinates.x);
        let maxX = view.scales.x.invert(info.coordinates.x + info.size.width);
        let maxY = view.scales.y.invert(info.coordinates.y);
        let minY = view.scales.y.invert(info.coordinates.y + info.size.height);

        view.player
          .filterByRegion({
            "minX":minX,
            "maxX":maxX,
            "minY":minY,
            "maxY":maxY
          });

      }
    }
  });

  function summarize(data,key) {
    let summary = d3.nest()
        .key((d) => { return d[key]; })
        .rollup((d) => { return d.length; })
        .entries(data)
        .sort((a,b) => { return b.value - a.value; });

    return summary;
  }


};

/* jshint esversion:6 */
CatcherView.prototype.addGroup = function() {
  const view = this;
  let group = view.where
    .append("g");
  return group;
};

/* jshint esversion:6 */
CatcherView.prototype.addLayers = function() {
  const view = this;
  let layers = {};


  layers.base = addSingleLayer();
  layers.axis = addSingleLayer();
  layers.pitchCircles = addSingleLayer();
  layers.zone = addSingleLayer();
  layers.activeCircles = addSingleLayer();
  layers.highlightCircles = addSingleLayer();
  layers.brush = addSingleLayer();

  return layers;

  function addSingleLayer() {
    let layer = view.group
      .append("g")
      .attr("opacity",1);

    return layer;
  }
};

/* jshint esversion:6 */
CatcherView.prototype.defineScales = function() {
  const view = this;

  let scales = {};

  scales.x = d3.scaleLinear()
    .domain([-3,3])
    .range([0,view.size.width]);

  scales.y = d3.scaleLinear()
    .domain([0,6])
    .range([view.size.height,0]);

  return scales;
};

/* jshint esversion:6 */
CatcherView.prototype.defineSize = function(options) {
  const view = this;
  let size = defaulter(options.size,{});
  size.width = 500;
  size.height = 500;
  return size;

  function defaulter(setValue,defaultValue) {
    return setValue ? setValue : defaultValue;
  }
};

/* jshint esversion:6 */
CatcherView.prototype.addPlayerCircles = function(data) {
  const view = this;

  view.pitchRawData = data;

  view.pitchCircles = view.layers.pitchCircles
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    // .attr("r",view.scales.x(0.0675) - view.scales.x(0))
    .attr("r",4)
    .attr("fill","rgba(0,0,0,0.06275)")
    .attr("stroke","rgba(0,0,0,0.06275)")
    .attr("stroke-width",0.5)
    .attr("cx",(d) => { return view.scales.x(d.pX); })
    .attr("cy",(d) => { return view.scales.y(d.pZ); });

  return view;
};

/* jshint esversion:6 */
CatcherView.prototype.addPlayerStrikeZone = function(zone) {
  const view = this;

  view.playerStrikeZone = view.layers.zone
    .append("rect")
    .attr("x",view.scales.x(-8.5 / 12))
    .attr("y",view.scales.y(zone.top))
    .attr("width",view.scales.x(6.5/12) - view.scales.x(-8.15/12))
    .attr("height",view.scales.y(6 - zone.bottom))
    .attr("fill","rgba(0,0,255,0.125)")
    .attr("stroke","red")
    .attr("stroke-width",2);

  return view;
};

/* jshint esversion:6 */
CatcherView.prototype.clearHighlight = function() {
  const view = this;

  view.layers.highlightCircles
    .selectAll("*")
    .remove();

  return view;
};

/* jshint esversion:6 */
CatcherView.prototype.switchPerspective = function(perspective) {
  const view = this;

  if(perspective === "catcher") {
    view.player.isInverted = false;

    view.scales.x
      .domain([-3,3]);

      view.leftBoxLabel
        .html("LHB Batter's Box &rarr;");

      view.rightBoxLabel
        .html("&larr; RHB Batter's Box");

    let hpPoints = [
      {"x":view.scales.x(-8.5/12),"y":view.scales.y(0)},
      {"x":view.scales.x(8.5/12),"y":view.scales.y(0)},
      {"x":view.scales.x(8.5/12),"y":view.scales.y(-4.25/12)},
      {"x":view.scales.x(0),"y":view.scales.y(-8.5/12)},
      {"x":view.scales.x(-8.5/12),"y":view.scales.y(-4.25/12)},
      {"x":view.scales.x(-8.5/12),"y":view.scales.y(0)}
    ];

    view.homePlate
      .datum(hpPoints)
      .attr("d",view.homePlatePathGen);
  }

  if(perspective === "pitcher") {
    view.player.isInverted = true;
    view.scales.x
      .domain([3,-3]);

    view.leftBoxLabel
      .html("RHB Batter's Box &rarr;");

    view.rightBoxLabel
      .html("&larr; LHB Batter's Box");

    let hpPoints = [
      {"x":view.scales.x(-8.5/12),"y":view.scales.y(0)},
      {"x":view.scales.x(8.5/12),"y":view.scales.y(0)},
      {"x":view.scales.x(8.5/12),"y":view.scales.y(4.25/12)},
      {"x":view.scales.x(0),"y":view.scales.y(8.5/12)},
      {"x":view.scales.x(-8.5/12),"y":view.scales.y(4.25/12)},
      {"x":view.scales.x(-8.5/12),"y":view.scales.y(0)}
    ];

    view.homePlate
      .datum(hpPoints)
      .attr("d",view.homePlatePathGen);

  }

  view.pitchCircles
    .attr("cx",(d) => { return view.scales.x(d.pX) ;});

  view
    .updateActive();


  return view;
};

/* jshint esversion:6 */
CatcherView.prototype.updateActive = function(data) {
  const view = this;

  if(data !== undefined) {
    view.activeData = data;
  }

  view.layers.activeCircles
    .selectAll("*")
    .remove();


  let colorScheme = colorSchemePitchResults();

  view.layers.activeCircles
    .selectAll("circle")
    .data(view.activeData)
    .enter()
    .append("circle")
    .attr("cx",(pitch) => { return view.scales.x(pitch.pX); })
    .attr("cy",(pitch) => { return view.scales.y(pitch.pZ); })
    .attr("r",4)
    .attr("fill",(d) => {
        return colorScheme[d.pitchResultCode];
    })
    .attr("fill-opacity",0.00675)
    .attr("stroke",(d) => {
        return colorScheme[d.pitchResultCode];
    })
    .attr("stroke-opacity",0.25)
    .on('mouseover',function(d,i) {
      let element = d3.select(this);
      let tooltip = d3.select("#tooltip");

      element
        .attr("fill",colorScheme[d.pitchResultCode])
        .attr("fill-opacity",1)
        .attr("stroke-opacity",1)
        .attr("r",8);

      let xPosition = d3.event.x + 15;
      let yPosition = d3.event.y - 75;
      tooltip
        .style("display","block")
        .style("left",xPosition + "px")
        .style("top",yPosition + "px");

      let tooltipMessage = "";
      tooltipMessage += "<div style='text-align:center; font-size:1.2em; font-weight:bold; margin-bottom:0.5em; color:white; background-color:"+colorScheme[d.pitchResultCode]+"'>" + mapPitchResult(d.pitchResultCode) + "</div>";
      tooltipMessage += "<table style='width:100%; margin-bottom:25px;>";
      tooltipMessage += "<tr style='font-size:0.75em'><td style='border-bottom:1px solid black'>Date</td>";
      if(d.pitcherName === undefined) {
        tooltipMessage += "<td style='border-bottom:1px solid black'>Hitter</td>";
      } else {
        tooltipMessage += "<td style='border-bottom:1px solid black'>Pitcher</td>";
      }
      tooltipMessage += "<td style='border-bottom:1px solid black'>Pitch Type</td></tr>";
      tooltipMessage += "<tr style='font-size:0.75em'><td>"+d.date+"</td>";
      if(d.pitcherName === undefined) {
        tooltipMessage+= "<td>"+d.batterName+"</td><td>"+mapPitch(d.pitchType)+"</td></tr>";
      } else {
        tooltipMessage+= "<td>"+d.pitcherName+"</td><td>"+mapPitch(d.pitchType)+"</td></tr>";
      }
      tooltipMessage += "<tr style='font-size:0.75em'><td style='border-bottom:1px solid black'>Spin Rate</td><td style='border-bottom:1px solid black'>Start Velo</td><td style='border-bottom:1px solid black'>End Velo</td></tr>";
      tooltipMessage += "<tr style='font-size:0.85em'><td>"+d.spinRate+" rpm</td><td>"+d.startSpeed+" mph</td><td>"+d.endSpeed+" mph</td></tr>";
      tooltipMessage += "<tr style='font-size:0.75em'><td style='border-bottom:1px solid black'>Break Angle</td><td style='border-bottom:1px solid black'>Horizontal Movement</td><td style='border-bottom:1px solid black'>Vertical Movement</td></tr>";
      tooltipMessage += "<tr style='font-size:0.85em'><td>"+d.breakAngle+"</td><td>"+d.pfxX+"\"</td><td>"+d.pfxZ+"\"</td></tr>";
      tooltipMessage += "</table>";

      // tooltipMessage += "<table>";
      // tooltipMessage += "<tr><td>Start Speed</td><td>"+d.startSpeed+" mph</td></tr>";
      // tooltipMessage += "<tr><td>End Speed</td><td>"+d.endSpeed+" mph</td></tr>";
      // tooltipMessage += "<tr><td>Spin Rate</td><td>"+d.spinRate+" rpm</td></tr>";
      // tooltipMessage += "</table>";

      tooltip.html(tooltipMessage);

    })
    .on('mouseout',function(d,i) {
      let element = d3.select(this);
      let tooltip = d3.select("#tooltip");

      element
        .attr("fill",colorScheme[d.pitchResultCode])
        .attr("fill-opacity",0.00675)
        .attr("stroke-opacity",0.25)
        .attr("r",5);

      element
        .attr("fill","rgba(0,0,0,0.00675)");

      tooltip
        .style("display","none");

    })
    .on('mousemove',function() {
      let tooltip = d3.select("#tooltip");
      let xPosition = d3.event.x + 15;
      let yPosition = d3.event.y - 75;
      tooltip
        .style("display","block")
        .style("left",xPosition + "px")
        .style("top",yPosition + "px");
    });


  return view;
};

/* jshint esversion:6 */
CatcherView.prototype.updateHighlight = function(data,fill) {
  const view = this;

  view
    .clearHighlight();

  view.layers.highlightCircles
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx",(pitch) => { return view.scales.x(pitch.pX); })
    .attr("cy",(pitch) => { return view.scales.y(pitch.pZ); })
    .attr("r",4)
    .attr("fill",fill)
    .attr("stroke","black");


  return view;
};

/* jshint esversion:6 */
FilterTable.prototype.addDiv = function() {
  const table = this;

  let div = d3.select("#filterTables")
    .append("div")
    .classed("filterTable",true)
    .style("display","none");

  return div;
};

/* jshint esversion:6 */
FilterTable.prototype.addList = function() {
  const table = this;

  let list = table.div
    .append("ul")
    .classed("filterTableList",true);

  return list;
};

/* jshint esversion:6 */
FilterTable.prototype.addListItems = function() {
  const table = this;

  let listItems = table.list
    .selectAll("li")
    .data(table.values)
    .enter()
    .append("li")
    .classed("filterTableListItem",true)
    .html((d) => { return "<span class='filterTableListItemName'>" + d.key + "</span> ("+d.value+")"; });

  return listItems;
};

/* jshint esversion:6 */
FilterTable.prototype.addTitleDiv = function() {
  const table = this;

  let div = table.div
    .append("div")
    .classed("filterTableTitle",true)
    .html(table.title);

  return div;
};

/* jshint esversion:6 */
Minibar.prototype.addData = function(data) {
  const bar = this;

  bar.data = data;

  bar.scale
    .domain([0,bar.data.max]);

  bar.active
    .attr("width",bar.scale(data.value) - bar.scale(0));

  bar.line
    .attr("x1",bar.scale(data.value))
    .attr("x2",bar.scale(data.value));

  bar.valueLabelGhost
    .attr("x",bar.scale(data.value))
    .text(bar.valueFormatter(data.value));

  bar.valueLabel
    .attr("x",bar.scale(data.value))
    .text(bar.valueFormatter(data.value));

  return bar;
};

/* jshint esversion:6 */
Minibar.prototype.addActive = function() {
  const bar = this;

  let active = bar.layers.active
    .append("rect")
    .attr("x",bar.referencePoints.minX)
    .attr("y",bar.referencePoints.verticalMidline - (bar.styles.active.height / 2 ))
    .attr("height",bar.styles.active.height)
    .attr("fill",bar.styles.active.fill)
    .attr("stroke",bar.styles.active.stroke)
    .attr("stroke-width",bar.styles.active.strokeWidth);

  return active;
};

/* jshint esversion:6 */
Minibar.prototype.addLabels = function(options) {
  const bar = this;
  let labels = {};

  labels.left = bar.layers.labels
    .append("text")
    .attr("dominant-baseline","middle")
    .attr("text-anchor","end")
    .attr("x",bar.referencePoints.minX - bar.styles.labels.offset)
    .attr("y",bar.referencePoints.verticalMidline)
    .attr("font-family",bar.styles.labels.fontFamily)
    .attr("font-size",bar.styles.labels.fontSize)
    .attr("font-weight",bar.styles.labels.fontWeight)
    .attr("fill",bar.styles.labels.fontFill)
    .text(options.leftLabel);

  // labels.start = bar.layers.labels
  //   .append("text")
  //   .attr("dominant-baseline","middle")
  //   .attr("text-anchor","right")
  //   .attr("x",bar.referencePoints.maxX + bar.styles.labels.offset)
  //   .attr("y",bar.referencePoints.verticalMidline)
  //   .attr("font-family",bar.styles.labels.fontFamily)
  //   .attr("font-size",bar.styles.labels.fontSize)
  //   .attr("font-weight",bar.styles.labels.fontWeight)
  //   .attr("fill",bar.styles.labels.fontFill)
  //   .text(options.rightLabel);

  return labels;
}

/* jshint esversion:6 */
Minibar.prototype.addLayers = function() {
  const bar = this;
  
  let layers = {};
  layers.labels = singleLayer();
  layers.track = singleLayer();
  layers.active = singleLayer();
  layers.line = singleLayer();
  layers.valueLabel = singleLayer();
  layers.title = singleLayer();

  return layers;

  function singleLayer() {
    return bar.svg.append("g");
  }
};

/* jshint esversion:6 */
Minibar.prototype.addLine = function() {
  const bar = this;
  let line = bar.layers.line
    .append("line")
    .attr("stroke",bar.styles.line.stroke)
    .attr("stroke-width",bar.styles.line.strokeWidth)
    .attr("y1",bar.referencePoints.verticalMidline - (bar.styles.line.height / 2))
    .attr("y2",bar.referencePoints.verticalMidline + (bar.styles.line.height / 2));

  return line;
};

/* jshint esversion:6 */
Minibar.prototype.addSvg = function() {
  const bar = this;

  let svg = bar.where
    .append("svg")
    .attr("width",bar.size.width)
    .attr("height",bar.size.height)
    .attr("cursor","pointer")
    .on('mouseover',function() {
      bar.labels.left
        .attr("font-weight","bold");

      bar.callbacks
        .mouseover();
    })
    .on('mouseout',function() {
      bar.labels.left
        .attr("font-weight","normal");

      bar.callbacks
        .mouseout();
    });

  return svg;
};

/* jshint esversion:6 */
Minibar.prototype.addTitle = function(options) {
  const bar = this;

  let title = bar.layers.title
    .append("text")
    .attr("x",bar.margins.left)
    .attr("y",bar.margins.top)
    .attr("text-anchor","start")
    .attr("dominant-baseline","baseline")
    .attr("font-family",bar.styles.title.fontFamily)
    .attr("font-size",bar.styles.title.fontSize)
    .attr("font-weight",bar.styles.title.fontWeight)
    .attr("fill",bar.styles.title.fontfill)
    .text(options.title);

  return title;
};

/* jshint esversion:6 */
Minibar.prototype.addTrack = function() {
  const bar = this;

  let track = bar.layers.track
    .append("rect")
    .attr("x",bar.referencePoints.minX)
    .attr("y",bar.referencePoints.verticalMidline - (bar.styles.track.height / 2))
    .attr("width",bar.referencePoints.effectiveWidth)
    .attr("height",bar.styles.track.height)
    .attr("fill",bar.styles.track.fill)
    .attr("stroke",bar.styles.track.stroke)
    .attr("stroke-width",bar.styles.track.strokeWidth);

  return track;
}

/* jshint esversion:6 */
Minibar.prototype.addValueLabel = function() {
  const bar = this;

  let label = bar.layers.valueLabel
    .append("text")
    .attr("dominant-baseline","middle")
    .attr("text-anchor","start")
    .attr("dx",bar.styles.valueLabel.xOffset)
    .attr("y",bar.referencePoints.verticalMidline)
    .attr("font-family",bar.styles.valueLabel.fontFamily)
    .attr("font-size",bar.styles.valueLabel.fontSize)
    .attr("font-weight",bar.styles.valueLabel.fontWeight)
    .attr("fill",bar.styles.valueLabel.fontFill);

  return label;

};

/* jshint esversion:6 */
Minibar.prototype.addValueLabelGhost = function() {
  const bar = this;

  let labelGhost = bar.layers.valueLabel
    .append("text")
    .attr("dominant-baseline","middle")
    .attr("text-anchor","start")
    .attr("dx",bar.styles.valueLabel.xOffset)
    .attr("y",bar.referencePoints.verticalMidline)
    .attr("font-family",bar.styles.valueLabel.fontFamily)
    .attr("font-size",bar.styles.valueLabel.fontSize)
    .attr("font-weight",bar.styles.valueLabel.fontWeight)
    .attr("fill",bar.styles.valueLabel.fontFill)
    .attr("stroke",bar.styles.valueLabel.ghostStroke)
    .attr("stroke-width",bar.styles.valueLabel.ghostStrokeWidth);

  return labelGhost;

};

/* jshint esversion:6 */
Minibar.prototype.defineCallbacks = function(options) {
  const bar = this;

  let callbacks = defaulter(options.callbacks,{});
  callbacks.mouseover = defaulter(callbacks.mouseover,() => {});
  callbacks.mouseout = defaulter(callbacks.mouseout,() => {});

  return callbacks;

  function defaulter(s,v) {
    return s ? s : v;
  }
};

/* jshint esversion:6 */
Minibar.prototype.defineMargins = function(options) {
  const bar = this;

  let margins = defaulter(options.margins,{});
  margins.left = defaulter(margins.left,150);
  margins.right = defaulter(margins.right,50);
  margins.top = defaulter(margins.top,0);
  margins.bottom = defaulter(margins.bottom,10);

  return margins;

  function defaulter(s,v) {
    return s ? s : v;
  }

};

/* jshint esversion:6 */
Minibar.prototype.defineReferencePoints = function() {
  const bar = this;
  let referencePoints = {};

  referencePoints.effectiveWidth = bar.size.width - bar.margins.right - bar.margins.left;
  referencePoints.effectiveHeight = bar.size.height - bar.margins.top - bar.margins.bottom;

  referencePoints.minX = bar.margins.left;
  referencePoints.maxX = bar.size.width - bar.margins.right;

  referencePoints.verticalMidline = bar.margins.top + (referencePoints.effectiveHeight / 2);

  return referencePoints;
};

/* jshint esversion:6 */
Minibar.prototype.defineScales = function() {
  const bar = this;

  let scale = d3.scaleLinear()
    .range([bar.referencePoints.minX,bar.referencePoints.maxX]);

  return scale;
};

/* jshint esversion:6 */
Minibar.prototype.defineSize = function(options) {
  const bar = this;

  let size = defaulter(options.size,{});
  size.height = defaulter(size.height,25);
  size.width = defaulter(size.width,300);

  return size;

  function defaulter(s,v) {
    return s ? s : v;
  }

};

/* jshint esversion:6 */
Minibar.prototype.defineStyles = function(options) {
  const bar = this;
  let styles = defaulter(options.styles,{});

  styles.track = defaulter(styles.track,{});
  styles.track.fill = defaulter(styles.track.fill,"#aaa");
  styles.track.stroke = defaulter(styles.track.stroke,"#000");
  styles.track.strokeWidth = defaulter(styles.track.strokeWidth,1);
  styles.track.height = defaulter(styles.track.height,5);

  styles.active = defaulter(styles.active,{});
  styles.active.height = defaulter(styles.active.height,5);
  styles.active.fill = defaulter(styles.active.fill,"blue");
  styles.active.stroke = defaulter(styles.active.stroke,"none");
  styles.active.strokeWidth = defaulter(styles.active.strokeWidth,2);

  styles.line = defaulter(styles.line,{});
  styles.line.stroke = defaulter(styles.line.stroke,"#000099");
  styles.line.strokeWidth = defaulter(styles.line.strokeWidth,3);
  styles.line.height = defaulter(styles.line.height,10);

  styles.labels = defaulter(styles.labels,{});
  styles.labels.fontFamily = defaulter(styles.labels.fontFamily,"Source Sans Pro");
  styles.labels.fontSize = defaulter(styles.labels.fontSize,"14px");
  styles.labels.fontFill = defaulter(styles.labels.fontFill,"black");
  styles.labels.fontWeight = defaulter(styles.labels.fontWeight,"normal");
  styles.labels.offset = defaulter(styles.labels.offset,3);

  styles.valueLabel = defaulter(styles.valueLabel,{});
  styles.valueLabel.fontFamily = defaulter(styles.valueLabel.fontFamily,"Source Sans Pro");
  styles.valueLabel.fontSize = defaulter(styles.valueLabel.fontSize,"16px");
  styles.valueLabel.fontFill = defaulter(styles.valueLabel.fontFill,"bold");
  styles.valueLabel.fontWeight = defaulter(styles.valueLabel.fontWeight,"bold");
  styles.valueLabel.offset = defaulter(styles.valueLabel.offset,3);
  styles.valueLabel.xOffset = defaulter(styles.valueLabel.xOffset,5);
  styles.valueLabel.ghostStroke = "white";
  styles.valueLabel.ghostStrokeWidth = 3;

  styles.title = defaulter(styles.title,{});
  styles.title.fontFamily = defaulter(styles.title.fontFamily,"Source Sans Pro");
  styles.title.fontWeight = defaulter(styles.title.fontWeight,"normal");
  styles.title.fontSize = defaulter(styles.title.fontSize,"14px");
  styles.title.fontFill = defaulter(styles.title.fontFill,"#999");

  return styles;

  function defaulter(s,v) {
    return s ? s : v;
  }
}

/* jshint esversion:6 */
Minibar.prototype.defineValueFormatter = function(options) {
  const bar = this;
  let formatter = defaulter(options.valueFormatter,(v) => { return v.toFixed(0); });
  return formatter;

  function defaulter(s,v) {
    return s ? s : v;
  }
}

/* jshint esversion:6 */
Player.prototype.addFilterTables = function() {
  const player = this;

  let filterTables = {};

  filterTables.battingSide = new FilterTable({
    "name":"Batting Side",
    "values":player.filterPossibleValues.battingSide,
    "type":"unique"
  });

  filterTables.breakAngle = new FilterTable({
    "name":"Break Angle",
    "values":player.filterPossibleValues.breakAngle,
    "type":"extent"
  });

  filterTables.breakLength = new FilterTable({
    "name":"Break Length",
    "values":player.filterPossibleValues.breakLength,
    "type":"extent"
  });

  filterTables.countBalls = new FilterTable({
    "name":"Balls For",
    "values":player.filterPossibleValues.countBalls,
    "type":"unique"
  });

  filterTables.countStrikes = new FilterTable({
    "name":"Strikes Against",
    "values":player.filterPossibleValues.countStrikes,
    "type":"unique"
  });

  filterTables.date = new FilterTable({
    "name":"Game Date",
    "values":player.filterPossibleValues.date,
    "type":"unique"
  });

  filterTables.endSpeed = new FilterTable({
    "name":"End Speed",
    "values":player.filterPossibleValues.endSpeed,
    "type":"extent"
  });

  filterTables.location = new FilterTable({
    "name":"Home / Away",
    "values":player.filterPossibleValues.location,
    "type":"unique"
  });

  filterTables.opponent = new FilterTable({
    "name":"Opponent",
    "values":player.filterPossibleValues.opponent,
    "type":"unique"
  });

  filterTables.pitchResultCode = new FilterTable({
    "name":"Pitch Result",
    "values":player.filterPossibleValues.pitchResultCode,
    "type":"unique"
  });

  filterTables.pitchType = new FilterTable({
    "name":"Pitch Type",
    "values":player.filterPossibleValues.pitchType,
    "type":"unique"
  });

  filterTables.pitcherName = new FilterTable({
    "name":"Opponent Pitcher",
    "values":player.filterPossibleValues.pitcherName,
    "type":"unique"
  });

  filterTables.playResult = new FilterTable({
    "name":"Play Result",
    "values":player.filterPossibleValues.playResult,
    "type":"unique"
  });

  filterTables.realAtBatIndex = new FilterTable({
    "name":"At Bat Index",
    "values":player.filterPossibleValues.realAtBatIndex,
    "type":"unique"
  });

  filterTables.spinDirection = new FilterTable({
    "name":"Spin Direction",
    "values":player.filterPossibleValues.spinDirection,
    "type":"extent"
  });

  filterTables.spinRate = new FilterTable({
    "name":"Spin Rate",
    "values":player.filterPossibleValues.spinRate,
    "type":"extent"
  });

  filterTables.startSpeed = new FilterTable({
    "name":"Pitch Start Speed (MPH)",
    "values":player.filterPossibleValues.startSpeed,
    "type":"extent"
  });

  return filterTables;
};

/* jshint esversion:6 */
Player.prototype.addResultsPane = function() {
  const player = this;

  let pane = new ResultsPane({
    "parent":player
  });

  return pane;
};

/* jshint esversion:6 */
Player.prototype.defineFilterValues = function() {
  const player = this;

  let values = {};
  values.battingSide = false;
  values.breakAngle = false;
  values.breakLength = false;
  values.countBalls = false;
  values.countStrikes = false;
  values.date = false;
  values.endSpeed = false;
  values.location = false;
  values.opponent = false;
  values.pitchResultCode = false;
  values.pitchType = false;
  values.pitcherName = false;
  values.playResult = false;
  values.realAtBatIndex = false;
  values.spinDirection = false;
  values.spinRate = false;
  values.startSpeed = false;
  return values;
};

/* jshint esversion:6 */
Player.prototype.getFilterPossibleValues = function() {
  const player = this;

  let possibleValues = {};
  possibleValues.battingSide = uniqueValues("battingSide");
  possibleValues.breakAngle = extent("breakAngle");
  possibleValues.breakLength = extent("breakLength");
  possibleValues.countBalls = uniqueValues("countBalls");
  possibleValues.countStrikes = uniqueValues("countStrikes");
  possibleValues.date = uniqueValues("date");
  possibleValues.endSpeed = extent("endSpeed");
  possibleValues.location = uniqueValues("location");
  possibleValues.opponent = uniqueValues("opponent");
  possibleValues.pitchResultCode = uniqueValues("pitchResultCode");
  possibleValues.pitchType = uniqueValues("pitchType");
  possibleValues.pitcherName = uniqueValues("pitcherName");
  possibleValues.playResult = uniqueValues("playResult");
  possibleValues.realAtBatIndex = extent("realAtBatIndex");
  possibleValues.spinDirection = extent("spinDirection");
  possibleValues.spinRate = extent("spinRate");
  possibleValues.startSpeed = extent("startSpeed");

  return possibleValues;

  function uniqueValues(key) {
    return d3.nest()
        .key((d) => { return d[key]; })
        .rollup((d) => { return d.length; })
        .entries(player.rawData)
        .sort((a,b) => { return b.value - a.value; });
  }

  function extent(key) {
    return d3.extent(player.rawData.map((a) =>{ return +a[key]; }));
  }
};

/* jshint esversion:6 */
Player.prototype.summarizePlayResults = function() {
  const player = this;
  let summary = d3.nest()
    .key((d) => { return d.playResult; })
    .rollup((d) => { return d.length; })
    .entries(player.rawData);

  return summary;
};

/* jshint esversion:6 */
Player.prototype.summaryRollup = function(key) {
  const player = this;
  let summary = d3.nest()
      .key((d) => { return d[key]; })
      .rollup((d) => { return d.length; })
      .entries(player.rawData)
      .sort((a,b) => { return b.value - a.value; });
  return summary;
};

/* jshint esversion:6 */
Player.prototype.filterByRegion = function(region) {
  const player = this;

  player.filteredData = JSON.parse(JSON.stringify(player.rawData)).filter(regionFilter);

  // TODO: RUN OTHER FILTERS!
  // TODO: MOVE TO SEPARATE FILE!

  let results = {};
  results.totalPitches = player.rawData.length;
  results.pitchesInRegion = player.filteredData.length;
  results.balls = player.filteredData.filter(player.filterRules.balls).length;
  results.swingingStrikes = player.filteredData.filter(player.filterRules.swingingStrikes).length;
  results.inPlayNoOuts = player.filteredData.filter(player.filterRules.inPlayNoOuts).length;
  results.inPlayOuts = player.filteredData.filter(player.filterRules.inPlayOuts).length;
  results.fouls = player.filteredData.filter(player.filterRules.fouls).length;
  results.foulTips = player.filteredData.filter(player.filterRules.foulTips).length;
  results.calledStrikes = player.filteredData.filter(player.filterRules.calledStrikes).length;
  results.swings = results.pitchesInRegion - results.balls - results.calledStrikes;
  results.totalStrikes = results.foulTips + results.fouls + results.swingingStrikes + results.calledStrikes;

  results.homeRuns = player.filteredData.filter(player.filterRules.homeRuns).length;
  results.triples = player.filteredData.filter(player.filterRules.triples).length;
  results.doubles = player.filteredData.filter(player.filterRules.doubles).length;
  results.singles = player.filteredData.filter(player.filterRules.singles).length;

  results.ballsInPlay = player.filteredData.filter(player.filterRules.ballsInPlay).length;
  results.outs = player.filteredData.filter(player.filterRules.outs).length;
  results.hits = player.filteredData.filter(player.filterRules.hits).length;

  results.pitches = {};
  let pitchTypes = ["FT","SL","FF","SI","CU","CH","FC","KC","FS","KN"];
  pitchTypes.forEach((pitch) => {
    results.pitches[pitch] = player.filteredData.filter(player.filterRules[pitch]).length;
  });

  player.resultsPane
    .updateData(results);

  player.catcherView
    .updateActive(player.filteredData);

  return player;

  function regionFilter(item) {
    if(player.isInverted) {
      return ![+item.pX >= +region.maxX,+item.pX <= +region.minX,+item.pZ >= +region.minY,+item.pZ <= +region.maxY].includes(false);
    }
    return ![+item.pX >= +region.minX,+item.pX <= +region.maxX,+item.pZ >= +region.minY,+item.pZ <= +region.maxY].includes(false);
    }
};

/* jshint esversion:6 */
Player.prototype.registerCatcherView = function(catcherView) {
  const player = this;

  player.catcherView = catcherView;

  return player;
};

/* jshint esversion:6 */
PlayerList.prototype.addPlayerNames = function() {
  const list = this;


  let names = list.tableRows
    .append("div")
    .classed("playerListTableCell",true)
    .style("display",(player) => { return "block"; })
    .html((player) => { return player.name; })
    .on('click',function(player,index) {
      let display = new Player(player);

      let catcherView = new CatcherView({
        "where":d3.select("#tempCatcher"),
        "player":display
      });

      display.registerCatcherView(catcherView);

    });

  return names;
};

/* jshint esversion:6 */
PlayerList.prototype.addTable = function() {
  const list = this;
  let table;

  table = d3.select("#playerList")
    .append("div")
    .classed("playerListTable",true);

  return table;
};

/* jshint esversion:6 */
PlayerList.prototype.addTableRows = function() {
  const list = this;
  let rows;

  rows = list.table
    .selectAll(".playerListTableRow")
    .data(list.asArray)
    .enter()
    .append("div")
    .classed("playerListTableRow",true);

  return rows;
};

/* jshint esversion:6 */
PlayerList.prototype.recastAsArray = function() {
  const list = this;

  let recast = [];

  Object.keys(list.listData).forEach((playerId) => {
    recast.push(list.listData[playerId]);
  });

  recast.sort((a,b) => { return a.name - b.name ;});
  console.log(recast);
  return recast;
};

/* jshint esversion:6 */
ResultsPane.prototype.addDiv = function() {
  const pane = this;

  let div = d3.select("#resultsPane")
    .append("div")
    .classed("resultsPane",true);

  return div;
};

/* jshint esversion:6 */
ResultsPane.prototype.addGroups = function() {
  const pane = this;
  let groups = {};

  groups.sampleSize = singleGroup();
  groups.summary = singleGroup();
  groups.swingResults = singleGroup();
  groups.battedBallResults = singleGroup();
  groups.pitches = singleGroup();

  return groups;
  function singleGroup() {

    return pane.div
      .append("div")
      .classed("resultsPaneGroup",true);
  }
};

/* jshint esversion:6 */
ResultsPane.prototype.defineStyles = function(options) {
  const pane = this;
  let styles = {};
  styles.width = 300;
  styles.margins = {
    "left":100,
    "right":50
  };
  return styles;
};

/* jshint esversion:6 */
ResultsPane.prototype.updateData = function(data) {
  const pane = this;


  pane.insideRegionOutsideRegion
    .addData({"value":data.pitchesInRegion,"max":data.totalPitches});

  pane.swingsNoSwings
    .addData({"value":data.swings,"max":data.pitchesInRegion});

  pane.totalStrikes
    .addData({"value":data.totalStrikes,"max":data.pitchesInRegion});

  pane.whiffs
    .addData({"value":data.swingingStrikes,"max":data.pitchesInRegion});

  pane.calledStrikes
    .addData({"value":data.calledStrikes,"max":data.pitchesInRegion});

  pane.balls
    .addData({"value":data.balls,"max":data.pitchesInRegion});

  let maxHits = data.homeRuns + data.triples + data.doubles + data.singles;

  pane.homeRuns
    .addData({"value":data.homeRuns,"max":maxHits});

  pane.triples
    .addData({"value":data.triples,"max":maxHits});

  pane.doubles
    .addData({"value":data.doubles,"max":maxHits});

  pane.singles
    .addData({"value":data.singles,"max":maxHits});

  pane.ballsInPlay
    .addData({"value":data.ballsInPlay,"max":data.pitchesInRegion});

  pane.hits
    .addData({"value":data.hits,"max":data.ballsInPlay});

  pane.outs
    .addData({"value":data.outs,"max":data.outs});

  Object.keys(data.pitches).forEach((pitch) => {
    pane.pitches[pitch]
      .addData({"value":data.pitches[pitch],"max":data.pitchesInRegion});
  });


  return pane;
};

/* jshint esversion:6 */
BrushBox.prototype.addBottomLeftCorner = function() {
  const box = this;

  let corner = new BrushBoxCorner({
    "parent":box,
    "coordinates": {
      "x":0,
      "y":box.size.height
    },
    "callbacks":{
      "checkBounds":checkBounds,
      "moved":moved,
      "mouseover":box.showIndicators(["left","bottom"]),
      "mouseout":box.hideIndicators(["left","bottom"])
    }
  });

  return corner;

  function checkBounds() {
    let bounds = {};
    bounds.min = {"x":-Infinity,"y":10};
    bounds.max = {"x":box.size.width - 10,"y":Infinity};
    return bounds;
  }

  function moved(coordinates) {
    box.coordinates.x += coordinates.x;
    box.size.height = coordinates.y;
    box.size.width -= coordinates.x

    box
      .resized();

  }
}

/* jshint esversion:6 */
BrushBox.prototype.addBottomRightCorner = function() {
  const box = this;

  let corner = new BrushBoxCorner({
    "parent":box,
    "coordinates":{
      "x":box.size.width,
      "y":box.size.height
    },
    "callbacks":{
      "checkBounds":checkBounds,
      "moved":moved,
      "mouseover":box.showIndicators(["right","bottom"]),
      "mouseout":box.hideIndicators(["right","bottom"])
    }
  });

  return corner;

  function checkBounds() {
    let bounds = {};
    bounds.max = {"x":Infinity,"y":Infinity};
    bounds.min = {"x":10,"y":10};
    return bounds;
  }

  function moved(coordinates) {
    box.size.width = coordinates.x;
    box.size.height = coordinates.y;

    box
      .resized();
  }
}

/* jshint esversion:6 */
BrushBox.prototype.addTopLeftCorner = function() {
  const box = this;
  let corner = new BrushBoxCorner({
    "parent":box,
    "coordinates":{
      "x":0,
      "y":0
    },
    "callbacks":{
      "checkBounds":checkBounds,
      "moved":moved,
      "mouseover":box.showIndicators(["left","top"]),
      "mouseout":box.hideIndicators(["left","top"])
    }
  });

  return corner;

  function checkBounds() {
    let bounds = {};
    bounds.min = {"x":-Infinity,"y":-Infinity};
    bounds.max = {"x":box.size.width - 10,"y":box.size.height - 10};
    return bounds;
  }

  function moved(coordinates) {
    box.coordinates.x += coordinates.x;
    box.coordinates.y += coordinates.y;
    box.size.width -= coordinates.x;
    box.size.height -= coordinates.y;
    // box.size.height = coordinates.y;
    // box.size.width -= coordinates.x

    box
      .resized();

  }
}

/* jshint esversion:6 */
BrushBox.prototype.addTopRightCorner = function() {
  const box = this;
  let corner = new BrushBoxCorner({
    "parent":box,
    "coordinates":{
      "x":box.size.width,
      "y":0
    },
    "callbacks":{
      "checkBounds":checkBounds,
      "moved":moved,
      "mouseover":box.showIndicators(["top","right"]),
      "mouseout":box.hideIndicators(["top","right"])
    }
  });

  return corner;

  function checkBounds() {
    let bounds = {};
    bounds.min = {"x":10,"y":-Infinity};
    bounds.max = {"x":Infinity,"y":box.size.height - 10};
    return bounds;
  }

  function moved(coordinates) {
    box.size.width = coordinates.x;
    box.coordinates.y += coordinates.y;
    box.size.height -= coordinates.y;

    box
      .resized();

  }
}

/* jshint esversion:6 */
Player.prototype.filterRules = {};
Player.prototype.filterRules.balls = (a) => { return a.pitchResultCode === "B"; };
Player.prototype.filterRules.swings = (a) => { return a.pitchResultCode !== "B" && a.pitchResultCode !== "*B" && a.pitchResultCode !== "C"; };
Player.prototype.filterRules.totalStrikes = (a) => { return a.pitchResultCode == "S" || a.pitchResultCode === "C" || a.pitchResultCode === "F" || a.pitchResultCode === "T"; };
Player.prototype.filterRules.swingingStrikes = (a) => { return a.pitchResultCode === "S"; };
Player.prototype.filterRules.inPlayNoOuts = (a) => { return a.pitchResultCode === "D"; };
Player.prototype.filterRules.inPlayOuts = (a) => { return a.pitchResultCode === "X"; };
Player.prototype.filterRules.fouls = (a) => { return a.pitchResultCode === "F"; };
Player.prototype.filterRules.foulTips = (a) => { return a.pitchResultCode === "T"; };
Player.prototype.filterRules.calledStrikes = (a) => { return a.pitchResultCode === "C"; };
Player.prototype.filterRules.homeRuns = (a) => { return a.playResult === "Home Run" && a.pitchResultCode == "E"; };
Player.prototype.filterRules.triples = (a) => { return a.playResult === "Triple" && (a.pitchResultCode == "E" || a.pitchResultCode == "D" || a.pitchResultCode == "X"); };
Player.prototype.filterRules.doubles = (a) => { return a.playResult === "Double" && (a.pitchResultCode == "E" || a.pitchResultCode == "D" || a.pitchResultCode == "X"); };
Player.prototype.filterRules.singles = (a) => { return a.playResult === "Single" && (a.pitchResultCode == "E" || a.pitchResultCode == "D" || a.pitchResultCode == "X"); };
Player.prototype.filterRules.ballsInPlay = (a) => { return a.pitchResultCode === "D" || a.pitchResultCode === "X" || a.pitchResultCode === "E" ;};
Player.prototype.filterRules.outs = (a) => { return a.pitchResultCode === "X" ;};
Player.prototype.filterRules.hits = (a) => { return (a.pitchResultCode === "D" || a.pitchResultCode === "E") && (a.playResult == "Home Run" || a.playResult == "Double" || a.playResult == "Triple" || a.playResult === "Single")  ;};

Player.prototype.filterRules.FF = (a) => { return a.pitchType == "FF"; };
Player.prototype.filterRules.FT = (a) => { return a.pitchType == "FT"; };
Player.prototype.filterRules.CU = (a) => { return a.pitchType == "CU"; };
Player.prototype.filterRules.CH = (a) => { return a.pitchType == "CH"; };
Player.prototype.filterRules.SL = (a) => { return a.pitchType == "SL"; };
Player.prototype.filterRules.FC = (a) => { return a.pitchType == "FC"; };
Player.prototype.filterRules.FS = (a) => { return a.pitchType == "FS"; };
Player.prototype.filterRules.SI = (a) => { return a.pitchType == "SI"; };
Player.prototype.filterRules.KC = (a) => { return a.pitchType == "KC"; };
Player.prototype.filterRules.KN = (a) => { return a.pitchType == "KN"; };


/*
  Play Types Are:
  'Groundout',
  'Strikeout',
  'Pop Out',
  'Flyout',
  'Lineout',
  'Single',
  'Double',
  'Home Run',
  'Walk',
  'Field Error',
  'Grounded Into DP'
*/

/* jshint esversion:6 */
Player.prototype.clearHighlights = function() {
  const player = this;

  player.catcherView
    .clearHighlight();
    
  return player;
};

/* jshint esversion:6 */
Player.prototype.constructHighlightRule = function(rule,fill) {
  const player = this;

  return () => {
    player.catcherView
      .updateHighlight(player.filteredData.filter(rule),fill);
  };
};

/* jshint esversion:6 */
Player.prototype.defineHighlightRules = function() {
  const player = this;

  player.highlightInRegion = player.constructHighlightRule((a) => { return true; },"#666");
  player.highlightSwings = player.constructHighlightRule(player.filterRules.swings,"#666");
  player.highlightTotalStrikes = player.constructHighlightRule(player.filterRules.totalStrikes,d3.schemeCategory10[1]);
  player.highlightBalls = player.constructHighlightRule(player.filterRules.balls,d3.schemeCategory10[0]);
  player.highlightSwingingStrikes = player.constructHighlightRule(player.filterRules.swingingStrikes,d3.schemeCategory10[1]);
  player.highlightInPlayNoOuts = player.constructHighlightRule(player.filterRules.inPlayNoOuts,d3.schemeCategory10[2]);
  player.highlightInPlayOuts = player.constructHighlightRule(player.filterRules.inPlayOuts,d3.schemeCategory10[3]);
  player.highlightFouls = player.constructHighlightRule(player.filterRules.fouls,d3.schemeCategory10[1]);
  player.highlightFoulTips = player.constructHighlightRule(player.filterRules.foulTips,d3.schemeCategory10[1]);
  player.highlightCalledStrikes = player.constructHighlightRule(player.filterRules.calledStrikes,d3.schemeCategory10[1]);

  player.highlightHomeRuns = player.constructHighlightRule(player.filterRules.homeRuns,d3.schemeCategory10[2]);
  player.highlightTriples = player.constructHighlightRule(player.filterRules.triples,d3.schemeCategory10[2]);
  player.highlightDoubles = player.constructHighlightRule(player.filterRules.doubles,d3.schemeCategory10[2]);
  player.highlightSingles = player.constructHighlightRule(player.filterRules.singles,d3.schemeCategory10[2]);

  player.highlightBallsInPlay = player.constructHighlightRule(player.filterRules.ballsInPlay,"#666");
  player.highlightOuts = player.constructHighlightRule(player.filterRules.outs,d3.schemeCategory10[3]);
  player.highlightHits = player.constructHighlightRule(player.filterRules.hits,d3.schemeCategory10[2]);


  player.highlightFF = player.constructHighlightRule(player.filterRules.FF,"#666");
  player.highlightFT = player.constructHighlightRule(player.filterRules.FT,"#666");
  player.highlightCU = player.constructHighlightRule(player.filterRules.CU,"#666");
  player.highlightCH = player.constructHighlightRule(player.filterRules.CH,"#666");
  player.highlightSL = player.constructHighlightRule(player.filterRules.SL,"#666");
  player.highlightFC = player.constructHighlightRule(player.filterRules.FC,"#666");
  player.highlightFS = player.constructHighlightRule(player.filterRules.FS,"#666");
  player.highlightSI = player.constructHighlightRule(player.filterRules.SI,"#666");
  player.highlightKC = player.constructHighlightRule(player.filterRules.KC,"#666");
  player.highlightKN = player.constructHighlightRule(player.filterRules.KN,"#666");

};

/* jshint esversion:6 */
ResultsPane.prototype.addBalls = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.summary,
    "leftLabel":"Balls",
    "size":{
      "width":pane.styles.width
    },
    "styles":{
      "active":{
        "fill":d3.schemeCategory10[0]
      }
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightBalls(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};

/* jshint esversion:6 */
ResultsPane.prototype.addBallsInPlay = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.swingResults,
    "leftLabel":"Balls In Play",
    "size":{
      "width":pane.styles.width
    },
    "styles":{
      "active":{
        "fill":"#666"
      }
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightBallsInPlay(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};

/* jshint esversion:6 */
ResultsPane.prototype.addCalledStrikes = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.summary,
    "leftLabel":"Called Strikes",
    "size":{
      "width":pane.styles.width
    },
    "styles":{
      "active":{
        "fill":d3.schemeCategory10[1]
      }
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightCalledStrikes(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};

/* jshint esversion:6 */
ResultsPane.prototype.addDoubles = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.battedBallResults,
    "leftLabel":"Doubles",
    "size":{
      "width":pane.styles.width
    },
    "styles":{
      "active":{
        "fill":d3.schemeCategory10[2]
      }
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightDoubles(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};

/* jshint esversion:6 */
ResultsPane.prototype.addHits = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.swingResults,
    "leftLabel":"Hits",
    "size":{
      "width":pane.styles.width
    },
    "styles":{
      "active":{
        "fill":d3.schemeCategory10[2]
      }
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightHits(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }

  });

  return bar;
};

/* jshint esversion:6 */
ResultsPane.prototype.addHomeRuns = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.battedBallResults,
    "leftLabel":"Home Runs",
    "size":{
      "width":pane.styles.width
    },
    "styles":{
      "active":{
        "fill":d3.schemeCategory10[2]
      }
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightHomeRuns(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};

/* jshint esversion:6 */
ResultsPane.prototype.addInsideRegionOutsideRegion = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.sampleSize,
    "title":"Sample Size",
    "leftLabel":"Pitches",
    "rightLabel":"Outside",
    "styles":{
      "active":{
        "fill":"#666"
      }
    },
    "size":{
      "width":pane.styles.width
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightInRegion(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};

/* jshint esversion:6 */
ResultsPane.prototype.addOuts = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.swingResults,
    "leftLabel":"Outs",
    "size":{
      "width":pane.styles.width
    },
    "styles":{
      "active":{
        "fill":d3.schemeCategory10[3]
      }
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightOuts(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }

  });

  return bar;
};

/* jshint esversion:6 */
ResultsPane.prototype.addPitchTypes = function() {
  const pane = this;

  let types = {
    "FF":"Four-Seam Fastball",
    "FT":"Two-Seam Fastball",
    "CU":"Curveball",
    "CH":"Changeup",
    "SL":"Slider",
    "FC":"Cut Fastball",
    "FS":"Splitter",
    "SI":"Sinker",
    "KC":"Knuckle Curve",
    "KN":"Knuckelball"
  };

  pane.pitches = {};

  Object.keys(types).forEach((typeCode) =>{
    let highlightName = "highlight" + typeCode;
    pane.pitches[typeCode] = new Minibar({
      "where":pane.groups.pitches,
      "leftLabel":types[typeCode],
      "size":{
        "width":pane.styles.width
      },
      "styles":{
        "active":{
          "fill":"#666"
        }
      },
      "callbacks":{
        "mouseover":function() { pane.parent[highlightName](); },
        "mouseout":function() { pane.parent.clearHighlights(); }
      }
    });
  });


};

/* jshint esversion:6 */
ResultsPane.prototype.addSingles = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.battedBallResults,
    "leftLabel":"Singles",
    "size":{
      "width":pane.styles.width
    },
    "styles":{
      "active":{
        "fill":d3.schemeCategory10[2]
      }
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightSingles(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};

/* jshint esversion:6 */
ResultsPane.prototype.addSluggingOnContact = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.battedBallResults,
    "leftLabel":"Slugging On Contact",
    "size":{
      "width":pane.styles.width
    }
  });

  return bar;
};

/* jshint esversion:6 */
ResultsPane.prototype.addSwingsNoSwings = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.summary,
    "leftLabel":"Swings",
    "rightLabel":"No Swing",
    "styles":{
      "active":{
        "fill":"#666",
      }
    },
    "size":{
      "width":pane.styles.width
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightSwings(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};

/* jshint esversion:6 */
ResultsPane.prototype.addTotalStrikes = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.summary,
    "leftLabel":"Total Strikes",
    "styles":{
      "active":{
        "fill":d3.schemeCategory10[1]
      }
    },
    "size":{
      "width":pane.styles.width
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightTotalStrikes(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};

/* jshint esversion:6 */
ResultsPane.prototype.addTriples = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.battedBallResults,
    "leftLabel":"Triples",
    "size":{
      "width":pane.styles.width
    },
    "styles":{
      "active":{
        "fill":d3.schemeCategory10[2]
      }
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightTriples(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }
  });

  return bar;
};

/* jshint esversion:6 */
ResultsPane.prototype.addWhiffs = function() {
  const pane = this;

  let bar = new Minibar({
    "where":pane.groups.summary,
    "leftLabel":"Swinging Strikes",
    "size":{
      "width":pane.styles.width
    },
    "styles":{
      "active":{
        "fill":d3.schemeCategory10[1]
      }
    },
    "callbacks":{
      "mouseover":function() { pane.parent.highlightSwingingStrikes(); },
      "mouseout":function() { pane.parent.clearHighlights(); }
    }

  });

  return bar;
};
