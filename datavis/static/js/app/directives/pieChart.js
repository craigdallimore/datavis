// Pie Chart
// ----------------------------------------------------------------------------

define([ 'directives', 'd3' ], function(directives, d3) {

  directives.directive('pieChart', function() {

    var radius = 100,
      diameter = radius * 2,
      color    = d3.scale.category20c();

    return {

      restrict : 'EA',
      replace  : true,

      scope    : { pieData: '=' },

      link : function(scope, el, attrs) {

        var data = scope.pieData,

          vis = d3.select(el[0])
                  .append('svg:svg')
                  .data([data])
                    .attr('width', diameter)
                    .attr('height', diameter)
                  .append('svg:g')
                    .attr('transform', 'translate(' + radius  + ', ' + radius + ')');

        scope.$watch('pieData', function(newVal, oldVal) {

          // clear elements
          vis.selectAll('*').remove();

          if ( !newVal) { return; }

          var arc = d3.svg.arc().outerRadius(radius);

          var pie = d3.layout.pie()
                      .value(function(d) { return d.value; });

          var arcs = vis.selectAll('g.slice')
                        .data(pie)
                        .enter()
                          .append('svg:g')
                            .attr('class', 'slice');

          arcs.append('svg:path')
              .attr('fill', function(d, i) { return color(i); })
              .attr('d', arc);

        }, true);


      }

    };

  });

});
