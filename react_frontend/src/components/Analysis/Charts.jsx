import React from 'react';
import { Box, } from '@mui/material';
//import ReactApexChart from 'react-apexcharts';
import Review from './Review';
import Sales from './Sales';
import Store from './Store';


const SalesData = [400, 850, 500, 700, 425, 900, 1000, 1000, 300, 800];
const ExpensesData = [356, 789, 224, 578, 412, 645, 120, 913, 255, 689];
const profitsData = SalesData.map((value, index) => value - ExpensesData[index]);
console.log(profitsData);

function Charts ()  {
  const divStyle = {
    display: 'flex',
    flexDirection: 'row',
  };

  return (
    <Box sx={{ p:1 , m:1 }}>
      <Box>
        <Box>
          <Box style={divStyle} >
            <Box  sx={{ p:1 , m:1}}>
              <Review data={SalesData} title={"Sales"} sales={"$25348"} color={['#404d5a']}/>
            </Box>
            <Box sx={{ p:1 , m:1 }}>
              <Review data={ExpensesData} title={"Expenses"} sales={"$243733"} color={['#404d5a']}/>
            </Box>
            <Box sx={{ p:1 , m:1 }}>
              <Review data={profitsData} title={"Profits"} sales={"$123223"} color={['#404d5a']}/>
            </Box>
          </Box>
        </Box>
        <Sales sx={{ p:1 , m:1 }}/>
        <Store sx={{ p:1 , m:1 }}/>
      </Box>
    </Box>
  )
}

export default Charts;
