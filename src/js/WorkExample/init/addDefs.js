WorkExample.prototype.addDefs = function() {
  const example = this;
  const defs = example.svg
    .append("defs");
  return defs;
}