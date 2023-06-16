import React from "react";
import { makeStyles } from '@mui/styles';
import { Card, CardMedia, CardContent, Typography,Box } from '@mui/material';



const useStyles = makeStyles({
    card: {
      position: 'relative',
      '&:hover $overlay': {
        opacity: 1,
      },
      width:'350px',
      height:'400px'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0,
      transition: 'opacity 0.3s',
      textAlign:'center'
     
    },
    overlayText: {
      color: '#fff',
      fontSize: '60px',
      fontWeight: 'bold' ,
      
      
    } ,
  });

function ProductCategoryCard({cardimg,title}){
    const classes = useStyles();
    return(
        <Box sx={{margin:"10px"}}>
            <Card className={classes.card}>
      <CardMedia component="img" height="400px" image={cardimg}  />
      <Box className={classes.overlay}>
        <Typography sx={{color:"#fff", fontSize:"42px", fontWeight:"bold"}}>{title}</Typography>
      </Box>
      
    </Card>
        </Box>
    );
}


export default ProductCategoryCard;