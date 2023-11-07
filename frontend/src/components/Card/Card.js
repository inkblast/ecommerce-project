import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Checkbox, RadioGroup, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from "axios";
import { Grid } from "@material-ui/core";
import logo from '../assets/1.jpg'

function getTotalPriceOfCheckedItems(checkboxState, items) {
    let totalPrice = 0;
    items.forEach((item) => {
        if (checkboxState[item.id]) {
            totalPrice += item.p_price * item.amount;
        }
    });
    return totalPrice;
}
function Card(props) {
    const [checkboxState, setCheckboxState] = useState({});
    const [itemsCount, setItemsCount] = useState();
    const [itemQty, setItemQty] = useState(0);
    const [products, setProducts] = useState([]);
    const { setTotalprice } = props;

    console.log(products);

    useEffect(() => {
        const totalPrice = getTotalPriceOfCheckedItems(checkboxState, products);
        setTotalprice(totalPrice);
    });//, [checkboxState, setTotalprice, itemQty]

    useEffect(() => {
        displayCartItems();
    }, [itemQty, itemsCount, products]);

    const toggleAllCheckboxes = (checked) => {
        const newCheckboxState = {};
        products.forEach((item) => {
            newCheckboxState[item.id] = checked;
        });
        setCheckboxState(newCheckboxState);
    };

    const handleCheckboxChange = (id) => {
        setCheckboxState((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const areAllCheckboxesChecked = () => {
        return products.every((item) => checkboxState[item.id]);
    };

    const displayCartItems = () => {
        axios
            .get("http://127.0.0.1:8000/cart/cartlist/")
            .then((res) => {
                setProducts(res.data);
                //console.log(res.data);
                //setItemsCount(products.length);
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
                    setItemQty(itemQty + 1);
                });
        } else {
            axios
                .put("http://127.0.0.1:8000/cart/edit/" + id + "/", {
                    amount: amount - 1,
                })
                .then((res) => {
                    setItemQty(itemQty - 1);
                });
        }
    };

    const productDelete = (id) => {
        axios
            .delete("http://127.0.0.1:8000/cart/edit/" + id + "/")
            .then((res) => {
                //console.log("deleted!", res);
                setItemsCount(itemsCount - 1);
            });
    };

    const deleteAllItems = () => {
        // Loop through each product and delete it by its ID
        products.forEach((item) => {
            productDelete(item.id);
        });

        // After deleting all items, update the state to an empty array
        setProducts([]);
        // Reset items count to 0
        setItemsCount(0);
    };

    return (
        <Box>
            <Box
                sx={{
                    bgcolor: "#ffffff",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                    marginBottom: "4rem",
                    marginBottom: "2rem",
                    width: "90%",
                }}
            >
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ flexGrow: 1, fontSize: "22px" }}
                >
                    Shopping Cart ({products.length})
                </Typography>

                <RadioGroup
                    sx={{ display: "flex", justifyContent: "center" }}
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                >
                    <Checkbox
                        icon={<CircleOutlinedIcon />}
                        checkedIcon={
                            <CheckCircleIcon sx={{ color: "#f8756f" }} />
                        }
                        type="checkbox"
                        id="option-all"
                        onChange={(e) => toggleAllCheckboxes(e.target.checked)}
                        checked={areAllCheckboxesChecked()}
                    />
                </RadioGroup>

                <Typography>Select all items</Typography>
                <IconButton aria-label="delete" onClick={deleteAllItems}>
                    <DeleteIcon />
                </IconButton>
            </Box>

            <Box>
                {products.map((item) => (
                    <Box
                        sx={{
                            bgcolor: "#ffffff",
                            marginTop: "1rem",
                            borderRadius: "1rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "1rem",
                            paddingLeft: "1rem",
                            height: "10rem",
                            width: "90%",
                            marginBottom: "2rem",
                        }}
                        key={item.id}
                    >
                        <Grid item container>
                            <Grid xs={12} sm={6} md={3}>
                                <RadioGroup
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        paddingRight: "3rem",
                                        paddingLeft: "1rem",
                                        paddingTop:"2.5rem",
                                    }}
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <Checkbox
                                        icon={<CircleOutlinedIcon />}
                                        checkedIcon={
                                            <CheckCircleIcon
                                                sx={{ color: "#f8756f" }}
                                            />
                                        }
                                        type="checkbox"
                                        id={item.id}
                                        onChange={() =>
                                            handleCheckboxChange(item.id)
                                        }
                                        checked={
                                            checkboxState[item.id] || false
                                        }
                                    />
                                    {item.name}
                                </RadioGroup>
                            </Grid>
                            <Grid xs={12} sm={6} md={3}>
                                <Box
                                    sx={{
                                        width: 128,
                                        height: 128,
                                        display: "flex",
                                        alignItems: "center",
                                        paddingLeft: "1rem",
                                    }}
                                >
                                    <img alt="complex" src={logo} height="100vh" width="80vw" />
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={6} md={3}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "left",
                                        width: "100%",
                                        paddingLeft: "7rem",
                                        marginTop:"1rem"
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            paddingTop: "1px",
                                        }}
                                        gutterBottom
                                        variant="subtitle1"
                                        component="div"
                                    >
                                        {item.p_name}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: "18px",
                                            paddingTop: "10px",
                                            fontWeight: 700,
                                        }}
                                        variant="p"
                                        gutterBottom
                                    >
                                        LKR {item.p_price}
                                    </Typography>

                                    <Typography
                                        sx={{ fontSize: "14px" }}
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        +shopping:
                                    </Typography>
                                </Box>
                            </Grid>
                            
                            <Grid xs={12} sm={6} md={3}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginTop:"1.5rem"
                                    }}
                                >
                                    <IconButton
                                        sx={{ mt: -2,fontSize: "1.5rem", }}
                                        onClick={() => {
                                            productDelete(item.id);
                                        }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            mt: 4,
                                        }}
                                    >
                                        <IconButton sx={{fontSize: "1.2rem",}}
                                            onClick={() =>
                                                changeItemQty(
                                                    item.id,
                                                    "-",
                                                    item.amount
                                                )
                                            }
                                        >
                                            <RemoveCircleIcon />{" "}
                                        </IconButton>

                                        <Typography sx={{ fontSize: "1.2rem" }}>{item.amount}</Typography>

                                        <IconButton sx={{fontSize: "1.2rem",}}
                                            onClick={() =>
                                                changeItemQty(
                                                    item.id,
                                                    "+",
                                                    item.amount
                                                )
                                            }
                                        >
                                            {" "}
                                            <AddCircleIcon />{" "}
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Card;