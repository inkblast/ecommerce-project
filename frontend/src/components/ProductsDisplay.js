import React from "react";
import { Box,Grid } from "@mui/material";
import ProductItemCard from "./ProductItemCard";



function ProductsDisplay()
{
    const renderGridItems = () => {
        // Create an array to store the grid items
        const gridItems = [];
    
        // Iterate through the items array
        for (let i = 0; i < 16; i += 4) {
          //const gridRowItems = items.slice(i, i + 4); // Get the next four items
    
          // Create a grid container for the current set of items
          const gridContainer = (
            <Grid container spacing={2} key={`grid-container-${i}`}>
              {renderGridRow()}
            </Grid>
          );
    
          gridItems.push(gridContainer);
        }
    
        return gridItems;
      };
    
      const renderGridRow = () => {
        // Create an array to store the grid items in the current row
        const gridRow = [];
    
        // Iterate through the row items
        for (let i = 0; i < 4; i++) {
          const gridItem = (
            <Grid item xs={3} key={`grid-item-${i}`}>
              {<ProductItemCard />}
            </Grid>
          );
    
          gridRow.push(gridItem);
        }
    
        return gridRow;
      };
    
      
   

    
    return(
        <Box>
            {renderGridItems()}
        </Box>
    );
}



export default ProductsDisplay;