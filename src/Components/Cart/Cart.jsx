import React from "react";
import {Card,Button} from "@mui/material";

function Cart(){
    return(
        <div>
            <Card variant="outlined" color="success" sx={{ m:2 ,p:2,border:2,bordercolor:'success.main'}}>
                <h2>Cart</h2>
                <Button variant="contained" color="secondary">Continue</Button>
            </Card>
            
        </div>
    );
}

export default Cart;