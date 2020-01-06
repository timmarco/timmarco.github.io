function TimelineCompany(options) {
  const company = this;
  init(options);
  return company;

  function init(options) {
    company.parent = options.parent;
    company.where = options.where;
    company.data = options.company;

    company.group = company.addGroup();
    company.toplineGroup = company.addToplineGroup();
    company.companyName = company.addCompanyName();
    company.roleGroup = company.addRoleGroup();
    company.roles = company.addRoles();
    company.body = company.addBody();

  }
}
