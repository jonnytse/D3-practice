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






// const data = [
//     {width: 200, height: 100, fill: 'purple'},
//     {width: 100, height: 60, fill: 'pink'},
//     {width: 50, height: 30, fill: 'red'}    
// ];

// const svg = d3.select('svg');

// //Joins aka attach data to all rects
// const rects = svg.selectAll('rect')
//     .data(data);

// //Add attrs to rects already in the DOM
// rects.attr('width', (d, i, n) => d.width)
// .attr('height', d => d.height)
// .attr('fill', d => d.fill);

// //Appends the enter selection i.e. additional rects not yet created, to DOM
// rects.enter()
//     .append('rect')
//     .attr('width', (d, i, n) => d.width)
//     .attr('height', d => d.height)
//     .attr('fill', d => d.fill);



//select svg container first
const svg = d3.select('svg');

d3.json('planets.json').then(data => {
    const circs = svg.selectAll('circle')
    .data(data);

    //add attrs to circs already in DOM
    circs.attr('cy', 200)
    .attr('cx', d => d.distance)
    .attr('r', d => d.radius)
    .attr('fill', d => d.fill);

    //append the enter selection to the DOM
    circs.enter()
        .append('circle')
        .attr('cy', 200)
        .attr('cx', d => d.distance)
        .attr('r', d => d.radius)
        .attr('fill', d => d.fill);
})