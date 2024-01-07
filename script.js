window.onload = function () {

var chart = new CanvasJS.Chart("Container-1", {
	animationEnabled: true,
	exportEnabled: true,
	theme: "light1", // "light1", "light2", "dark1", "dark2"
	title:{
		text: "Simple Column Chart with Index Labels"
	},
  	axisY: {
      includeZero: true
    },
	data: [{
		type: "column", //change type to bar, line, area, pie, etc
		//indexLabel: "{y}", //Shows y value on all Data Points
		indexLabelFontColor: "#5A5757",
      	indexLabelFontSize: 16,
		indexLabelPlacement: "outside",
		dataPoints: [
			{ x: 10, y: 71 },
			{ x: 20, y: 55 },
			{ x: 30, y: 50 },
			{ x: 40, y: 65 },
			{ x: 50, y: 92, indexLabel: "\u2605 Highest" },
			{ x: 60, y: 68 },
			{ x: 70, y: 38 },
			{ x: 80, y: 71 },
			{ x: 90, y: 54 },
			{ x: 100, y: 60 },
			{ x: 110, y: 36 },
			{ x: 120, y: 49 },
			{ x: 130, y: 21, indexLabel: "\u2691 Lowest" }
		]
	}]
});
chart.render();




var lineChart = new CanvasJS.Chart("Container-2",
    {
      animationEnabled: true,
	    exportEnabled: true,
      title:{
      text: "Earthquakes - per month"
      },
       data: [
      {
        type: "line",

        dataPoints: [
        { x: new Date(2012, 0, 1), y: 450 },
        { x: new Date(2012, 1, 1), y: 414 },
        { x: new Date(2012, 2, 1), y: 520 },
        { x: new Date(2012, 3, 1), y: 460 },
        { x: new Date(2012, 4, 1), y: 450 },
        { x: new Date(2012, 5, 1), y: 500 },
        { x: new Date(2012, 6, 1), y: 480 },
        { x: new Date(2012, 7, 1), y: 480 },
        { x: new Date(2012, 8, 1), y: 410 },
        { x: new Date(2012, 9, 1), y: 500 },
        { x: new Date(2012, 10, 1), y: 480 },
        { x: new Date(2012, 11, 1), y: 510 }
        ]
      }
      ]
    });
    lineChart.render();



    var stepAreaChart= new CanvasJS.Chart("Container-3", {
        animationEnabled: true,
	    exportEnabled: true,
        title:{
          text: "StepArea Chart Demo"
        },
  
        data: [
        {
         type: "stepArea",  
        
         dataPoints: [
  
         { x: new Date(2008,2), y: 12.00 },
         { x: new Date(2008,3), y: 18.50 },
         { x: new Date(2008,4), y: 15.00 },
         { x: new Date(2008,5), y: 11.50 },
         { x: new Date(2008,6), y: 16.75 },
         { x: new Date(2008,7), y: 19.30 },
         { x: new Date(2008,8), y: 22.80 },
         { x: new Date(2008,9), y: 27.50 },
         { x: new Date(2008,10), y: 22.75 },
         { x: new Date(2008,11), y: 19.30 },
         { x: new Date(2008,12), y: 16.80 },
         { x: new Date(2008,13), y: 14.50 }
         ]
       }
       ]
     });
    stepAreaChart.render();



    var pieChart = new CanvasJS.Chart("Container-4",
	{
        animationEnabled: true,
        exportEnabled: true,
		title:{
			text: "Gaming Consoles Sold in 2012"
		},
		legend: {
			maxWidth: 350,
			itemWidth: 120
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			legendText: "{indexLabel}",
			dataPoints: [
				{ y: 4181563, indexLabel: "PlayStation 3" },
				{ y: 2175498, indexLabel: "Wii" },
				{ y: 3125844, indexLabel: "Xbox 360" },
				{ y: 1176121, indexLabel: "Nintendo DS"},
				{ y: 1727161, indexLabel: "PSP" },
				{ y: 4303364, indexLabel: "Nintendo 3DS"},
				{ y: 1717786, indexLabel: "PS Vita"}
			]
		}
		]
	});
	pieChart.render();

}
