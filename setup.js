var g_height = 800
var g_width = 800
var g_padding = 50
var g_center = { x : g_width/2, y : g_height/2}


var svgContainer = d3.select("body")
.append("svg")
.attr("width", g_width)
.attr("height", g_height)
.style("background-color", "black");

var test = [
    {x: 5, y: 5},
    {x:50, y: 50}
]

var xScale = d3.scaleLinear().domain([100, -100]).range([g_width - g_padding, g_padding]);
var yScale = d3.scaleLinear().domain([-100, 100]).range([g_height - g_padding, g_padding]);

// define the y axis
var yAxis = d3.axisLeft(yScale);

// define the x axis
var xAxis = d3.axisBottom(xScale);

var xAxisPlot = svgContainer.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + (g_height/2) + ")")
        .call(xAxis.tickSize(-g_height, 0, 0));

var yAxisPlot = svgContainer.append("g")
    .attr("class", "axis axis--y")
    .attr("transform", "translate("+ (g_width/2) +",0)")
    .call(yAxis.tickSize(-g_width, 0, 0));


xAxisPlot.selectAll(".tick line")
    .attr("y1", (g_width - (2*g_padding))/2 * -1)
    .attr("y2", (g_width - (2*g_padding))/2 * 1);

yAxisPlot.selectAll(".tick line")
    .attr("x1", (g_width - (2*g_padding))/2 * -1)
    .attr("x2", (g_width - (2*g_padding))/2 * 1);

var dictionary = {
    "a" : ["b", "t", "n"],
    "b" : ["c", "e"],
    "c" : ["d"],
    "d" : ["e", "g"],
    "e" : ["f"],
    "f" : ["g","i"],
    "g" :["h"],
    "h" :["i", "k"],
    "i" :["j"],
    "j":["k","m"],
    "k":["l"],
    "l":["q","m"],
    "m":["n"],
    "n":["o"],
    "o": ["ab", "p"],
    "p":["aa","q"],
    "q":["r"],
    "r":["c", "s"],
    "s":["v", "t"],
    "t":["u"],
    "u":["x", "v"],
    "v":["w"],
    "w":["z", "x"],
    "x":["y"],
    "y":["z", "ab"],
    "z":["aa"],
    "aa": ["ab"],
    "ac":["ad"],
    "ad": ["ae", "ag"],
    "ae": ["af"],
    "af": ["ag"],
    "ah": ["ai","aj", "ak"],
    "aj": ["ai","ak"],
    "ai": ["ak"]
}

var lefteye = [
    {key: "a",	x:-32.55081498, y: -3.55271000},
    {key: "aa",	x:-9.588441229, y: -36.7872856},
    {key: "ab",	x:-10.98659704, y: -51.89317583},
    {key: "ac",	x:-48.61790592, y: -32.52209307},
    {key: "ad",	x:-34.48139073, y: -23.991708},
    {key: "ae",	x:-27.41313314, y: -19.72651547},
    {key: "af",	x:-20.29352624, y: -24.70257343},
    {key: "ag",	x:-27.36178383, y: -28.96776596},
    {key: "ah",	x:17.21399881,	y:  46.98820441},
    {key: "ai",	x:25.69590793,	y:  52.10643546},
    {key: "aj",	x:34.23943621,	y:  46.13516591},
    {key: "ak",	x:25.7575271,	y: 	41.01693487},
    {key: "b",	x:-26.95819173, y: 60.4235609},
    {key: "c",	x:-41.09470692, y: 51.89317583},
    {key: "d",	x:-19.73588621, y: 36.96500196},
    {key: "e",	x:-5.599371026, y: 45.49538703},
    {key: "f",	x:-8.395682648, y: 15.28360658},
    {key: "g",	x:-22.53219784, y: 6.753221512},
    {key: "h",	x:-1.173377131, y: -8.174952357},
    {key: "i",	x:12.96313806,	y:  0.355432711},
    {key: "j",	x:18.5557613,	y:  60.77899361},
    {key: "k",	x:4.419246113,	y:  52.24860854},
    {key: "l",	x:32.89767372,	y:  32.34437672},
    {key: "m",	x:47.03418891,	y:  40.87476178},
    {key: "n",	x:38.64525404,	y:  -49.76057956},
    {key: "o",	x:10.37222367,	y:  -66.8213497},
    {key: "p",	x:11.77037948,	y:  -51.71545947},
    {key: "q",	x:25.90689467,	y:  -43.18507441},
    {key: "r",	x:-45.28917435, y: 6.575505156},
    {key: "s",	x:-73.56220473, y: -10.48526498},
    {key: "t",	x:-74.96036054, y: -25.5911552},
    {key: "u",	x:-67.84075364, y: -30.56721316},
    {key: "v",	x:-66.44259783, y: -15.46132294},
    {key: "w",	x:-80.57911302, y: -23.991708},
    {key: "x",	x:-81.97726883, y: -39.09759823},
    {key: "y",	x:-39.25962742, y: -68.95394596},
    {key: "z",	x:-37.86147161, y: -53.84805574},
]

