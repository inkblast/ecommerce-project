import React,{useState} from "react";
import { Typography, Box, Button,  FormControlLabel,  FormControl, FormLabel, RadioGroup, Radio , DialogTitle , Dialog, IconButton} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

import ChangeAddress from '../Address/ChangeAddress';
import Payment from '../Payment/Payment';
import SavedAddress from "../Address/SavedAddress";
import SavedCard from '../Payment/SavedCard'
import EditAddress from "../Address/EditAddress";


function Delivery(){
    const navigate = useNavigate();
 
// choosing payment type
    const [hiddenCard , setHiddenCard] = useState(true);
    const [paymentType, setPaymentType] = useState("");
    const changePay = (event) => {
        setPaymentType(event.target.value);
        if(event.target.value === "cardPay"){
            setHiddenCard(false)
        }else{
            setHiddenCard(true)
        }
    } 

    const [isOpenAddress , setIsOpenAddress] = useState(false);
    const closeAddress = () =>{
        setIsOpenAddress(false)
    }
    const openAddress = () =>{
        setIsOpenAddress(true)
    }

    const [isOpenCardDetails , setIsOpenCardDetails] = useState(false);
    const closeCardDetails= () =>{
        setIsOpenCardDetails(false)
    }
    const openCardDetails = () =>{
        setIsOpenCardDetails(true)
    }

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
    const defaultAddress = formData.filter((address) => address.default === true);
    
    const [chooseAddress] = useState(() =>{
        if(defaultAddress[0].name && defaultAddress[0].phone && defaultAddress[0].addressLine1 && defaultAddress[0].addressLine2 && defaultAddress[0].city && defaultAddress[0].province){
            return true;
        }
        else{
            return false;
        }
    })
    

    const [cardData,setCardData] = useState({
        number: "4234123412341234",
        month:"12",
        year:"2025",
        cvc: "123",
        name: "Imesh Nuwantha",
    })

    const [chooseCard] = useState(() =>{
        if(cardData.number && cardData.month && cardData.year && cardData.cvc &&cardData.name){
            return true;
        }
        else{
            return false;
        }
    })

    const [pressPopUpAddAddress,isPressPopUpAddAddress] = useState(false);
    const [popUpAddAddress, setPopUpAddAddress] = useState(false);
    const [hideAddAddress] = useState(() => {
        if(pressPopUpAddAddress){
            setPopUpAddAddress(true);
        }   
        else{
            
        }
        
    })

    const [editAddress, setEditAddress] = useState(false);
    const editAddressButton =(id)=>{
        setEditAddress(true);
    }
    const closeEditAddress = () => {
        setEditAddress(false);
    }

    return(
        <div sx={{}}>
            <form>
                <Box sx={{ height:"100px" }}>

                </Box>
                <Box variant="outlined" color="success" sx={{bgcolor:"#ebe6e6", display: "flex", alignitems:"center" ,margin:"1rem",padding : "1rem"}}>
                    <Box sx={{ margin: "1rem", width:"60%"}}>
{/*Change Shippping Address */}
                        <Box sx={{  justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" ,bgcolor: "#ffffff",color: "",p: 1,borderRadius: "16px",flexGrow: 1,paddingRight:"24px"}} >
                            {!chooseAddress && (<Button onClick={openAddress} sx={{ display: "flex", alignItems: "center" ,justifyContent:'center',height:"100%", width:"100%",paddingY:"45px",border: "1px dashed #000000",borderRadius: "8px",margin : "8px",alignItems:"center"}}>
                                        <AddIcon sx={{color:"#969494"}}/>
                                        <Typography fontSize={16} sx={{ color:"#969494" }}> Add Shipping Address</Typography>
                            </Button>)}
                                
                            {chooseAddress &&(
                            <div>
                                <Box>
                                    <Typography variant="h6" gutterBottom  sx={{ fontWeight: 'bold', m: 1 }}>
                                        Shipping Address
                                    </Typography>
                                </Box>
                                <Box display={"flex"}>
                                    <Box sx={{display:"flex",width:"90%"}}>
                                        <SavedAddress name={defaultAddress[0].name} phone={defaultAddress[0].phone} addressLine1={defaultAddress[0].addressLine1} addressLine2={defaultAddress[0].addressLine2}> </SavedAddress>
                                    </Box>
                                    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                        <Button onClick={openAddress} sx={{textTransform:"none",alignItems:"center",justifyContent:"center",fontWeight: 'bold', m: 1 , color:"#F8756F",fontSize:"22"}}>
                                            Change
                                        </Button>
                                        
                                    </Box>
                                </Box>
                            </div>)}
                        </Box>
{/* Change Shipping Address after button click */}
                            <Dialog  open={isOpenAddress} sx={{ width:"1006",height:"546" }}>
                                    <Box sx={{ align:"right" }}>
                                        <IconButton onClick={closeAddress}>
                                            <CloseIcon></CloseIcon>
                                        </IconButton>
                                    </Box>
                                    {!popUpAddAddress && 
                                        <div>
                                            {formData.map((address,index)=>(
                                            <div key={index}>
                                                <Box display={"flex"} sx={{ m: 1, }}>
                                                    <Box sx={{ marginLeft:"8px" ,display:"flex",alignItems:"center",justifyContent:"center" }}>
                                                        <FormControlLabel name="selectCard"  value="selectCard" control={<Radio sx={{'&.Mui-checked': {color: '#F8756F',}}} /> }fontSize="18" ></FormControlLabel>
                                                    </Box>
                                                    <Box sx={{display:"flex",width:"90%"}}>
                                                        <SavedAddress name={address.name} phone={address.phone} addressLine1={address.addressLine1} addressLine2={address.addressLine2}> </SavedAddress>
                                                    </Box>
                                                    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                                        <Button onClick={()=>editAddressButton(index)} sx={{textTransform:"none",alignItems:"center",justifyContent:"center",fontWeight: 'bold', m: 1 , color:"#F8756F",fontSize:"22"}}>
                                                            Edit
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </div>
                                            ))}
                                            
                                            <Box sx={{ display:"flex" ,alignItems:"center",justifyContent:"center"}}>
                                                <Button onClick={openAddress} sx={{display: "flex",textTransform:"none",fontStyle:"bold", bgcolor:"#F8756F",color:"#ffffff",fontsize:"22px", fontWeight: 'bold',borderRadius:"20px",width:"90%"}}>Add new</Button>
                                            </Box>
                                            <br></br><br></br>
                                        </div>
                                    }
                                {popUpAddAddress && <div>
                                    <Box sx={{ display:"flex", justifyContent: "space-between" }}>
                                        <DialogTitle variant="h5" gutterBottom sx={{ fontWeight: 'bold', m: 1,align:"center",alignItems:"center",width:"90%",justifyContent:'center',}}>Add new Address</DialogTitle>
                                        
                                    </Box>
                                    <ChangeAddress ></ChangeAddress>
                                    <Box sx={{ display:"flex", m:0.5 ,p:0.5}}>
                                        <Button 
                                            variant="contained" 
                                            color="info" 
                                            //onClick={openAddress} 
                                            type="submit"
                                            sx={{ m:0.5 ,p:0.5,textTransform:"none"}}>Confirm
                                        </Button>
                                        <Button 
                                            variant="contained" 
                                            color="info" 
                                            onClick={closeAddress} 
                                            sx={{ m:0.5 ,p:0.5,textTransform:"none"}}>Cancel
                                        </Button>
                                    </Box>
                                </div>}
                        </Dialog>
{/* Edit address */}
                        <Dialog open={editAddress}>
                            <Box sx={{ align:"right" }}>
                                <IconButton onClick={closeEditAddress}>
                                    <CloseIcon></CloseIcon>
                                </IconButton>
                            </Box>
                            <Box>
                                <EditAddress></EditAddress>
                            </Box>
                        </Dialog>
{/* Payment methods */}
{/* Choose Payment types */}
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem", marginBottom: "1rem" ,bgcolor: "#ffffff",color: "",p: 1,borderRadius: "16px",flexGrow: 1,}} >
                            <FormControl component="fieldset">
                                <FormLabel component="legend" value={paymentType}  sx={{ fontWeight: 'bold', m: 1 , color:"black" , fontSize:"22"}}>Payment methods</FormLabel>
                                <RadioGroup onChange={changePay} row >
                                    <FormControlLabel name="cardPay"  value="cardPay"  control={<Radio sx={{'&.Mui-checked': {color: '#F8756F',}}} /> } fontSize="18" label="Credit or Debit card" ></FormControlLabel>
                                    <FormControlLabel name="cashPay"  value="cashPay" control={<Radio sx={{'&.Mui-checked': {color: '#F8756F',}}} /> }fontSize="18" label="Cash on delivery" ></FormControlLabel>
                                </RadioGroup>
                            </FormControl>
                        </Box>
{/* Card details */}
                        {!hiddenCard &&(
                            <div>
                                {!chooseCard && (<Box  sx={{  justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" ,bgcolor: "#ffffff",color: "",p: 1,borderRadius: "16px",flexGrow: 1,paddingRight:"24px"}} >
                                        
                                    <Button  onClick={openCardDetails} sx={{ display: "flex", alignItems: "center" ,justifyContent:'center',height:"100%", width:"100%",border: "1px dashed #000000",borderRadius: "8px",paddingY:"45px",margin : "8px",alignItems:"center"}}>
                                            <AddIcon sx={{color:"#969494"}}/>
                                            <Typography fontSize={16} sx={{color:"#969494"}}> Add Card</Typography>
                                    </Button>
                                </Box>)}
                                
                                {chooseCard && (<Box  sx={{ justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" ,bgcolor: "#ffffff",color: "",p: 1,borderRadius: "16px",flexGrow: 1,paddingRight:"24px"}} >
                                    <Box display={"flex"}>
                                        <Box sx={{display:"flex",width:"90%",alignItems:"center"}}>
                                            <SavedCard number={cardData.number} ></SavedCard>
                                        </Box>
                                        <Box>
                                            <Button onClick={openCardDetails} sx={{textTransform:"none",alignItems:"center",justifyContent:"center",fontWeight: 'bold', m: 1 , color:"#F8756F",fontSize:"22"}}>
                                                Change
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>)}
                            </div>
                        )}
{/* empty card details */}
                        <Dialog fullWidth open={isOpenCardDetails} 
                            // PaperProps={{style: {width: "2000px",height: "1046px",},}}
                        >
                            <Box>
                                <Box sx={{ display:"flex", justifyContent: "space-between" }}>
                                    <DialogTitle variant="h5" gutterBottom sx={{display:"flex", fontWeight: 'bold', m: 1,align:"center",alignItems:"center",width:"90%",justifyContent:'center',}}>Add a Card information</DialogTitle>
                                    <Box sx={{ align:"right" }}>
                                        <IconButton onClick={closeCardDetails}>
                                            <CloseIcon></CloseIcon>
                                        </IconButton>
                                    </Box>
                                </Box>
                                <Payment></Payment>
                                <Box sx={{ display:"flex",alignItems:"center",justifyContent:"center", m:0.5 ,p:0.5}}>
                                    <Button 
                                        variant="contained" 
                                        //onClick={ChangeAddress.saveForm} 
                                        type="submit"
                                        sx={{ m:0.5 ,p:0.5,textTransform:"none",bgcolor:"#F8756F"}}>Confirm
                                    </Button>
                                </Box>
                            </Box>
                        </Dialog>
{/* Shipping methods */}
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem", bgcolor: "#ffffff",color: "",p: 1,borderRadius: "16px",flexGrow: 1,}} >
                            <FormControl component="fieldset">
                                <FormLabel component="legend"   sx={{ fontWeight: 'bold', m: 1 , color:"black",fontSize:"22"}}>Shipping methods</FormLabel>    
                            </FormControl>
                        </Box>
                    </Box>
{/* Summary */}
                    <Box sx={{ width:"40%",marginRight:"1rem"}}>
                        <Box sx={{ width:"100%",justifyContent: "space-between", alignItems: "center", marginTop: "1rem", marginBottom: "1rem" ,bgcolor: "#ffffff",p: 1,borderRadius: "16px",flexGrow: 1, }} >
                            <FormControl component="fieldset" sx={{ width: "100%" , alignItems: "center",}}>
                                <FormLabel component="legend"  sx={{ fontWeight: 'bold', m: 1 , color:"black",fontSize:"22"}}>Summary</FormLabel>
                                <Button sx={{textTransform:"none",fontStyle:"bold", bgcolor:"#F8756F",color:"#ffffff",fontsize:"22px", fontWeight: 'bold',borderRadius:"20px",width:"90%"}}>Pay Now</Button>
                            </FormControl>
                        </Box>
                    </Box>
                </Box>
                
            </form>
            
        </div>
    );
} 
export default Delivery;
