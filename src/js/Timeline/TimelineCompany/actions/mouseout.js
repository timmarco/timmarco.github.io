TimelineCompany.prototype.mouseout = function() {
  const company = this;
  return () => {
    company.backgroundRect.attr("fill","#aaa");
  }

}
