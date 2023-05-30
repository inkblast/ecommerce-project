import React from "react";
import Cart from "./Cart/Cart";
import Delivery from "./Delivery/Delivery";
import Payment from "./Payment/Payment";
import {BrowserRouter , Route } from "react-dom"

function Checkout(){
    return(
        <div>
            <h1 sx={{ alignContent:'center' }}>Checkout</h1>
            <Delivery />
            {/* <Delivery />
            <Cart />
            <Payment /> */}
        </div>
    );
}

export default Checkout;