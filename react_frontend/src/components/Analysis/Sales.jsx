import React from 'react';
import ReactApexChart from 'react-apexcharts';

function Sales() {
  const options = {
    series: [
      {
        name: "Sales",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      },
      {
        name: "Expected Sales(Average sales)",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      },
    ],
    chart: {
      height: 250,
      type: 'line',
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 5],
      curve: 'smooth',
      dashArray: [0, 7]
    },
    title: {
        text: "Monthly Sales",
        offsetX: 0,
        style: {
        fontSize: '24px',
        }
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
      }
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun','Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec'
      ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " (mins)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " per session"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val;
            }
          }
        }
      ]
    }
  };

  return (
    <div className="Sales" style={{ backgroundColor: "#DCE6EC",padding:10 ,margin:10}}>
      <ReactApexChart options={options} series={options.series} type="line" height={250} width={700} />
    </div>
  );
}

export default Sales;