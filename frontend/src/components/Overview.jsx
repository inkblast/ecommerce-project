import React ,{ useState } from "react";
import { Box,Card,CardMedia,Typography,Button } from "@mui/material";
import styled from '@emotion/styled';
import {useNavigate} from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ConfirmationNumberSharpIcon from '@mui/icons-material/ConfirmationNumberSharp';
import PaymentSharpIcon from '@mui/icons-material/PaymentSharp';
import CardGiftcardSharpIcon from '@mui/icons-material/CardGiftcardSharp';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';

function Overview(){

    return(
        <Box width={"100%"}>
            <Box sx={{ backgroundColor: "#f0f0f0" , p:2,m:2}}>
                <Box sx={{ display:"flex",justifyContent:"left" ,alignItems:"center"}}>
                    <Card sx={{ borderRadius: "50%", overflow: "hidden", width:"30vw",height:"25vw" }}>
                        <CardMedia 
                            component="img"
                            height=""
                            width = ""
                            image={require("../Assets/profile.Jpeg")}
                            alt="Profile image"
                        />    
                    </Card>
                    <Typography variant="h5"  sx={{ fontWeight:"bold",fontSize:"40px",p:2 }}>Niroshan Prageeth</Typography >
                    
                </Box>
                <Box sx={{ display:"flex",justifyContent:"center" ,alignItems:"center",pl:"10%",pr:"10%"}}>
                    <Button sx={{ display:"flex",alignItems:"center",justifyContent:"center", flexDirection: "column",  width: "100%"}}>
                        <FavoriteBorderIcon sx={{ fontSize: "5vw" }}/>
                        <Typography sx={{fontSize:"25px"}}>Wish List</Typography>
                    </Button>
                    <Button sx={{ display:"flex",alignItems:"center",justifyContent:"center", flexDirection: "column",  width: "100%"}}>
                        <ConfirmationNumberSharpIcon sx={{ fontSize: "5vw" }}/>
                        <Typography sx={{fontSize:"1.8vw"}}>Coupons</Typography>
                    </Button>
                </Box>
            </Box>
            <Box Box sx={{ backgroundColor: "#f0f0f0" , p:2,m:2,display:"flex",flexDirection:"column"}} >
                <Typography variant="h5"  sx={{ fontWeight:"bold",fontSize:"4vw",p:2 }}>My Orders</Typography>
                <Box sx={{ display:"flex",justifyContent:"left" ,alignItems:"center", width: "100%"}}>
                    <Button sx={{ display:"flex",justifyContent:"center",alignItems:"center", flexDirection: "column", width: "100%" }}>
                        <PaymentSharpIcon sx={{ fontSize: "5vw" }}/>
                        <Typography sx={{fontSize:"1.8vw"}}>Unpaid</Typography>
                    </Button>
                    <Button sx={{ display:"flex",alignItems:"center",justifyContent:"center", flexDirection: "column", width: "100%" }}>
                        <CardGiftcardSharpIcon sx={{ fontSize: "5vw" }}/>
                        <Typography  sx={{fontSize:"1.8vw"}}>To be shipped</Typography>
                    </Button>
                    <Button sx={{ display:"flex",alignItems:"center",justifyContent:"center", flexDirection: "column", width: "100%" }}>
                        <LocalShippingSharpIcon sx={{ fontSize: "5vw" }}/>
                        <Typography sx={{fontSize:"1.8vw"}}>Shipped</Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Overview;