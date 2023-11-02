import React,{useState} from "react";
import { Typography, Box, Button,  FormControlLabel,  FormControl, FormLabel, RadioGroup, Radio , DialogTitle , Dialog, IconButton} from "@mui/material";
import VisaIcon from "../Assets/visa.png";
import MasterIcon from "../Assets/master.png";

function Payment(){
    const [cardData,setCardData] = useState([
        {
            number: "4234123412341234",
            month:"12",
            year:"2025",
            cvc: "123",
            name: "Imesh Nuwantha",
            default:true
        },
        {
            number: "523412341234",
            month:"3",
            year:"2024",
            cvc: "123",
            name: "Asiri Sandaruwan",
            default:false
        },
    ])

    return(
        <Box>
            {cardData.map((card, index) => {
                const first2num = card.number.slice(0, 2);
                const last3num = card.number.slice(-3);
                let cardIcon;

                if (card.number.startsWith("4")) {
                    cardIcon = VisaIcon;
                } else if (card.number.startsWith("5")) {
                    cardIcon = MasterIcon;
                } else {
                    cardIcon = null;
                }

                return (
                    <Box
                        key={index}
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "1rem",
                            bgcolor: "#ffffff",
                            color: "",
                            p: 1,
                            borderRadius: "20vw",
                            flexGrow: 1,
                            paddingRight: "10vw"
                        }}
                    >
                        <Box display={"flex"}>
                            <Box sx={{ display: "flex", width: "90%", alignItems: "center" }}>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Box sx={{ width:"5vw" }}>
                                        {cardIcon && (
                                            <div sx={{ justifyContent: "center", alignItems: "center" ,  }}>
                                                <img src={cardIcon} alt="Card Icon" sx={{ width: "50px", height: "50px" }} />
                                            </div>
                                        )}
                                    </Box>
                                    <Box>
                                        <Typography gutterBottom sx={{ fontWeight: 'bold', m: 1 , fontSize:"20px"}}>
                                            {first2num}***********{last3num}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Button  sx={{ textTransform: "none", alignItems: "center", justifyContent: "center", fontWeight: 'bold', m: 1, color: "#F8756F", fontSize: "20px" }}>
                                    Change
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                );
            })}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button gutterBottom sx={{ display: "flex", fontWeight: 'bold', m: 1, alignItems: "center", width: "90%", justifyContent: 'center', fontSize:"20px" }}n>Add a Card information</Button>
            </Box>
        </Box>
    );
}

export default Payment;