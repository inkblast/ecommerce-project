import React,{useState} from "react";
import {Card,TextField,Checkbox, CardContent , Select, MenuItem, InputLabel, FormControl ,FormControlLabel, Box, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MuiTelInput } from "mui-tel-input";

function EditAddress(){
    const navigate = useNavigate();
    const [province,setProvince] = useState('');
    const [phone , setPhone] = useState("");

    const [formData,setFormData] = useState({
        id:"",
        name:"",
        phone:phone,
        addressLine1:"",
        addressLine2:"",
        city:"",
        province:province,
        default:""
    })

    const changePhone = (newPhone) => {
        setPhone(newPhone);
    }

    const handleSelectChange = (event) => {
        setProvince(event.target.value);
    };
    const onChangeHandler = (event) => {
        
        const {name,value} = event.target
        
        
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
    };

    const handleSubmit = (event) =>{
        event.preventDefault()

        if(formData.name && formData.streetAddress && formData.city && province && phone ){
            console.log("done")
            navigate('/payment')
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <Card variant="Filled" color="success" sx={{ }}  >
                <CardContent>
                    <Box >
                        <Typography variant="h7" gutterBottom  sx={{ fontWeight: 'bold', m: 1 }}>Personal Info</Typography>
                        <Box sx={{ display:"flex", width:"100%" }}>
                            <Box sx={{  width:"50%" }}>
                                <TextField 
                                    label="Name" 
                                    required
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={onChangeHandler}
                                    //helperText ={isClickedSave && !formData.fname ? "Please enter your first name " : ""}
                                    //error={isClickedSave && !formData.fname}
                                    sx={{ m:0.5 ,p:0.5}}
                                    variant="outlined">
                                </TextField>
                            </Box>

                            <Box sx={{  width:"50%" }}>
                                <MuiTelInput 
                                    label="Contact number"
                                    required 
                                    onChange={changePhone}
                                    defaultCountry="LK"
                                    onlyCountries={["LK"]}
                                    disableDropdown
                                    name="phone"
                                    value={phone} 
                                    prefix="+94"
                                    sx={{ m:0.5 ,p:0.5}}
                                    variant="outlined"
                                    inputProps={{ maxLength : 15}}
                                    // helperText ={isClickedSave && (!phone || phone=="+94")? "Please enter your phone number " : ""}
                                    // error={isClickedSave && (!phone || phone=="+94")}
                                    >
                                </MuiTelInput>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="h7" gutterBottom  sx={{ fontWeight: 'bold', m: 1 }}>Address</Typography>
                        <Box sx={{ display:"flex", width:"100%" }}>
                            <Box sx={{  width:"50%" }}>
                                <TextField 
                                    label="Address line 1"
                                    required 
                                    name="addressLine1"
                                    value={formData.addressLine1}
                                    // helperText ={isClickedSave && !formData.streetAddress ? "Please enter your street address " : ""}
                                    // error={isClickedSave && !formData.streetAddress}
                                    onChange={onChangeHandler} 
                                    sx={{ m:0.5 ,p:0.5}}
                                    type="" 
                                    variant="outlined">
                                </TextField>
                            </Box>
                            <Box sx={{  width:"50%" }}>
                                <TextField 
                                    label="Address line 2"
                                    required 
                                    name="addressLine2"
                                    value={formData.addressLine2}
                                    // helperText ={isClickedSave && !formData.streetAddress ? "Please enter your street address " : ""}
                                    // error={isClickedSave && !formData.streetAddress}
                                    onChange={onChangeHandler} 
                                    sx={{ m:0.5 ,p:0.5}}
                                    type="" 
                                    variant="outlined">
                                </TextField>
                            </Box>
                        </Box>
                        <Box sx={{ display:"flex", width:"100%" }}>
                            <Box sx={{  width:"50%" }}>
                                <TextField 
                                    label="City" 
                                    required 
                                    name="city"
                                    value={formData.city}
                                    // helperText ={isClickedSave && !formData.city ? "Please enter your city " : ""}
                                    // error={isClickedSave && !formData.city}
                                    onChange={onChangeHandler}
                                    type="" 
                                    sx={{ m:0.5 ,p:0.5,}}
                                    variant="outlined"
                                    >
                                </TextField>
                            </Box>
                            <Box sx={{  width:"50%" }}>
                                <FormControl style={{ width: '230px' }}>
                                    <InputLabel id="provinceId" >Province</InputLabel>
                                    <Select 
                                        name = "province"
                                        value={province}
                                        required
                                        labelId="provinceId"  
                                        // helperText ={isClickedSave && !province ? "Please enter your province " : ""}
                                        // error={isClickedSave && !province}
                                        onChange={handleSelectChange}
                                        sx={{ m:0.5 ,p:0.5}} 
                                        >
                                            <MenuItem value="Western">Western Province</MenuItem>
                                            <MenuItem value="Central">Central Province</MenuItem>
                                            <MenuItem value="Southern">Southern Province</MenuItem>
                                            <MenuItem value="Northern">Northern Province</MenuItem>
                                            <MenuItem value="Eastern">Eastern Province</MenuItem>
                                            <MenuItem value="North Western">North Western Province</MenuItem>
                                            <MenuItem value="North Central">North Central Province</MenuItem>
                                            <MenuItem value="Uva">Uva Province</MenuItem>
                                            <MenuItem value="Sabaragamuwa">Sabaragamuwa Province</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                    </Box>
                    <br></br>

                    <FormControlLabel sx={{ margin:"0"}} control={<Checkbox name="default" onChange={onChangeHandler} value={formData.default} sx={{ "&.Mui-checked": {color: "#F8756F", },"&.MuiCheckbox-colorSecondary": {color: "#F8756F", },"&.Mui-checked.MuiCheckbox-colorSecondary": {backgroundColor: "#000000",}, }}/>} label="Set as default" />
                        
                    <br></br>
                </CardContent>
            </Card>
        </form>
    );
} 

export default EditAddress;
