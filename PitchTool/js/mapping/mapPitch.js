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
