/* jshint esversion:6 */
ModelerKey.prototype.showContractValue = function() {
  const key = this;

  key.contractValue.group
    .attr("display","block");

  key
    .layout();

  return key;
};
