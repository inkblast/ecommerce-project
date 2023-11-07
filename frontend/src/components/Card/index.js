import React, { useState } from "react";
import Card from "./Card.js";
import Summary from "./Summary";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
//import "./style.css";



export default function Main() {
    const [totalPrice, setTotalPrice] = useState(0);


    return (
        <div className="main">
          
            <Box
                sx={{
                    //border: "2px solid black",
                    bgcolor: "#ebe6e6",
                    p: 2,
                    paddingLeft: "5rem",
                    paddingRight: "5rem",
                    minheight:'100hv'
                }}
            >
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8} sm={12}>
                        {/* Display Card on medium and larger screens */}
                        <Card setTotalprice={setTotalPrice} />
                    </Grid>
                    <Grid item xs={12} md={4} sm={12}>
                        {/* Display Summary on medium and larger screens */}
                        <Summary totalPrice={totalPrice} />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}