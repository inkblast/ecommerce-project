import React from "react";
import NavBar from './NavBar';
import Box  from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import ProductCategoryCard from "./ProductCategoryCard";
import tshirt from "../assets/tshirt.jpg";
import hoddie from "../assets/hoddie.jpg";
import sweetshirt from "../assets/sweetshirt.jpg";
import longsleevs from "../assets/long sleevs.jpg";
import tanktop from "../assets/tank top.jpg";


function MenClothingCatelog()
{
    return(
        <Box>
             <NavBar />
             <Box>
                <Box sx={{display:"flex", margin:"100px"}}>
                    <Box sx={{width:"80%"}}>
                    <Typography sx={{fontSize:"42px", fontWeight:"bold",color:"#F14A41"}}>Product Catelog</Typography>
                    <Typography sx={{fontSize:"18px", fontWeight:"medium",color:"#000"}}>Fashion and character meet personalization in essential pieces for every man’s wardrobe.</Typography>
                    </Box>
                    
                     <Box sx={{width:"20%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <Button sx={{border:"1px solid #F14A41", borderRadius:"15px"}}>
                            <Typography sx={{fontSize:"18px",color:"#F14A41",textTransform:'none', margin:"0px 20px 0px 20px"}}>My Favorites</Typography>
                        </Button>
                     
                    </Box>                   
                    
                </Box>
                <Box sx={{margin:"0px 90px 0px 90px"}}>
                    <Box sx={{display:"flex"}}>
                        <ProductCategoryCard cardimg={tshirt} title="T-Shirt" />
                        <ProductCategoryCard cardimg={hoddie} title="Hoddie" />
                        <ProductCategoryCard cardimg={sweetshirt} title="Sweetshirt" />
                        
                    </Box>
                    <Box sx={{display:"flex"}}>
                        
                        <ProductCategoryCard cardimg={longsleevs} title="Long Sleevs" />
                        <ProductCategoryCard cardimg={tanktop} title="Tank top" />
                        <ProductCategoryCard cardimg={tshirt} title="Sports wear" />
                    </Box>
                    <Box sx={{display:"flex"}}>
                        
                        <ProductCategoryCard cardimg={longsleevs} title="Bottoms" />
                        <ProductCategoryCard cardimg={tanktop} title="Swimwear" />
                        <ProductCategoryCard cardimg={tshirt} title="Shoes" />
                    </Box>
                </Box>
                
             </Box>
        </Box>
       
    );
}


export default MenClothingCatelog;