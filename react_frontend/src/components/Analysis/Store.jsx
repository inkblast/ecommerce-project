import React from "react";
import ReactApexChart from 'react-apexcharts';

function Store() {
  const options = {
    chart: {
      type: 'bar'
    },
    series: [{
      name: 'sales',
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
    }],
    xaxis: {
      categories: ["Item 01", "Item 02", "Item 03", "Item 03", "Item 05", "Item 06", "Item 07", "Item 08", "Item 09"]
    },
    title: {
        text: "Stock",
        offsetX: 0,
        style: {
        fontSize: '24px',
        }
    },
  };

  return (
    // <div id="chart" style={{ backgroundColor: "#DCE6EC", padding: 10, margin: "0 auto", maxWidth: "100%" }}>
      <ReactApexChart options={options} series={options.series} type="bar" height={"100%"} width={"100%"} />
    // </div>  
  );
}

export default Store;