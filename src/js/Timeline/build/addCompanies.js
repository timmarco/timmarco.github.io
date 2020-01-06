Timeline.prototype.addCompanies = function() {
  const timeline = this;
  const companies = [];

  timeline.data.forEach((company) => {
    companies.push(
      new TimelineCompany({
        "where":timeline.layers.companies,
        "parent":timeline,
        "company":company
      })
    );
  });

  return companies;
}
