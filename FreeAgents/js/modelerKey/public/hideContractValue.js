/* jshint esversion:6 */
ModelerKey.prototype.hideContractValue = function() {
  const key = this;

  key.contractValue.group
    .attr("display","none");

  key
    .layout();

  return key;
};
