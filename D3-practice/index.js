// const canvas = d3.select(".canvas");

// const svg = canvas.append('svg')
//     .attr('height', 600)
//     .attr('width', 600);

// svg.append('rect')
//     .attr('height', 100)
//     .attr('width', 200) 
//     .attr('x', 20)
//     .attr('y', 20)
//     .attr('fill', 'blue');
    
// svg.append('circle')
//     .attr('cx', 300)
//     .attr('cy', 70)
//     .attr('r', 50)
//     .attr('fill', 'red');
    
// svg.append('line')
//     .attr('x1', 370)
//     .attr('x2', 400)
//     .attr('y1', 20)
//     .attr('y2', 120)
//     .attr('stroke', 'green')    
//     .attr('stroke-width', 3);

// svg.append('text')
//     .attr('x', 20)
//     .attr('y', 200)
//     .attr('fill', 'grey')
//     .text('hello ninjas')
//     .style('font-family', 'arial');    



const data = [
    {width: 200, height: 100, fill: 'purple'},
    {width: 100, height: 60, fill: 'pink'},
    {width: 50, height: 30, fill: 'red'}    
];

const svg = d3.select('svg');

const rect = svg.selectAll('rect')
    .data(data)
    .attr('width', (d, i, n) => d.width)
    .attr('height', d => d.height)
    .attr('fill', d => d.fill);