import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AboutUsPic1 from "../assets/Mask group.png";
import AboutUsPic2 from "../assets/Mask group (1).png";
import AboutUsPic3 from "../assets/Mask group (2).png";



function AboutUs(){


    return(
        <Box sx={{display:"flex", margin:"100px 100px 100px 100px"}}>
            <Box sx={{diplay:"flex", textAlign:"center",justifyContent: 'center', 
                        alignItems: 'center'}}>
                <Box sx={{
                        height: '225px',
                        borderRadius: '50%',
                        }}>
                <img src={AboutUsPic1} width={"225px"} height={"225px"}></img>
                </Box>

                <Box>
                    <Box >
                        <Typography sx={{fontWeight:"Bold"}}>High Profit</Typography>
                        <Typography>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{diplay:"flex", textAlign:"center",justifyContent: 'center', 
                        alignItems: 'center',marginLeft:"15px"}}>
                
                <Box sx={{
                        height: '225px',
                        borderRadius: '50%',
                        
                        }}>
                            <img src={AboutUsPic2} width={"225px"} height={"225px"}></img>
                </Box>

                <Box >
                    <Box sx={{textAlign:"center"}}>
                        <Typography sx={{fontWeight:"Bold"}}>High Profit</Typography>
                        <Typography>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</Typography>
                    </Box>
                </Box>

                
            </Box>
            <Box sx={{diplay:"flex", textAlign:"center",justifyContent: 'center', 
                        alignItems: 'center',marginLeft:"15px" }}>
                <Box sx={{
                        height: '225px',
                        borderRadius: '50%',
                        
                        }}>
                            <img src={AboutUsPic3} width={"225px"} height={"225px"}></img>
                        </Box>

                        <Box>
                    <Box sx={{textAlign:"center"}}>
                        <Typography sx={{fontWeight:"Bold"}}>High Profit</Typography>
                        <Typography >We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}



export default AboutUs;