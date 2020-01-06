TimelineCompany.prototype.addGroup = function() {
  const company = this;

  const group = company.where
    .append("g")
    .datum(company.data);

  return group;
}
