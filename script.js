const h3 = document.createElement("h3");
h3.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h3);

var svg = d3.select("body") //create Svg element
   .append("svg")
   .attr("height",320 )
   .attr("width", 400)
   .style("border", "solid 8px red");

svg.append("circle") //Drawing circle
   .attr("cx", 150)
   .attr("cy", 150)
   .attr("r", 100)
   .attr("fill", "#FF96C5") // #FF96C5 is Spring green color
  
   var svg = d3.select("body") //create Svg element
   .append("svg")
   .attr("height",320 )
   .attr("width", 400)
   .style("border", "solid 8px red");

svg.append("rect") //Draw rectangle
   .attr("x", 50)
   .attr("y", 50)
   .attr("height", 100)
   .attr("width", 150)
   .attr("fill", "#00A5E3")
   .transition() // line 13 and 14 will be explain in detail in next lesson
   .duration(3000)
   .attr("transform","translate(150,150)");
  
  