import React from "react";
import {Card , Button , TextField, CardHeader, CardContent} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Payment(){
    const navigate = useNavigate();
    const navToPage = (url) =>{
        navigate(url)
    };
   
    return(
        <div>
            <Card variant="outlined" color="success" sx={{ m:2 ,p:2,border:2,bordercolor:'success.main'}}>
                <CardHeader title="Payment" ></CardHeader>
                <CardContent>
                    <div>
                        <TextField 
                            required 
                            label="Card holder" 
                            defaultValue="" 
                            sx={{ m:0.5 ,p:0.5}} 
                            type="" 
                            variant="outlined">
                        </TextField><br></br>
                        <TextField 
                        label="Card number" 
                        defaultValue="" 
                        sx={{ m:0.5 ,p:0.5}}
                        type="number" 
                        variant="outlined">
                        </TextField><br></br>
                        <TextField 
                        label="Expiry date" 
                        defaultValue="" 
                        sx={{ m:0.5 ,p:0.5}}
                        type="date" 
                        format="MM/YY" 
                        variant="outlined"></TextField>
                        <TextField label="CVC" defaultValue="" sx={{ m:0.5 ,p:0.5}}type="number" max="3" variant="outlined"></TextField><br></br>
                    </div>
                    <br></br>
                    <Button variant="contained" color="primary" onClick={()=>navToPage("/")}>Back</Button>
                    <Button variant="contained" color="warning">Pay Now</Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default Payment;