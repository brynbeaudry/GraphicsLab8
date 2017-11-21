var g_height = 200
var g_width = 200
var g_center = { x : g_width/2, y : g_height/2}


var svgContainer = d3.select("body")
.append("svg")
.attr("width", g_width)
.attr("height", g_height);

var array = [
    {x: 5, y: 5},
    {x:50, y: 50}
]
function drawLine(p0, p1){
//Draw the linep0
$(svgContainer).height/2
p0.x+=g_center.x
p0.y+= g_center.y
p1.x+= g_center.x
p1.y+= g_center.y
d3.select("svg").append("line")
            .attr("x1", p0.x)
            .attr("y1", p0.y)
            .attr("x2", p1.x)
            .attr("y2", p1.y)
            .attr("stroke-width", 2)
            .attr("stroke", "black");
}

for (var index = 0; index < array.length; index++) {
    if(index != array.length-1){
        drawLine(array[index], array[index+1])
    }
}