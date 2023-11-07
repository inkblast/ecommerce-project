import React from "react";
import { styled, makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import logo from "../../assets/paypal_CheckOut_Pill_Button.jpg";

export default function Summary(props) {
    const { totalPrice } = props;

    const total = totalPrice + 500;

    return (
        <div>
            <Box
                sx={{
                    bgcolor: "#ffffff",
                    color: "",
                    p: 1,
                    borderRadius: "16px",
                    //width: "410px",
                    padding: "10px",
                    width: "100%"
                }}>

                <Typography
                    sx={{
                        flexGrow: 1,
                        fontSize: "20px",
                        fontWeight: 700,
                        marginBottom: "1rem",
                    }}
                >
                    Summary
                </Typography>
                <Typography sx={{ fontSize: "14px", marginBottom: "1rem"}}>
                    subtotal:<Typography sx={{ ml: "21rem" ,mt :"-21px" }}>LKR {totalPrice}</Typography>
                </Typography>
                
                
                <Typography sx={{ fontSize: "14px", marginBottom: "2rem" }}>
                    shopping fee:<Typography sx={{ ml: "21rem" ,mt :"-21px" }}>LKR 500.00</Typography>
                </Typography>

                <Box m={1} sx={{ position: "relative" }}>
                    <TextField 
                    label="Enter cupon code"
                    InputProps={{
                      style: {
                        borderRadius: "30px",
                        width: "13em",
                        //height: "3em",
                      }
                    }}
                    />

                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                          
                            borderLeft: "none",
                            backgroundColor: "#f8756f",
                            position: "absolute",
                            top: "50%",
                            left: "56%",
                            transform: "translate(-10%, -50%)",
                            alignItems: "center",
                            borderRadius: "2rem",
                            width: "7em",
                            //height: "3em",
                        }}
                    >
                        <Typography
                            sx={{ margin: "10px 0px 7px 0px", color: "#fff" }}
                        >
                            Apply
                        </Typography>
                    </Button>
                </Box>
                <Box>
                    <Typography
                        variant="p"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            fontSize: "20px",
                            paddingTop: "10px",
                            fontWeight: 700,
                        }}
                    >
                        Total:<Typography sx={{ ml: "21rem" ,mt :"-21px" }}>LKR {total}</Typography>
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "#f8756f",
                            display: "flex",
                            borderRadius: "15px",
                            marginTop: "1rem",
                            width: "100%"
                        }}
                    >
                        Checkout()
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    bgcolor: "#ffffff",
                    color: "",
                    p: 1,
                    borderRadius: "16px",
                    //width: "410px",
                    display: "flex",
                    height: "120px",
                    marginTop: "1rem",
                    padding: "10px",
                    width: "100%"
                }}
            >
                <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
                    Payment methods
                </Typography>
                <Button sx={{marginTop:"1rem", marginLeft:"-9rem"}}><img alt="Paypal" src={logo} height="40vh" width="200vw" /></Button>
                
            </Box>
        </div>
    );
}