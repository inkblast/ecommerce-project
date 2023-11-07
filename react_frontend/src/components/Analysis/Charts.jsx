import React from "react";
import { Box } from "@mui/material";
import Review from "./Review";
import Sales from "./Sales";
import Store from "./Store";

const SalesData = [400, 850, 500, 700, 425, 900, 1000, 1000, 300, 800];
const ExpensesData = [356, 789, 224, 578, 412, 645, 120, 913, 255, 689];
const profitsData = SalesData.map(
  (value, index) => value - ExpensesData[index]
);
console.log(profitsData);

function Charts() {
  const divStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  };

  return (
    <div style={{ padding: "1em", margin: "1em" }}>
      <div style={divStyle}>
        <Box sx={{ width: "100%",marginRight:"1.5em" }}>
          <Review
            sx={{ width: "100%" }}
            data={SalesData}
            title={"Sales"}
            sales={"$25348"}
            color={["#404d5a"]}
            width="100%"
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Review
            data={ExpensesData}
            title={"Expenses"}
            sales={"$243733"}
            color={["#404d5a"]}
            width="100%"
          />
        </Box>
        <Box sx={{ width: "100%" ,marginLeft:"1.5em"}}>
          <Review
            data={profitsData}
            title={"Profits"}
            sales={"$123223"}
            width="100%"
          />
        </Box>
      </div>
      <Sales sx={{ width: "100%" ,marginTop:"1.5em"}} />
      <Store sx={{ width: "100%" ,marginTop:"1.5em"}} />
    </div>
  );
}

export default Charts;
