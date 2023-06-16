import React from "react";
import NavBar from "./NavBar";
import { Box,Button,Grid, Typography } from "@mui/material";

import ProductsDisplay from "./ProductsDisplay";


function TshirtPage(){

    const ProductCategory = ["Men's Clothing","Women's Clothing","Kid's Clothing","Home & Living","Gift","Accessories"];
    const ProductSubCategrory =["Tshirt","Hodie","Sweetshirt","LongSleevs","TankTop","Sport Wears","Swim Wears","Bottoms","Shoes"];

    return(
        <Box>
            <NavBar />
            <Box>
                <Box sx={{borderBottom:"1px solid gray"}}>
                <Box sx={{margin:"10px 0px 10px 100px" }}>
                    <Grid container>
                        {ProductCategory.map((product)=>(
                            <Grid item xs={2}>
                            <Button>
                                <Typography sx={{color:"#F14A41"}}>{product}</Typography>
                            </Button>
                            
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                </Box>
                
                <Box sx={{width:"80%",margin:"50px 0px 0px 100px"}}>
                    <Typography sx={{fontSize:"42px", fontWeight:"bold",color:"#F14A41"}}>T shirt</Typography>
                    <Typography sx={{fontSize:"18px", fontWeight:"medium",color:"#000"}}>Fashion and character meet personalization in essential pieces for every man’s wardrobe.</Typography>
                </Box>

                {/*<Box sx={{display:"flex",justifyContent:"right"}}>
                    <Box sx={{marginRight:"50px"}}>backward forward</Box>
                        </Box>*/}
                <Box sx={{display:"flex", margin:"20px 0px 20px 80px"}}>
                    {ProductSubCategrory.map((sub)=>(
                        <Button sx={{backgroundColor:"#F14A41", borderRadius:"15px", marginLeft:"20px"}}>
                            <Typography color={"#fff"} textTransform={"none"} margin={"0px 10px 0px 10px"}>{sub}</Typography>
                            </Button>
                    ))}
                   
                    
                </Box>
                <Box sx={{marginLeft:"50px"}}>
                    <ProductsDisplay />
                </Box>
            </Box>
        </Box>
    );
}


export default TshirtPage;