import React,{useState} from "react";
import { Typography, Box, Button,  FormControlLabel,  FormControl, FormLabel, RadioGroup, Radio , DialogTitle , Dialog, IconButton} from "@mui/material";
function Shipping(){
    const [formData,setFormData] = useState(
        // {
        //     id:"",
        //     name:"",
        //     phone:"",
        //     addressLine1:"",
        //     addressLine2:"",
        //     city:"",
        //     province:"",
        //     default:false,
        // }
        [
        {
            id:1,
            name:"Imesh Nuwantha",
            phone:"+9471956055",
            addressLine1:"303/12, Passara Road",
            addressLine2:"Hindagoda, Badulla",
            city:"Badulla",
            province:"Uwa Province",
            default:true,
        },
        {
            id:2,
            name:"Asiri Sandaruwan",
            phone:"+94774834450",
            addressLine1:"249/7/4, Kendagolla",
            addressLine2:"Kurunduwaththa Bazaar",
            city:"Gampola",
            province:"Central Province",
            default:false,
        },
        {
            id:3,
            name:"Achintha Liyanage",
            phone:"+94784738432",
            addressLine1:"58, Palapathwala",
            addressLine2:"Mathale",
            city:"Mathale",
            province:"Central Province",
            default:false,
        }]
    ) 
    return(
        <div>
            {formData.map((data,index) => (
                    <Box key={index}>
                        <Box sx={{ display:"flex" , alignItems:"left" }}>
                            <Typography variant="h7" name="name" gutterBottom sx={{ fontWeight: 'bold', m: 1 }}>
                                {data.name}
                            </Typography>
                            <Typography variant="h7" name="phone" gutterBottom sx={{ fontWeight: 'regular', m: 1 }}>
                                {data.phone}
                            </Typography>
                        </Box>
                        <Box   >
                            <Typography variant="h9" name="addressLine1" gutterBottom sx={{ fontWeight: 'bold', m: 1 ,color:"#b8b8b8"}}>
                                {data.addressLine1},
                            </Typography><br></br>
                            <Typography variant="h9" name="addressLine2" gutterBottom sx={{ fontWeight: 'bold', m: 1 ,color:"#b8b8b8"}}>
                                {data.addressLine2}.
                            </Typography>
                        </Box>
                    </Box> 
                
            ))}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="h5" gutterBottom sx={{ display: "flex", fontWeight: 'bold', m: 1, alignItems: "center", width: "90%", justifyContent: 'center' }}n>Add an Address</Button>
            </Box>
        </div>
    );
}

export default Shipping;