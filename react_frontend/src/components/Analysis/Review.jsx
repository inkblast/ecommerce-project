import React from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';

function Review(props) {
    const { data, color, sales, title } = props;

    const options1 = {
        series: [{
            data: data
        }],
        chart: {
            type: 'area',
            height: 100,
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'straight'
        },
        fill: {
            opacity: 0.3,
        },
        xaxis: {
            crosshairs: {
                width: 1
            },
        },
        yaxis: {
            min: 0
        },
        colors: color,
        title: {
            text: sales,
            offsetX: 0,
            style: {
                fontSize: '24px',
            }
        },
        subtitle: {
            text: title,
            offsetX: 0,
            style: {
                fontSize: '14px',
            }
        }
    };

    return (
        <div className="Review" style={{ backgroundColor: "#DCE6EC", padding: 5 }} >
            <div id="chart-spark1">
                <ReactApexChart options={options1} series={options1.series} type="area" height={150} width={488} />
            </div>
        </div>
    )
}

Review.propTypes = {
    data: PropTypes.array.isRequired,
    color: PropTypes.array.isRequired,
    sales: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Review;
