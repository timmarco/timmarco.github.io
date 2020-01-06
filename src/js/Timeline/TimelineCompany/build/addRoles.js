TimelineCompany.prototype.addRoles = function() {
  const company = this;
  const roles = [];

  company.data.roles.forEach((role,index) => {
    roles.push(
      new TimelineRole({
        "role":role,
        "index":index,
        "where":company.roleGroup,
        "parent":company.parent,
        "company":company.data
      })
    );
  });

  return roles;
}
