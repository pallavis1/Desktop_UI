// window.onload = function() {
$(function() {

var options = {
	exportEnabled: true,
	animationEnabled: true,
	title:{
		text: "Accounting"
	},
	legend:{
		horizontalAlign: "right",
		verticalAlign: "center"
	},
	data: [{
		type: "pie",
		showInLegend: true,
		toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
		indexLabel: "{name}",
		legendText: "{name} (#percent%)",
		indexLabelPlacement: "inside",
		dataPoints: [
			{ y: 6566.4, name: "Housing" },
			{ y: 2599.2, name: "Food" },
			{ y: 1231.2, name: "Fun" },
			{ y: 1368, name: "Clothes" },
			{ y: 684, name: "Others"},
			{ y: 1231.2, name: "Utilities" }
		]
	}]
};
$("#chartContainer").CanvasJSChart(options);

})