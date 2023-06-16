import React from "react";
import { useTheme } from "@emotion/react";
import { Card, CardContent, CardMedia,CardActions } from "@mui/material";
import InfoCardMedia from "../assets/cheerful-young-african-man-pointing-removebg-preview.png"
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"




function InfoCard(){

    const theme = useTheme();


    return(
        <Box sx={{ width:"1047", height:"432"}}>
<Card  sx={{ display: 'flex',width:"1047", height:"432", margin:"50px", marginLeft:"150px"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column',backgroundColor:"#F14A41" }}>
        <CardContent >
        <Typography variant="subtitle1" color="#ffffff" component="div" fontSize={"22px"}>
        Fan Club
          </Typography>
          <Typography component="div" variant="h5" color="#ffffff" fontSize={"42px"} fontWeight={"bold"}>
          Platform for 
          </Typography>
          <Typography component="div" variant="h5" color="#ffffff" fontSize={"42px"} fontWeight={"bold"}>
           build up your 
          </Typography>
          <Typography component="div" variant="h5" color="#ffffff" fontSize={"42px"} fontWeight={"bold"}>
           fan base
          </Typography>
          <Typography variant="subtitle1" color="#ffffff" component="div" fontSize={"18px"}>
          Access the top 1% of talent on Upwork, and a full suite of hybrid workforce management tools. This is how innovation works now.
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <CardActions>
            <Button sx={{backgroundColor:"#ffffff",borderRadius:'10px'}}>
                <Typography sx={{color:"#F8756F",fontSize:"16px",fontWeight:"regular",textTransform: 'none', margin:"5px" }}>Learn More</Typography>
            </Button>
          </CardActions>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 490, height:432 }}
        image={InfoCardMedia}
        alt="Live from space album cover"
      />
    </Card>
        </Box>
        
    );
}


export default InfoCard;