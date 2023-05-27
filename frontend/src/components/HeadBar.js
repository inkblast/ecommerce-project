import React from "react";
import { AppBar,Box,Toolbar,Typography,Button, Tab,Tabs } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function HeadBar()
{

    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton >
                <ArrowBackIosIcon />
                </IconButton>
            
            <Typography variant="h6" component="div" >
              Back To Catelog
            </Typography>
            <Box sx={{ml:5}}>
            <Typography variant="h5" component="div">
                Unisex Garment-Dyed Hoodie
            </Typography>
            <Typography  color="text.secondary">
                By genaric Brand
            </Typography>
            </Box>
            
           <Button sx={{ml:"auto"}} variant="contained">Edit</Button>
           <Button sx ={{ml:2}} variant="contained">preview</Button>
            
           
          </Toolbar>
          
        </AppBar>
      </Box>
    );
}

export default HeadBar;