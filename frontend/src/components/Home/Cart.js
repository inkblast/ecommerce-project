import React, { useState, useEffect } from "react";
//import { palette } from '@mui/system';
import Box from "@mui/material/Box";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { bgcolor, margin } from "@mui/system";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function Cart() {
    const [itemsCount, setItemsCount] = useState();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        displayCartItems();
    }, [itemsCount]);

    const displayCartItems = () => {
        axios
            .get("http://127.0.0.1:8000/cart/cartlist/")
            .then((res) => {
                setProducts(res.data);
                setItemsCount(products.length);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const changeItemQty = (id, act, amount) => {
        if (act === "+") {
            axios
                .put("http://127.0.0.1:8000/cart/edit/" + id + "/", {
                    amount: amount + 1,
                })
                .then((res) => {
                    displayCartItems();
                });
        } else {
            axios
                .put("http://127.0.0.1:8000/cart/edit/" + id + "/", {
                    amount: amount - 1,
                })
                .then((res) => {
                    displayCartItems();
                });
        }
    };

    const productDelete = (id) => {
        axios
            .delete("http://127.0.0.1:8000/cart/edit/" + id + "/")
            .then((res) => {
                console.log("deleted!", res);
                setItemsCount(products.length - 1);
            });
    };

    return (
        <div>
            <Box
                sx={{
                    bgcolor: "#ebe6e6",
                    color: "",
                    p: 2,
                    paddingLeft:"5rem",
                    paddingRight:"5rem"
                    
                    
                }}
            >
                <Grid container spacing={5}>
                    <Grid item xs={7}>
                        <Box
                            sx={{
                                bgcolor: "#ffffff",
                                borderRadius: "16px",
                                display: "flex",
                                alignItems: "center",
                                padding: "1rem",
                                marginBottom: "4rem",
                                
                               
                            }}
                        >
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{ flexGrow: 1,
                                      fontSize:"22px" }}
                            >
                                Shopping Cart ()
                            </Typography>
                            <RadioGroup sx={{display:"flex",
                                            justifyContent:"center",
                                            paddingRight:"3rem"
                            }}              
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="#" control={<Radio />} label="Select all items" />
                                
                            </RadioGroup>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </Box>

                        {products.map((products, i) => (
                            <div key={i}>
                                <Box
                                    sx={{
                                        bgcolor: "#ffffff",
                                        marginTop: "1rem",
                                        borderRadius: "16px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        paddingX: "1rem",
                                        paddingLeft:"1rem",
                                        height:"10rem" 
                                    }}
                                >
                                    <RadioGroup sx={{display:"flex",
                                            justifyContent:"center",
                                            paddingRight:"3rem",
                                            paddingLeft:"1rem"

                            }}              
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="#" control={<Radio />} label="" />
                                
                            </RadioGroup>
                                    <Box
                                        sx={{
                                            width: 128,
                                            height: 128,
                                            display: "flex",
                                            alignItems: "center",
                                            paddingLeft: "1rem",
                                        }}
                                    >
                                        <img alt="complex" src="#" />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "left",
                                            width: "100%",
                                            paddingLeft: "7rem",

                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "16px",
                                                paddingTop:"1px",
                                                
                                            }}
                                            gutterBottom
                                            variant="subtitle1"
                                            component="div"
                                        >
                                            {products.p_name}
                                        </Typography>

                                        <Typography variant="p" gutterBottom sx={{fontSize:"18px", paddingTop:"10px",fontWeight: 700,}}>
                                            LKR {products.p_price}.00
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"

                                            sx={{fontSize:"14px",}}
                                        >
                                            +shopping:
                                        </Typography>
                                    </Box>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        }}
                                    >
                                        <IconButton sx={{
                                                        mt:-2
                                        }}
                                            onClick={() =>
                                                productDelete(products.id)
                                            }
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                mt:4,
                                                
                                            }}
                                        >
                                            <IconButton onClick={() =>
                                                    changeItemQty(
                                                        products.id,
                                                        "-",
                                                        products.amount
                                                    )
                                                }>
                                                <RemoveCircleIcon />
                                            </IconButton>
                                
                                            <Typography>{products.amount}</Typography>
                                            <IconButton
                                                onClick={() =>
                                                    changeItemQty(
                                                        products.id,
                                                        "+",
                                                        products.amount
                                                    )
                                                }
                                            >
                                            <AddCircleIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            </div>
                        ))}
                    </Grid>
                    <Grid item xs={5} >
                        <Box
                            sx={{
                                bgcolor: "#ffffff",
                                color: "",
                                p: 1,
                                borderRadius: "16px",
                                //flexGrow: 1,
                                display:"flex",
                                //paddingRight:"5rem",
                                flexDirection:"column",
                                marginBottom:"15px"
    
                            }}
                        >
                            <Typography
                                variant="p"
                                component="div"
                                sx={{ flexGrow: 1,fontSize:"16px", paddingTop:"10px",fontWeight: 700, }}
                            >
                                Summary
                            </Typography>
                            <Typography sx={{}}>subtotal</Typography>
                            <Typography sx={{}}>shopping fee</Typography>
                            <Typography
                                variant="p"
                                component="div"
                                sx={{ flexGrow: 1,fontSize:"16px", paddingTop:"10px",fontWeight: 700, }}
                            >
                               Total
                            </Typography>
                            <Button variant="contained"
                                sx={{
                                    bgcolor:"#f8756f",
                                    display:"flex",
                                    borderRadius:"13px"
                                    
                                }}
                            >Checkout(3)</Button>
                        </Box>
                        <Box
                            sx={{
                                bgcolor: "#ffffff",
                                color: "",
                                p: 1,
                                borderRadius: "16px",
                                //flexGrow: 1,
                                display:"flex",
                                
    
                            }}
                        >

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Cart;
