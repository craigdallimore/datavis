// Pie Chart
// ----------------------------------------------------------------------------

define([ 'app/directives', 'd3' ], function(directives, d3) {

  directives.directive('pieChart', function() {

    console.log('directive in place');

    return {

      restrict : 'EA',
      replace  : true,

      scope    : { pieData: '=' },

      link : function(scope, el, attrs) {

        var data = scope.pieData;

        var color = d3.scale.category20c();

        var vis = d3.select(el[0])
                    .append('svg:svg')
                    .data([data])
                      .attr('width', 300)
                      .attr('height', 300)
                    .append('svg:g')
                      .attr('transform', 'translate(100, 100)');

        var arc = d3.svg.arc().outerRadius(100);

        var pie = d3.layout.pie()
                    .value(function(d) { return d; });

        var arcs = vis.selectAll('g.slice')
                      .data(pie)
                      .enter()
                        .append('svg:g')
                          .attr('class', 'slice');

        arcs.append('svg:path')
            .attr('fill', function(d, i) { return color(i); })
            .attr('d', arc);


      }

    };

  });

});
