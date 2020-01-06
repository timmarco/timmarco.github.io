Headline.prototype.addDefs = function() {
  const headline = this;

  const defs = headline.svg
    .append("defs");

  return defs;
}
