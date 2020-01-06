function TimelineRole(options) {
  const role = this;
  init(options);
  return role;

  function init(options) {
    role.where = options.where;
    role.data = options.role;
    role.index = options.index;
    role.parent = options.parent;
    role.company = options.company;

    role.group = role.addGroup();
    role.backgroundRect = role.addBackgroundRect();
    role.name = role.addName();
    role.dates = role.addDates();

  }
}
