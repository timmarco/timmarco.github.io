/* jshint esversion:6 */
Modeler.prototype.toggleEditView = function() {
  const modeler = this;

  return function() {

    if(modeler.currentEditView === "salary") {
      modeler.salaryChartGroup.attr("display","none");
      modeler.winChartGroup.attr("display","block");
      modeler.currentEditView = "winValue";

      modeler.salaryButton
        .select("rect")
        .attr("fill","none");

      modeler.salaryButton
        .select("text")
        .attr("fill","black");

      modeler.winValueButton
        .select("text")
        .attr("fill","white");

      modeler.winValueButton
        .select("rect")
        .attr("fill","#ed553b");


    } else {
      modeler.salaryChartGroup.attr("display","block");
      modeler.winChartGroup.attr("display","none");
      modeler.currentEditView = "salary";

      modeler.salaryButton
        .select("rect")
        .attr("fill","#ed553b");

      modeler.salaryButton
        .select("text")
        .attr("fill","white");

      modeler.winValueButton
        .select("text")
        .attr("fill","black");

      modeler.winValueButton
        .select("rect")
        .attr("fill","none");

    }
  }

}
