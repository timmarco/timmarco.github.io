/* jshint esversion:6 */
NumberlineReference.prototype.defineLabels = function(type) {
  const chart = this;
  let labels = {};

  if(type == "fewer-wins-more-wins") {
    labels.left = "&larr; Fewer Wins";
    labels.right = "More Wins &rarr;"
  }

  if(type == "fewer-runs-more-runs") {
    labels.left = "&larr; Fewer Runs";
    labels.right = "More Runs &rarr;"
  }

  if(type == "fewer-hits-more-hits") {
    labels.left = "&larr; Better";
    labels.right = "Worse &rarr;"
  }


  if(type == "less-production-more-production") {
    labels.left = "&larr; Less Production";
    labels.right = "More Production &rarr;";
  }

  if(type == "more-outs-fewer-outs") {
    labels.left = "&larr; More Outs";
    labels.right = "Fewer Outs &rarr;";
  }

  if(type == "less-power-more-power") {
    labels.left = "&larr; Less Power";
    labels.right = "More Power &rarr;"
  }

  if(type == "worst-best") {
    labels.left = "&larr; Worse";
    labels.right = "Better &rarr;";
  }

  if(type == "slower-faster-hits") {
    labels.left = "&larr;Softer Hits";
    labels.right = "Harder Hits&rarr;";
  }

  if(type =="lower-higher") {
    labels.left = "&larr;Lower";
    labels.right = "Higher &rarr;";
  }

  if(type =="groundballs-flyballs") {
    labels.left = "&larr;More Fly Balls";
    labels.right = "More Ground Balls &rarr;";
  }

  if(type =="never-always") {
    labels.left = "&bull; Never";
    labels.right = "Always &bull;";
  }

  if(type =="strikeouts-walks") {
    labels.left = "&larr; More Strikeouts";
    labels.right = "More Walks &rarr;";
  }

  return labels;
};
