import React from "react";
import { Button, Card ,CardContent,CardHeader,TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Delivery(){
    const navigate = useNavigate();
    const navToPage = (url) =>{
        
        navigate(url)
    }

    return(
        <div>
            <Card variant="outlined" color="success" sx={{ m:2 ,p:2,border:2,bordercolor:'success.main'}}>
                <CardHeader title="Delivery Address"></CardHeader>
                <CardContent>
                    <TextField inputProps={{ readOnly:true }} label="First Name" defaultValue="" sx={{ m:0.5 ,p:0.5}} type="" variant="outlined"></TextField><br></br>
                    <TextField inputProps={{ readOnly:true }} label="Last Name" defaultValue="" sx={{ m:0.5 ,p:0.5}}type="" variant="outlined"></TextField><br></br>
                    <TextField inputProps={{ readOnly:true }} label="Telephone" defaultValue="" sx={{ m:0.5 ,p:0.5}}type="" variant="outlined"></TextField><br></br>
                    <TextField inputProps={{ readOnly:true }} label="Street Address" defaultValue="" sx={{ m:0.5 ,p:0.5}}type="" variant="outlined"></TextField><br></br>
                    <TextField inputProps={{ readOnly:true }} label="City" defaultValue="" type="" sx={{ m:0.5 ,p:0.5}}variant="outlined"></TextField><br></br>
                    <TextField inputProps={{ readOnly:true }} label="Province" defaultValue="" sx={{ m:0.5 ,p:0.5}}type="" variant="outlined"></TextField><br></br>
                    <br></br>
                    <Button variant="contained" color="primary" onClick={()=>navToPage("/changeAddress")} sx={{ m:0.5 ,p:1}}>Change</Button> 
                    <Button variant="contained" color="secondary" onClick={()=>navToPage("/payment")}sx={{ m:0.5 ,p:1}}>Continue</Button>
                </CardContent>
            </Card>
        </div>
    );
} 

export default Delivery;
