foam.CLASS({
  refines: 'foam.core.Property',
  properties: [
    {
      name: 'chartJsFormatter',
      value: function(v) {
        return v;
      },
    },
  ]
});

foam.CLASS({
  refines: 'foam.core.Currency',
  properties: [
    {
      name: 'chartJsFormatter',
      value: function(v) {
        return this.displayFormatter(v);
      },
    },
  ]
});

foam.CLASS({
  refines: 'foam.mlang.sink.Count',
  properties: [
    {
      name: 'chartJsFormatter',
      value: function(v) {
        return v;
      },
    },
  ]
});

foam.CLASS({
  refines: 'foam.mlang.sink.Sum',
  properties: [
    {
      name: 'chartJsFormatter',
      value: function(v) {
        return this.arg1.chartJsFormatter(v);
      },
    },
  ]
});

foam.CLASS({
  refines: 'foam.core.Date',
  properties: [
    {
      name: 'chartJsFormatter',
      value: function(d) {
        if ( ! foam.Date.isInstance(d) ) {
          d = new Date(isNaN(parseInt(d)) ? d : parseInt(d))
        }
        var month = d.getMonth() + 1
        if ( month < 10 ) month = '0' + month
        var day = d.getDate()
        if ( day < 10 ) day = '0' + day
        var year = d.getFullYear()
        return `${year}-${month}-${day}`;
      }
    }
  ]
});

foam.CLASS({
  package: 'org.chartjs',
  name: 'AbstractChartCView',
  extends: 'foam.graphics.CView',
  requires: [
    'foam.mlang.sink.GroupBy',
    'org.chartjs.Lib',
  ],
  properties: [
    'chart',
    'chartType',
    'colors',
    'data',
    {
      name: 'yAxisFormatter',
      value: function(label) {
        if ( this.GroupBy.isInstance(this.data.arg2) ) {
          return this.data.arg2.arg2.chartJsFormatter(label)
        } else {
          return this.data.arg2.chartJsFormatter(label)
        }
      }
    },
    {
      name: 'xAxisFormatter',
      value: function(label) {
        if ( this.GroupBy.isInstance(this.data.arg2) ) {
          return this.data.arg2.arg1.chartJsFormatter(label)
        } else {
          return this.data.arg1.chartJsFormatter(label)
        }
      }
    },
    {
      name: 'tooltipLabelFormatter',
      value: function(tooltipItem, data) {
        var yLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
        if ( foam.Object.isInstance(yLabel) ) yLabel = yLabel.y
        return data.datasets[tooltipItem.datasetIndex].label +
          ': ' + this.yAxisFormatter(yLabel)
      }
    },
    {
      name: 'tooltipTitleFormatter',
      value: function(tooltipItem, data) {
        return tooltipItem[0].xLabel;
      }
    },
    {
      name: 'config',
      factory: function() {
        return {
          type: this.chartType,
          datasets: [{}],
          options: {
            responsive: false,
            maintainAspectRatio: false,
            tooltips: {
              callbacks: {
                title: this.tooltipTitleFormatter.bind(this),
                label: this.tooltipLabelFormatter.bind(this),
              }
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    callback: this.yAxisFormatter.bind(this),
                  },
                }
              ],
              xAxes: [
                {
                  ticks: {
                    callback: this.xAxisFormatter.bind(this),
                  },
                }
              ]
            }
          }
        };
      }
    },
  ],
  reactions: [
    ['data', 'propertyChange', 'update' ],
    ['', 'propertyChange.data', 'update' ],
    ['', 'propertyChange.chart', 'update' ],
  ],
  methods: [
    function initCView(x) {
      this.chart = new this.Lib.CHART(x, this.config);
      this.configChart_(this.chart);
    },
    function paintSelf(x) {
      this.chart.render();
    },
    function configChart_(chart) {
      // template method
    },
    function genChartData_(data) {
      // Template method, in child classes generate the chart data
      // from our data.
    },
    function toChartData(data) {
      var keys = data.sortedKeys();

      if ( this.GroupBy.isInstance(data.arg2) ) {
        var xValues = {};
        keys.forEach(function(k) {
          Object.keys(data.groups[k].groups).forEach(function(k2) {
            xValues[k2] = true;
          })
        });
        xValues = Object.keys(xValues);
        xValues.sort();
        return {
          labels: xValues,
          datasets: keys.map(function(k, i) {
            return {
              label: k,
              data: xValues.map(function(x) {
                var y = data.groups[k].groups[x] ?
                  data.groups[k].groups[x].value : null
                return { y: y, x: x }
              }),
            }
          })
        };
      } else {
        return {
          labels: keys,
          datasets: [
            {
              label: data.arg2.label || data.arg2.model_.label,
              data: keys.map(function(k) { return data.groups[k].value; })
            }
          ]
        };
      }
    },
  ],
  listeners: [
    {
      name: 'update',
      isFramed: true,
      code: function() {
        if ( this.chart && this.data ) {
          // Simply doing this.chart.data = this.data will cause the entire
          // chart to re-render when chart.update() is called. Doing a deep
          // copyFrom makes the chart update only what it needs to which is a
          // much nicer animation.
          var copyFrom = function(to, from) {
            if ( foam.Array.isInstance(from) ) {
              to = to || [];
              while ( to.length > from.length ) {
                to.pop();
              }
              for ( var i = 0; i < from.length; i++ ) {
                to[i] = copyFrom(to[i], from[i]);
              }
              return to;
            } else if ( foam.Object.isInstance(to) ) {
              to = to || {};
              Object.keys(from).forEach(function(k) {
                to[k] = copyFrom(to[k], from[k])
              });
              return to;
            }
            return from;
          }
          var data = this.genChartData_(this.data);
          copyFrom(this.chart.data, data);
          this.chart.update();
        }
      }
    }
  ]
});
