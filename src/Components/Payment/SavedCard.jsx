import React , { useState }from "react";
import { Box, Typography} from "@mui/material";
import VisaIcon from '../../assets/Icons/visa.png';
import MasterIcon from '../../assets/Icons/master.png';



function SavedCard(props){
    const first2num = props.number.slice(0,2);
    const last3num = props.number.slice(-3);
    const [cardIcon] = useState(() => {
        if(props.number.startsWith(4)){
            return VisaIcon;
        }
        else if(props.number.startsWith(5)){
            return MasterIcon;
        }
        else{
            return null;
        }
    }) 

    return(
            <div >
                <Box  sx={{ display:"flex" , alignItems:"center" ,justifyContent:"center"}}>
                    <Box>
                        <div sx={{ justifyContent:"center" ,alignItems:"center"}}>
                            <img src={cardIcon}></img>
                        </div>
                    </Box>
                    <Box>
                        <Typography gutterBottom  sx={{ fontWeight: 'bold', m: 1 }}>
                            {first2num}***********{last3num}
                        </Typography>
                    </Box>
                </Box>
            </div>
    );
}
export default SavedCard;