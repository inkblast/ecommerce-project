import React from "react";
import ReactApexChart from "react-apexcharts";

function Review(props) {
  const options1 = {
    series: [
      {
        data: props.data,
      },
    ],
    chart: {
      type: "area",
      height: 100,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      opacity: 0.3,
    },
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    yaxis: {
      min: 0,
    },
    colors: props.color,
    title: {
      text: props.sales,
      offsetX: 0,
      style: {
        fontSize: "24px",
      },
    },
    subtitle: {
      text: props.title,
      offsetX: 0,
      style: {
        fontSize: "14px",
      },
    },
  };

  return (
    <ReactApexChart
      options={options1}
      series={options1.series}
      type="area"
      height={"100%"}
      width={"100%"}
    />
  );
}

export default Review;
