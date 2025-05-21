// Advanced Interactive Growth Chart for Abdul Fathah's Portfolio - Apple Style
document.addEventListener('DOMContentLoaded', function() {
    // Check if the chart container exists
    const chartContainer = document.getElementById('growth-chart');
    if (!chartContainer) return;

    // Chart configuration
    const config = {
        // Data points representing performance over time
        // Format: [month_number, performance_value]
        beforeHire: [
            [1, 15], [2, 18], [3, 22], [4, 20], [5, 25], 
            [6, 28], [7, 30], [8, 32], [9, 35], [10, 38], 
            [11, 40], [12, 45]
        ],
        afterHire: [
            [13, 55], [14, 65], [15, 70], [16, 85], [17, 95], 
            [18, 90], [19, 105], [20, 115], [21, 125], [22, 140], 
            [23, 135], [24, 150], [25, 165], [26, 160], [27, 175], 
            [28, 190], [29, 205], [30, 200], [31, 220], [32, 235], 
            [33, 250], [34, 265], [35, 280], [36, 300]
        ],
        // Labels for the timeline markers
        labels: {
            beforeHire: "Before Abdul",
            hired: "Abdul Hired",
            year1: "After 1 Year",
            year2: "After 2 Years"
        },
        // Colors for the chart - Apple-inspired
        colors: {
            line: "#0066CC",
            beforeHire: "#86868b",
            afterHire: "#0066CC",
            markers: "#1D1D1F",
            markerText: "#FFFFFF",
            grid: "#E5E5E7"
        }
    };

    // Create the SVG element with Apple-inspired styling
    const svg = d3.select('#growth-chart')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', '0 0 1000 500')
        .attr('preserveAspectRatio', 'xMidYMid meet')
        .style('font-family', '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif');

    // Create a group for the chart elements
    const chart = svg.append('g')
        .attr('transform', 'translate(50, 50)');

    // Combine data for scales
    const allData = [...config.beforeHire, ...config.afterHire];
    
    // Create scales
    const xScale = d3.scaleLinear()
        .domain([1, 36])
        .range([0, 900]);
    
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(allData, d => d[1]) * 1.1])
        .range([400, 0]);

    // Create axes with Apple-inspired styling
    const xAxis = d3.axisBottom(xScale)
        .tickValues([1, 12, 24, 36])
        .tickFormat(d => {
            if (d === 1) return 'Start';
            if (d === 12) return 'Time →';
            if (d === 24) return '';
            if (d === 36) return '';
            return '';
        });
    
    // Create a custom y-axis with only an arrow and no numbers
    const yAxis = d3.axisLeft(yScale)
        .tickValues([])
        .tickSize(0);

    // Add axes to chart with refined styling
    chart.append('g')
        .attr('transform', `translate(0, 400)`)
        .attr('class', 'x-axis')
        .call(xAxis)
        .selectAll('text')
        .style('font-size', '14px')
        .style('fill', '#86868b');
    
    // Remove domain lines from x-axis
    chart.select('.x-axis path.domain')
        .attr('stroke', 'none');
    
    // Remove all tick lines from x-axis
    chart.selectAll('.x-axis .tick line')
        .attr('stroke', 'none');
    
    // Add y-axis arrow
    chart.append('g')
        .attr('class', 'y-axis')
        .call(yAxis);
    
    // Add "Growth" text and arrow for y-axis
    chart.append('text')
        .attr('x', -40)
        .attr('y', 150)
        .attr('transform', 'rotate(-90, -40, 150)')
        .text('Growth →')
        .style('font-size', '14px')
        .style('fill', '#86868b')
        .style('text-anchor', 'middle');

    // Add grid lines with Apple-inspired subtle styling
    chart.append('g')
        .attr('class', 'grid')
        .selectAll('line')
        .data(yScale.ticks(5))
        .enter()
        .append('line')
        .attr('x1', 0)
        .attr('x2', 900)
        .attr('y1', d => yScale(d))
        .attr('y2', d => yScale(d))
        .attr('stroke', config.colors.grid)
        .attr('stroke-width', '1px')
        .attr('stroke-dasharray', '3,3');

    // Create line generator with smooth curves
    const line = d3.line()
        .x(d => xScale(d[0]))
        .y(d => yScale(d[1]))
        .curve(d3.curveCatmullRom.alpha(0.5));

    // Add gradient for the line
    const gradient = svg.append('defs')
        .append('linearGradient')
        .attr('id', 'line-gradient')
        .attr('gradientUnits', 'userSpaceOnUse')
        .attr('x1', 0)
        .attr('y1', yScale(0))
        .attr('x2', 0)
        .attr('y2', yScale(300));
        
    gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#0066CC')
        .attr('stop-opacity', 0.7);
        
    gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', '#0066CC');

    // Add area under the curve
    const area = d3.area()
        .x(d => xScale(d[0]))
        .y0(400)
        .y1(d => yScale(d[1]))
        .curve(d3.curveCatmullRom.alpha(0.5));
        
    const areaPath = chart.append('path')
        .datum([])
        .attr('fill', 'url(#line-gradient)')
        .attr('fill-opacity', 0.1)
        .attr('d', area)
        .attr('opacity', 0);

    // Add the line path (initially hidden)
    const path = chart.append('path')
        .datum(config.beforeHire)
        .attr('fill', 'none')
        .attr('stroke', 'url(#line-gradient)')
        .attr('stroke-width', 3)
        .attr('d', line)
        .attr('opacity', 0);

    // Add markers for key events with refined styling - adjusted positions
    const markers = [
        { x: 6, y: config.beforeHire[5][1], label: config.labels.beforeHire }, // Moved left
        { x: 13, y: config.afterHire[0][1], label: config.labels.hired },
        { x: 24, y: config.afterHire[11][1], label: config.labels.year1 },
        { x: 36, y: config.afterHire[23][1], label: config.labels.year2 }
    ];

    // Add marker groups
    const markerGroups = chart.selectAll('.marker')
        .data(markers)
        .enter()
        .append('g')
        .attr('class', 'marker')
        .attr('transform', d => `translate(${xScale(d.x)}, ${yScale(d.y)})`)
        .attr('opacity', 0);

    // Add marker rectangles with rounded corners (Apple style)
    markerGroups.append('rect')
        .attr('x', -60)
        .attr('y', -40)
        .attr('width', 120)
        .attr('height', 40)
        .attr('fill', config.colors.markers)
        .attr('rx', 8)
        .attr('ry', 8)
        .style('filter', 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))');

    // Add marker text with Apple font styling
    markerGroups.append('text')
        .attr('x', 0)
        .attr('y', -10)
        .attr('text-anchor', 'middle')
        .attr('fill', config.colors.markerText)
        .attr('font-size', '14px')
        .attr('font-weight', '500')
        .text(d => d.label);

    // Add vertical lines from markers with refined styling
    markerGroups.append('line')
        .attr('x1', 0)
        .attr('x2', 0)
        .attr('y1', 0)
        .attr('y2', 400 - yScale(0))
        .attr('stroke', config.colors.markers)
        .attr('stroke-width', 1.5)
        .attr('stroke-dasharray', '4,4');

    // Add legend
    const legendData = [
        { label: config.labels.beforeHire, color: config.colors.beforeHire },
        { label: "After Abdul", color: config.colors.afterHire }
    ];

    const legend = svg.append('g')
        .attr('class', 'legend')
        .attr('transform', 'translate(400, 20)'); // Initial position, will adjust

    const legendItems = legend.selectAll('.legend-item')
        .data(legendData)
        .enter()
        .append('g')
        .attr('class', 'legend-item')
        .attr('transform', (d, i) => `translate(${i * 120}, 0)`); // Arrange horizontally

    legendItems.append('rect')
        .attr('x', 0)
        .attr('width', 18)
        .attr('height', 18)
        .attr('fill', d => d.color)
        .attr('rx', 4)
        .attr('ry', 4);

    legendItems.append('text')
        .attr('x', 24)
        .attr('y', 9)
        .attr('dy', '.35em')
        .style('font-size', '14px')
        .style('fill', '#1D1D1F') // Use a darker text color for readability
        .text(d => d.label);

    // Center the legend horizontally
    const legendWidth = legend.node().getBBox().width;
    legend.attr('transform', `translate(${(1000 - legendWidth) / 2}, 20)`);

    // Animation function with enhanced Apple-style animations
    function animateChart() {
        // First show the chart with a fade in
        path.transition()
            .duration(800)
            .ease(d3.easeCubicOut)
            .attr('opacity', 1);
            
        areaPath.transition()
            .duration(800)
            .ease(d3.easeCubicOut)
            .attr('opacity', 1);

        // Animate the line drawing with Apple-style smooth animation
        const totalLength = path.node().getTotalLength();
        path.attr('stroke-dasharray', totalLength + ' ' + totalLength)
            .attr('stroke-dashoffset', totalLength)
            .transition()
            .duration(2000)
            .ease(d3.easeQuadInOut)
            .attr('stroke-dashoffset', 0)
            .on('end', () => {
                // Show the first marker with Apple-style animation
                markerGroups.filter((d, i) => i === 0)
                    .transition()
                    .duration(400)
                    .ease(d3.easeBackOut.overshoot(1.5))
                    .attr('opacity', 1)
                    .on('end', () => {
                        // After a delay, continue with the rest of the animation
                        setTimeout(() => {
                            // Update the path with all data
                            const allDataPoints = [...config.beforeHire, ...config.afterHire];
                            
                            path.datum(allDataPoints)
                                .transition()
                                .duration(2500)
                                .ease(d3.easeQuadInOut)
                                .attr('d', line);
                                
                            areaPath.datum(allDataPoints)
                                .transition()
                                .duration(2500)
                                .ease(d3.easeQuadInOut)
                                .attr('d', area)
                                .on('end', () => {
                                    // Show the remaining markers with staggered animation
                                    markerGroups.filter((d, i) => i > 0)
                                        .transition()
                                        .delay((d, i) => i * 400)
                                        .duration(400)
                                        .ease(d3.easeBackOut.overshoot(1.5))
                                        .attr('opacity', 1)
                                        .on('end', (d, i, nodes) => {
                                            // When the last marker is shown, show the data points
                                            if (i === nodes.length - 1) {
                                                showDataPoints();
                                            }
                                        });
                                });
                        }, 800);
                    });
            });
    }

    // Add interaction to restart animation with Apple-style feedback
    svg.on('click', () => {
        // Reset the chart
        path.interrupt();
        areaPath.interrupt();
        markerGroups.interrupt();
        chart.selectAll('.data-point').interrupt();
        
        path.attr('opacity', 0)
            .datum(config.beforeHire);
            
        areaPath.attr('opacity', 0)
            .datum(config.beforeHire);
            
        markerGroups.attr('opacity', 0);
        
        chart.selectAll('.data-point')
            .attr('opacity', 0);
        
        // Restart animation with slight delay for better UX
        setTimeout(animateChart, 300);
    });

    // Add tooltip for data points with Apple-style design
    const tooltip = d3.select('#growth-chart')
        .append('div')
        .attr('class', 'chart-tooltip')
        .style('opacity', 0)
        .style('position', 'absolute')
        .style('background-color', 'rgba(255, 255, 255, 0.95)')
        .style('border-radius', '8px')
        .style('padding', '12px 16px')
        .style('pointer-events', 'none')
        .style('font-size', '14px')
        .style('box-shadow', '0 4px 20px rgba(0,0,0,0.12)')
        .style('backdrop-filter', 'blur(10px)')
        .style('transition', 'opacity 0.2s ease, transform 0.2s ease')
        .style('transform', 'translateY(10px)')
        .style('z-index', '1000');

    // Add interactive data points with Apple-style interaction
    const allPoints = [...config.beforeHire, ...config.afterHire];
    
    chart.selectAll('.data-point')
        .data(allPoints)
        .enter()
        .append('circle')
        .attr('class', 'data-point')
        .attr('cx', d => xScale(d[0]))
        .attr('cy', d => yScale(d[1]))
        .attr('r', 5)
        .attr('fill', d => d[0] <= 12 ? config.colors.beforeHire : config.colors.afterHire)
        .attr('opacity', 0)
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .style('cursor', 'pointer')
        .style('transition', 'r 0.2s ease')
        .on('mouseover', function(event, d) {
            d3.select(this)
                .transition()
                .duration(200)
                .attr('r', 8);
                
            const month = d[0] % 12 === 0 ? 12 : d[0] % 12;
            const year = Math.ceil(d[0] / 12);
            const period = d[0] <= 12 ? 'Before Abdul' : 'After Abdul';
            const improvement = d[0] > 12 ? 
                Math.round((d[1] - config.beforeHire[11][1]) / config.beforeHire[11][1] * 100) : 0;
            
            tooltip.transition()
                .duration(200)
                .style('opacity', 0.98)
                .style('transform', 'translateY(0)');
                
            tooltip.html(`
                <div style="margin-bottom:8px;font-weight:600;color:#1d1d1f;">Month ${month}, Year ${year}</div>
                <div style="margin-bottom:4px;color:#86868b;">${period}</div>
                <div style="font-weight:500;color:#0066CC;">Performance: ${d[1]}%</div>
                ${d[0] > 12 ? `<div style="margin-top:4px;font-weight:500;color:#0066CC;">Improvement: +${improvement}%</div>` : ''}
            `)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 28) + 'px');
        })
        .on('mouseout', function() {
            d3.select(this)
                .transition()
                .duration(200)
                .attr('r', 5);
                
            tooltip.transition()
                .duration(300)
                .style('opacity', 0)
                .style('transform', 'translateY(10px)');
        });

    // Show data points after line animation with Apple-style staggered reveal
    function showDataPoints() {
        chart.selectAll('.data-point')
            .transition()
            .delay((d, i) => i * 30)
            .duration(300)
            .attr('opacity', 0.9);
    }

    // Start the animation when the element is in view with IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateChart();
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(chartContainer);
});
