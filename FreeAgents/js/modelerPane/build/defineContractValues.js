/* jshint esversion:6 */
ModelerPane.prototype.defineContractValues = function() {
  const pane = this;
  let values = {};
  values.contractLength = 3;
  values.salary = [];
  // TODO: COPY OVER WIN VALUES

  d3.range(0,16).forEach((year) => { values.salary.push(10); });
  values.winValue = [10.5,11.03,11.58,12.16,12.76,13.41,14.07,14.77,15.51,16.29,17.10,17.96,18.857,19.80,20.79,21.83];
  return values;
};
