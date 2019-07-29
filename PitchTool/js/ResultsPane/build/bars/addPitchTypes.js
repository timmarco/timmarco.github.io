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
