import React,{useState} from "react";
import {Card,Button,TextField,Checkbox, CardContent , CardHeader, Select, MenuItem, InputLabel, FormControl} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MuiTelInput } from "mui-tel-input";

function ChangeAddress(){
    const navigate = useNavigate();
    const [province,setProvince] = useState('');
    const [phone , setPhone] = useState("+94");
    const [isClickedSave , setIsClickedSave] = useState(false);

    const [formData,setFormData] = useState({
        fname:"",
        lname:"",
        phone:phone,
        streetAddress:"",
        city:"",
        province:province,
        default:""
    })

    const changePhone = (newPhone) => {
        setPhone(newPhone);
        //console.log(newPhone)
    }

     const handleSelectChange = (event) => {
        setProvince(event.target.value);
        //console.log(event.target.value)
    };
    const onChangeHandler = (event) => {
        
        const {name,value} = event.target
        
        
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
    };
    
  

    const saveForm = () => {
        if(formData.fname !="" && formData.lname !="" && formData.streetAddress !="" && formData.city !=""){
            navigate('/payment')
        }
        setIsClickedSave(true);
    }

    console.log(formData)

    return(
        <form>
            <Card variant="Filled" color="success" sx={{ m:2 ,p:2 ,border:2,bordercolor:'success.main'}} align="center" >
                <CardHeader title="Change Address" ></CardHeader>
                <CardContent>
                    <TextField 
                        label="First Name" 
                        required 
                        name="fname"
                        type="text"
                        value={formData.fname}
                        onChange={onChangeHandler}
                        helperText ={isClickedSave && !formData.fname ? "Please enter your first name " : ""}
                        error={isClickedSave && !formData.fname}
                        sx={{ m:0.5 ,p:0.5}}
                        variant="outlined">
                    </TextField><br></br>

                    <TextField 
                        label="Last Name" 
                        required 
                        name="lname"
                        type="text"
                        value={formData.lname}
                        onChange={onChangeHandler}
                        helperText ={isClickedSave && !formData.lname ? "Please enter your last name " : ""}
                        error={isClickedSave && !formData.lname}
                        sx={{ m:0.5 ,p:0.5}}
                        variant="outlined">
                    </TextField><br></br>

                    <MuiTelInput 
                        label="Phone number"
                        required 
                        onChange={changePhone}
                        //defaultCountry="lk"
                        //onlyCountries={["LK"]}
                       // disableDropdown
                        name="phone"
                        value={phone} 
                        sx={{ m:0.5 ,p:0.5}}
                        variant="outlined"
                        inputProps={{ maxLength : 15}}
                        // helperText ={isClickedSave && !formData.tel ? "Please enter your phone number " : ""}
                        // error={isClickedSave && !formData.tel}
                        >
                    </MuiTelInput><br></br>

                    <TextField 
                        label="Street Address"
                        required 
                        defaultValue=""
                        name="streetAddress"
                        value={formData.streetAddress}
                        helperText ={isClickedSave && !formData.streetAddress ? "Please enter your street address " : ""}
                        error={isClickedSave && !formData.streetAddress}
                        onChange={onChangeHandler} 
                        sx={{ m:0.5 ,p:0.5}}
                        type="" 
                        variant="outlined">
                    </TextField><br></br>

                    <TextField 
                        label="City" 
                        required 
                        defaultValue="" 
                        name="city"
                        value={formData.city}
                        helperText ={isClickedSave && !formData.city ? "Please enter your city " : ""}
                        error={isClickedSave && !formData.city}
                        onChange={onChangeHandler}
                        type="" 
                        sx={{ m:0.5 ,p:0.5}}
                        variant="outlined">
                    </TextField><br></br>
                    <FormControl style={{ width: '230px' }}>
                    <InputLabel id="provinceId" >Province</InputLabel>
                    <Select 
                        name = "province"
                        value={province}
                        required
                        labelId="provinceId"  
                        helperText ={isClickedSave && !province ? "Please enter your province " : ""}
                        error={isClickedSave && !province}
                        onChange={handleSelectChange}
                        sx={{ m:0.5 ,p:0.5}} 
                        >
                            <MenuItem value={"Western"} >Western Province</MenuItem>
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
                    <br></br>

                    <Checkbox name="default" label ="Save as default address"></Checkbox>
                        
                    <br></br>
                    <div sx={{ m:0.5 ,p:0.5}}>
                        <Button 
                            variant="contained" 
                            color="info" 
                            onClick={() => navigate("/")} 
                            sx={{ m:0.5 ,p:0.5}}>Back
                        </Button>
                        <Button 
                            variant="contained" 
                            color="info" 
                            onClick={saveForm} 
                            sx={{ m:0.5 ,p:0.5}}>Save
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </form>
    );
} 

export default ChangeAddress;
