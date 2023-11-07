import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";

// Assuming you have a ProductItemCard component defined somewhere
import ProductItemCard from "./ProductItemCard"; // Import ProductItemCard from its actual location

function ProductsDisplay() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get('https://fakestoreapi.com/products');
        console.log(result.data);
        setProduct(result.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const renderProduct = () => {
    const numColumns = 4;
    const numRows = 5;
    const itemsPerRow = numColumns;

    const productGrid = [];
    for (let i = 0; i < numRows; i++) {
      const row = product.slice(i * itemsPerRow, (i + 1) * itemsPerRow);
      productGrid.push(
        <div key={i} className="row" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '10px',
        }}>
          {row.map((item, index) => (
            <div key={index} className="column" style={{
              flex: '1',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              margin: '5px',
            }}>
              {/* You should render the ProductItemCard component here with item data */}
              <ProductItemCard products={item} />
            </div>
          ))}
        </div>
      );
    }

    return productGrid;
  }

  return (
    <Box>
      {renderProduct()}
    </Box>
  );
}

export default ProductsDisplay;



// import React, { useEffect, useState } from "react";
// import { Box,Grid } from "@mui/material";
// import ProductItemCard from "./ProductItemCard";
// import axios from "axios";



// function ProductsDisplay()
// {
//   const [product , setProduct] = useState([]);
//   useEffect(()=>{
//     (async () =>{
//       try{
//         const result = await axios.get('https://fakestoreapi.com/products')
//         console.log(result.data);
//         setProduct(result.data);
//       }catch(error){
//         console.log(error)
//       }
//     })()
//   })
//     const renderGridItems = () => {
//         // Create an array to store the grid items
//         const gridItems = [];
    
//         // Iterate through the items array
//         product.map((item)=>{
//           //const gridRowItems = items.slice(i, i + 4); // Get the next four items
    
//           // Create a grid container for the current set of items
//           const gridContainer = (
//             <Grid container spacing={2} key={`grid-container-${item.id}`}>
//               {renderGridRow(item)}
//             </Grid>
//           );
    
//           gridItems.push(gridContainer);
//         })
    
//         return gridItems;
//       };
    
//       const renderGridRow = (item) => {
//         // Create an array to store the grid items in the current row
//         const gridRow = [];
    
//         // Iterate through the row items
//         for (let i = 0; i < 4; i++) {
//           const gridItem = (
//             <Grid item xs={3} key={`grid-item-${i}`}>
//               {<ProductItemCard product={product}/>}
//             </Grid>
//           );
    
//           gridRow.push(gridItem);
//         }
    
//         return gridRow;
//       };
    
      
   

    
//     return(
//         <Box>
//             {renderGridItems()}
//         </Box>
//     );
// }



// export default ProductsDisplay;