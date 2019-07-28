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
      "size":{"width":476,"height":376}
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
      "size":{"width":450,"height":350}
    },
    {
      "name":"Dylan Cease",
      "imagePath":"cease1/",
      "player_image":"thumbnails/cease.png",
      "description":"Near-HBP of Jeimer Candelario",
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
      "size":{"width":350,"height":400}
    },
    {
      "name":"Dylan Cease",
      "imagePath":"cease2/",
      "player_image":"thumbnails/cease.png",
      "description":"Single allowed to Harold Castro",
      "opponent_player":"Harold Castro",
      "opponent_team":"thumbnails/det.gif",
      "opponent_team_name":"Tigers",
      "result":"ball",
      "count":{"balls":0,"strikes":1},
      "results":"Single",
      "inning":1,
      "date":"7/3/2019",
      "against":"Chrsitin Stewart",

      "json":"cease2.json",
      "path":"cease2",
      "size":{"width":350,"height":400}
    },
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
      "size":{"width":350,"height":400}
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
      "size":{"width":350,"height":400}
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
      "size":{"width":350,"height":400}
    }
  ];
}

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
