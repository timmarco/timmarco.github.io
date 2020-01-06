WorkExample.prototype.addFilters = function() {
  const example = this;
  const filters = {};

  const filterElement = example.defs.append("filter")
    .attr("id",example.identifier);

  filters.saturation = filterElement
    .append("feColorMatrix")
    .attr("type","saturate")
    .attr("in","SourceGraphic")
    .attr("values",0.25);

  filters.blur = filterElement
    .append("feGaussianBlur")
    .attr("in","SourceGraphic")
    .attr("stdDeviation",2);

  return filters;
}
