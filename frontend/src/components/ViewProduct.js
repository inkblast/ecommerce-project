import React from "react";
import { Box, IconButton, Typography,Button } from "@mui/material";
import NavBar from "./NavBar";
//import Link from '@mui/material/Link';
import StarIcon from '@mui/icons-material/Star';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MainPic from "../assets/handsome-attractive-european-man-gray-hoodie-with-hands-pockets-look-pleased-has-good-mood-as-comes-home-after-work-good-looking-male-student-poses.jpg"
import { Link } from 'react-router-dom';




function ViewProduct(){


    return(
        <Box>
            <NavBar />
            <Box>
                <Box sx={{margin:"20px 0px 20px 100px"}}>
                    <Box sx={{display:"flex"}}>
                    <Link href="/products" underline="none">
                        <Typography sx={{color:"#F14A41",fontSize:"20px"}}>Catalog /</Typography>
                    </Link>
                    <Link href="/men-clothing" underline="none">
                        <Typography sx={{color:"#F14A41",fontSize:"20px"}}> Men's Clothing /</Typography>
                    </Link>
                    <Link href="/T-shirt" underline="none">
                        <Typography sx={{color:"#F14A41",fontSize:"20px"}}> Hoodies /</Typography>
                    </Link>
                    <Link href="#" underline="none">
                        <Typography sx={{color:"#000",fontSize:"20px"}}> Unisex Garment-Dyed hoddie</Typography>
                    </Link>
                    </Box>
                    
                </Box>
                <Box sx={{display:"flex"}}>
                    <Box>
                        <Box sx={{margin:"0px 20px 0px 100px"}}>
                            <img src={MainPic} width="550px" height="520px"></img>
                        </Box>
                        <Box sx={{display:"flex", marginLeft:"100px"}}>
                            <Box sx={{marginRight:"30px"}}>
                                <img src={MainPic} width="106px" height="106px"></img>
                            </Box>
                            <Box sx={{marginRight:"30px"}}>
                                <img src={MainPic} width="106px" height="106px"></img>
                            </Box>
                            <Box sx={{marginRight:"30px"}}>
                                <img src={MainPic} width="106px" height="106px"></img>
                            </Box>
                            <Box sx={{marginRight:"30px"}}>
                                <img src={MainPic} width="106px" height="106px"></img>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{marginLeft:"50px"}}>
                        <Box>
                            <Typography sx={{fontWeight:"bold",fontSize:"18px",color:"gray", marginBottom:"20px"}}>Hoodie</Typography>
                            <Typography sx={{fontWeight:"bold",fontSize:"22px",color:"000", marginBottom:"20px"}}>Unisex Garment-Dyed Hoodie</Typography>
                            <Typography sx={{fontWeight:"regular",fontSize:"16px",color:"000", marginBottom:"20px"}}>Discover unmatched comfort and style with this unisex, garment-dye hoodie. Made with 80% ring-spun cotton and 20% polyester, this hoodie delivers incredible comfort for any casual setting.</Typography>
                        </Box>
                        <Box sx={{display:"flex"}}>

                            <StarIcon style={{ color: '#F14A41' }}/>
                            <StarIcon style={{ color: '#F14A41' }} />
                            <StarIcon style={{ color: '#F14A41' }}/>
                            <StarIcon style={{ color: '#F14A41' }}/>
                            <StarIcon style={{ color: '#F14A41' }}/>
                            <Typography>(88)</Typography>
                        </Box>
                        <Box sx={{marginTop:"20px"}}>
                            <Typography sx={{fontSize:"36px",fontWeight:"bold"}}>$20.00</Typography>
                        </Box>
                        <Box sx={{ margin:"20px 0px 20px 0px"}}>
                            <Typography sx={{fontSize:"18px"}}>Quantity:</Typography>
                            <Box sx={{display:"flex"}}>
                                <IconButton>
                                    <AddCircleIcon />
                                </IconButton>
                                <Box sx={{ display:"flex", justifyContent:"center",alignItems:"center"}}>
                                <Typography >1</Typography>
                                </Box>
                                
                                <IconButton>
                                    <RemoveCircleIcon />
                                </IconButton>
                            </Box>
                            

                        </Box>
                        <Box sx={{display:"flex",margin:"20px 0px 20px 0px"}}>
                            <Link to="..\..\t-shirt\design">
                            <Button sx={{borderRadius:"25px", backgroundColor:"#F14A41"}}>
                                    <Typography sx={{fontSize:"18px", textTransform:"none", color:"#fff", margin:"0px 10px 0px 10px"}}>Design Now</Typography>
                                </Button>
                            </Link>
                                
                                <Button sx={{border:"1px solid #F14A41",borderRadius:"25px", marginLeft:"20px"}}>
                                    <Typography sx={{fontSize:"18px", textTransform:"none", color:"#F14A41", margin:"0px 10px 0px 10px"}}>More Details</Typography>
                                </Button>
                        </Box>
                        <Box sx={{display:"flex",margin:"25px 0px 25px 0px" }}>
                            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center", marginRight:"10px"}}>
                                <LocalShippingOutlinedIcon />
                            </Box>
                            
                            <Box >
                                <Typography sx={{fontWeight:"bold"}}>Shipping:$5.00</Typography>
                                <Box sx={{display:"flex"}}>
                                    <Typography sx={{fontWeight:"regular", marginRight:"5px"}}> From </Typography>
                                    <Typography sx={{fontWeight:"bold",  marginRight:"5px"}}> Colombo </Typography>
                                    <Typography sx={{fontWeight:"regular",  marginRight:"5px"}}> to </Typography>
                                    <Typography sx={{fontWeight:"regular",  marginRight:"5px"}}> Badulla </Typography>
                                </Box>
                                
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}


export default ViewProduct;