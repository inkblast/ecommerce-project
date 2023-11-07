import React from "react";
import Box from "@mui/material/Box";
import  Typography  from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "@material-ui/core";


function Footer(){

    return(
        <Box sx={{backgroundColor:"#FFCCC9",width:"100%",height:"290px", marginTop:"50px"}}>
            <Box sx={{display:"flex"}}>
            <Grid container spacing={2} sx={{color:"#000000"}}>
                <Grid item xs={4}>
                    <Box sx={{margin:"50px"}}>
                        <Box>
                            <Typography sx={{fontWeight:"bold",fontSize:"22px"}}>Company</Typography>
                        </Box>
                        <Box sx={{marginTop:"10px"}}>
                            <Link href={'/about_us'}><Typography sx={{fontSize:"16px"}}>About Us</Typography></Link>
                            <Typography sx={{fontSize:"16px"}}>How It Works</Typography>
                            <Typography sx={{fontSize:"16px"}}>Fan Club</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{margin:"50px"}}>
                        <Box>
                        <Typography sx={{fontWeight:"bold", fontSize:"22px"}}>Products</Typography>
                        </Box>
                    <Grid container sx={{color:"#000000"}}>
                    <Grid item xs={6}>
                        <Box sx={{marginTop:"10px"}}>
                            <Typography sx={{fontSize:"16px"}}>Mens' Clothing</Typography>
                            <Typography sx={{fontSize:"16px"}}>Womens' Clothing</Typography>
                            <Typography sx={{fontSize:"16px"}}>Kids' Clothing</Typography>
                            <Typography sx={{fontSize:"16px"}}>Gift</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{marginTop:"10px"}}>
                            
                            <Typography sx={{fontSize:"16px"}}>Home & Living</Typography>
                            <Typography sx={{fontSize:"16px"}}>Accessories</Typography>
                        </Box>
                    </Grid>
                    </Grid>
                    </Box>
                    
                    
                </Grid>
                <Grid item xs={4} >
                    <Box sx={{margin:"50px"}}>
                        <Box >
                        <Typography sx={{fontWeight:"bold", fontSize:"22px"}}>Follow Us</Typography>
                    </Box>
                    <Box sx={{display:"flex",marginTop:"10px"}}>
                        <Box >
                            <InstagramIcon />
                        </Box>
                        <Box sx={{marginLeft:"15px"}}>
                            <TwitterIcon />
                        </Box>
                        
                        <Box sx={{marginLeft:"15px"}}>
                            <FacebookIcon />
                        </Box>
                        
                    </Box>
                    </Box>
                    
                </Grid>
        
            </Grid>

            
            </Box>
            <Grid container sx={{display:"flex",color:"#000000"}}>
                <Grid item xs={6}>
                    <Box sx={{marginLeft:"25px"}}>
                        <Typography>© 2015 - 2023 Upwork® Global Inc.</Typography>
                    </Box>
                </Grid>
                 <Grid item xs={6}>
                    <Box sx={{display:"flex"}}>
                        <Typography>Terms & conditions</Typography>
                        <Typography sx={{display:"flex",marginLeft:"10px"}}>Privacy policy</Typography>

                    </Box>
                 </Grid>
            </Grid>    
        </Box>
    );
}

export default Footer;