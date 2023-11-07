import React from "react";
import Box  from "@mui/material/Box";
import  Typography  from "@mui/material/Typography";
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import Image1 from "../assets/images.png"
import work from "../assets/work.png"



function HowItWorks(){

    return(

        <Box sx={{ backgroundColor:"#F5F3F3"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,197.3C384,213,480,235,576,234.7C672,235,768,213,864,208C960,203,1056,213,1152,229.3C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <Box sx={{display:'flex',margin:"0px 0px 0px 150px"}}>
            <Box  sx={{width:500, height:400, backgroundColor:'primary.dark', borderRadius:'10%',margin:"50px 0px 50px 0px"}}>
                <img src={work} style={{width:'100%', height:'100%',alignItems:'center'}}/>
            </Box>
            <Box sx={{margin:"50px 0px 0px 80px"}}>
                <Typography sx={{fontSize:'40px',fontWeight:"bold" ,color:'#F14A41'}}>How It Works</Typography>
                <Box sx={{display:'flex',margin:"30px 0px 30px 0px"}}>
                    <Box sx={{display:"flex", alignItems:"center"}}><SavingsOutlinedIcon /></Box>
                    <Box sx={{marginLeft:"15px"}}>
                        <Typography sx={{fontSize:'20px', fontWeight:'bold' }}>No cost to join</Typography>
                        <Typography sx={{fontSize:'14px', fontWeight:'regular' }}>Register and browse professionals, explore projects, or even book a consultation.</Typography>
                    </Box>
                </Box>
                <Box  sx={{display:'flex',margin:"30px 0px 30px 0px"}}>
                    <Box sx={{display:"flex", alignItems:"center"}}><AssignmentTurnedInOutlinedIcon /></Box>
                    <Box sx={{marginLeft:"15px"}}>
                        <Typography sx={{fontSize:'20px', fontWeight:'bold' }}>No cost to join</Typography>
                        <Typography sx={{fontSize:'14px', fontWeight:'regular' }}>Register and browse professionals, explore projects, or even book a consultation.</Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex',margin:"30px 0px 30px 0px"}}>
                    <Box sx={{display:"flex", alignItems:"center"}}><CameraAltOutlinedIcon /></Box>
                    <Box sx={{marginLeft:"15px"}}>
                        <Typography sx={{fontSize:'20px', fontWeight:'bold' }}>No cost to join</Typography>
                        <Typography sx={{fontSize:'14px', fontWeight:'regular' }}>Register and browse professionals, explore projects, or even book a consultation.</Typography>
                    </Box>
                </Box>
                
                
            </Box>
            </Box>
        </Box>
    );
}



export default HowItWorks;