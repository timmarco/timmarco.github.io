/* jshint esversion:6 */
NumberlineReference.prototype.defineLabels = function(type) {
  const chart = this;
  let labels = {};

  if(type == "worse-better") {
    labels.left = "&larr; Worse";
    labels.right = "Better &rarr;";
  }

  if(type == "never-always") {
    labels.left = "Never";
    labels.right = "Always";
  }

  if(type =="less-more") {
    labels.left = "Less";
    labels.right = "More";
  }

  return labels;
};
