const canvas = d3.select(".canvas");

const svg = canvas.append('svg')
    .attr('height', 600)
    .attr('width', 600);

svg.append('rect')
    .attr('height', 100)
    .attr('width', 200)
    .attr('x', 20)
    .attr('y', 20)
    .attr('fill', 'blue');
    
svg.append('circle')
    .attr('cx', 300)
    .attr('cy', 70)
    .attr('r', 50)
    .attr('fill', 'red');
    
svg.append('line')
    .attr('x1', 370)
    .attr('x2', 400)
    .attr('y1', 20)
    .attr('y2', 120)
    .attr('stroke', 'green')    
    .attr('stroke-width', 3);