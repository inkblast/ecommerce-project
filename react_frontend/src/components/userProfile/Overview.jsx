import React /*,{ useState }*/ from "react";
import { Box,Card,CardMedia,Typography,Button } from "@mui/material";

import myImage from '../../assets/profile.Jpeg';

function Overview(){

    return(
        <Box width={"100%"}>
            <Box sx={{ backgroundColor: "#f0f0f0" , p:2,m:2}}>
                <Box sx={{ display:"flex",justifyContent:"left" ,alignItems:"center"}}>
                    <Card sx={{ borderRadius: "50%", overflow: "hidden", width:"10vw",height:"10vw" }}>
                        <CardMedia 
                            component="img"
                            height=""
                            width = ""
                            image= {myImage}
                            alt="Profile image"
                        />    
                    </Card>
                    <Typography variant="h5"  sx={{ fontWeight:"bold",fontSize:"30px",p:2,pr:0 }}>Niroshan Prageeth</Typography >
                    <Button>
                        <Typography sx={{fontSize:"0.5vw"}}>Edit</Typography>
                    </Button>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: "#f0f0f0" , p:2,m:2}}>
                <Box sx={{ display:"flex",justifyContent:"left" ,alignItems:"center"}}>
                <Box>
            <Box>
                <Button>
                    <Typography variant="h6">Change email Address</Typography>
                </Button>
            </Box>
            <Box>
                <Button>
                    <Typography variant="h6">Change password</Typography>
                </Button>
            </Box>
        </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Overview;