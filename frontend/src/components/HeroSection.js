import Typography  from "@mui/material/Typography";
import  Box  from "@mui/material/Box";
import React from "react";
import { Button } from "@mui/material";
import pic from '../assets/slider pic1.png';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
//import { useHref } from "react-router-dom";
//import { useHistory } from 'react-router-dom';
import { Grid, Link } from "@mui/material";

function HeroSection (){
    //const dispatch = useHistory();
    return(
        <Box sx={{display:'flex', alignItems:'center',backgroundColor:"#FFCCC9"}}>
            <Box width={'350px'} sx={{marginLeft:'150px'}} >
            <Box>
                <Typography variant="h1" sx={{fontWeight:'bold', fontSize:'70px' ,color:'#F14A41'}}>Create Your Own Unique Products</Typography>
            </Box>
            <Box sx={{marginTop:"20px"}}>
                <Typography variant="p" sx={{fontWeight:'medium', fontSize:'20px',color:'#333232'}}>Design, Customize, and Order Your Perfect Product</Typography>
            </Box>
           
            <Box sx={{marginTop:'30px'}}>
            <Button sx ={{backgroundColor:"#F1826A",color:"#ffffff",borderRadius:'25px'}}>
                <Link href={'/T-shirt'}>
                <Typography sx={{fontSize:"16px", textTransform:"none", margin:"5px 20px 5px 20px"}}>
                Get Started
                </Typography>
                </Link>
            </Button>
           
            </Box>
            </Box>
            
            <Box sx={{paddingLeft:'200px',margin:'20px'}}>
            <img src={pic}></img>
            </Box>
            
        </Box>
    );
}

export default HeroSection