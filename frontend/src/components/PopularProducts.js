import React from "react";
import Box from "@mui/material/Box";
import  Typography  from "@mui/material/Typography";
import IconButton  from "@mui/material/IconButton";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProductItemCard from "./ProductItemCard";


function PopularProducts(){


    const text = "View";
    const modifiedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();


    return(
        <Box sx={{ marginLeft:"150px", marginTop:"100px"}}>
            <Box sx={{display:"flex",}}>
                <Box width={"80%"} height={'50px'}>
                    <Typography sx={{fontSize:'40px',fontWeight:'bold',color:'#F14A41'}}>Popular Products</Typography>
                </Box>
                <Box height={'50px'} sx={{display:"flex",alignItems:"center"}}>
                    <Typography sx={{fontSize:'24px',fontWeight:'bold',color:'#F14A41'}}>All Products</Typography>
                    <IconButton sx={{color:"#F14A41"}}>
                            <ArrowForwardIcon  />
                    </IconButton>
                </Box>
                
            </Box>
            <Box sx={{display:"flex"}}>
                    <ProductItemCard />
                    <ProductItemCard />
                    <ProductItemCard />
                    <ProductItemCard />
                </Box>
            
        </Box>
    );
}


export default PopularProducts;