var righteye = [
    {key: "a",	x:32.55081498,	y:	-3.55271000},
    {key: "aa",	x:39.95870532,	y:	-36.7872856 },
    {key: "ab",	x:41.35686113,	y:	-51.89317583},
    {key: "ac",	x:1.97785749,	y: -32.52209307 },
    {key: "ad",	x:18.2116064,	y: -23.991708   },
    {key: "ae",	x:26.32848085,	y:	-19.72651547},
    {key: "af",	x:32.22470142,	y:	-24.70257343},
    {key: "ag",	x:24.10782696,	y:	-28.96776596},
    {key: "ah",	x:54.80691318,	y:	46.98820441 },
    {key: "ai",	x:64.54716253,	y: 52.10643546	},
    {key: "aj",	x:71.62262721,	y: 46.13516591  },
    {key: "ak",	x:61.88237786,	y: 41.01693487  },
    {key: "b",	x:26.95819173,	y: 60.4235609   },
    {key: "c",	x:10.72444283,	y: 51.89317583  },
    {key: "d",	x:28.41310453,	y: 36.96500196  },
    {key: "e",	x:44.64685343,	y: 45.49538703  },
    {key: "f",	x:47.44316505,	y: 15.28360658  },
    {key: "g",	x:31.20941615,	y: 6.753221512  },
    {key: "h",	x:48.89807785,	y: -8.174952357 },
    {key: "i",	x:65.13182676,	y: 0.355432711  },
    {key: "j",	x:59.53920351,	y: 60.77899361  },
    {key: "k",	x:43.30545461,	y: 52.24860854  },
    {key: "l",	x:66.89033688,	y: 32.34437672  },
    {key: "m",	x:83.12408578,	y: 40.87476178  },
    {key: "n",	x:91.51302065,	y: -49.76057956 },
    {key: "o",	x:59.04552284,	y: -66.8213497  },
    {key: "p",	x:57.64736703,	y: -51.71545947 },
    {key: "q",	x:73.88111593,	y: -43.18507441 },
    {key: "r",	x:14.91891026,	y: 6.575505156  },
    {key: "s",	x:-17.54858755,	y: -10.48526498 },
    {key: "t",	x:-16.15043174,	y: -25.5911552  },
    {key: "u",	x:-10.25421117,	y: -30.56721316 },
    {key: "v",	x:-11.65236699,	y: -15.46132294 },
    {key: "w",	x:-27.88611589,	y: -23.991708   },
    {key: "x",	x:-26.48796008,	y: -39.09759823 },
    {key: "y",	x:8.889363324,	y: -68.95394596 },
    {key: "z",	x:7.491207513,	y: -53.84805574 },
]


function drawLine(p0, p1, color){
d3.select("svg").append("line")
            .attr("x1", xScale(p0.x))
            .attr("y1", yScale(p0.y))
            .attr("x2", xScale(p1.x))
            .attr("y2", yScale(p1.y))
            .attr("stroke-width", 2)
            .attr("stroke", color);
}



/* 
for (var index = 0; index < array.length; index++) {
    if(index != array.length-1){
        drawLine(array[index], array[index+1])
    }
}
*/
function drawEyePerspective(array, color){
    for (var key in dictionary) {
        if (dictionary.hasOwnProperty(key)) {
            for (var index = 0; index < dictionary[key].length; index++) {
                console.log(key + " -> " + dictionary[key]);
                drawLine(_.findWhere(array,{key: key}), _.findWhere(array,{key: dictionary[key][index]}), color)
            }
        }
    }
}

drawEyePerspective(lefteye, "rgb(255, 0, 0)")
drawEyePerspective(righteye, "rgb(0, 255, 255)")

