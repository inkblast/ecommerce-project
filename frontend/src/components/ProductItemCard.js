import React from "react";
import Box from "@mui/material/Box";
import  Typography  from "@mui/material/Typography";
import IconButton  from "@mui/material/IconButton";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import { Card, CardContent, CardMedia,CardActions } from "@mui/material";
import Button from '@mui/material/Button';
import ProductImg from "../assets/black tshirt.jpg"


function ProductItemCard(){


    


    return(
        
            <Box sx={{margin:"20px 0px 20px 50px"}}>
                <Card sx={{maxWidth:216}}>
                    <CardMedia
                     sx={{ height: 200 }}
                     image={ProductImg}
                    title="black tshirt"

                     />
                     <CardContent>
                     <Box sx={{display:"flex"}}>
                        <Box>
                        <Typography sx={{fontSize:18,fontWeight:"bold"}}> Polyester Pillow</Typography>
                        <Typography sx={{fontSize:14,fontWeight:"regular"}}> By generic brand</Typography>
                        </Box>
                        <Box sx={{marginLeft:5}}>
                        <Typography sx={{fontSize:20,fontWeight:"bold"}}> $20</Typography>
                        </Box>
                        
                     </Box>
                     <Box sx={{display:"flex"}}>
                        <Box sx={{display:"flex"}}>
                            <StarIcon style={{ color: '#F14A41' }}/>
                            <StarIcon style={{ color: '#F14A41' }} />
                            <StarIcon style={{ color: '#F14A41' }}/>
                            <StarIcon style={{ color: '#F14A41' }}/>
                            <StarIcon style={{ color: '#F14A41' }}/>
                        </Box>
                        <Box>
                            <Typography sx={{marginLeft:"15px"}}>(88)</Typography>
                        </Box>
                     </Box>
                     </CardContent>
                     <CardActions>
                            <Button sx={{border:'1px solid #F14A41',borderRadius:'20px'}}>
                                <Typography sx={{color:"#F14A41",fontSize:"16px",fontWeight:"regular",textTransform: 'none',margin:"0px 10px 0px 10px" }}>View</Typography>
                            </Button>
                     </CardActions>
                </Card>
            </Box>
        
    );
}


export default ProductItemCard;