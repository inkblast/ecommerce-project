import React from "react";
import { Box, Typography} from "@mui/material";

function SavedAddress(props){
    return(
            <div>
                <Box>
                    
                    <Box sx={{ display:"flex" , alignItems:"left" }}>
                        <Typography variant="h7" name="name" gutterBottom sx={{ fontWeight: 'bold', m: 1 }}>
                            {props.name}
                        </Typography>
                        <Typography variant="h7" name="phone" gutterBottom sx={{ fontWeight: 'regular', m: 1 }}>
                            {props.phone}
                        </Typography>
                    </Box>
                    <Box   >
                        <Typography variant="h9" name="addressLine1" gutterBottom sx={{ fontWeight: 'bold', m: 1 ,color:"#b8b8b8"}}>
                            {props.addressLine1},
                        </Typography><br></br>
                        <Typography variant="h9" name="addressLine2" gutterBottom sx={{ fontWeight: 'bold', m: 1 ,color:"#b8b8b8"}}>
                            {props.addressLine2}.
                        </Typography>
                    </Box>
                </Box>
                
            </div>
    );
}
export default SavedAddress;
