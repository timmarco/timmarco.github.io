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
