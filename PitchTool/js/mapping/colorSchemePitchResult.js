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
