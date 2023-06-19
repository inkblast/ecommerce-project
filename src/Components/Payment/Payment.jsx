import React ,{ useState }from "react";
import { withStyles } from '@material-ui/core/styles'
import {Card , TextField, CardContent , Select, MenuItem, InputLabel, FormControl , Checkbox, Box} from "@mui/material";
import { useNavigate } from "react-router-dom";


function Payment(){
    const navigate = useNavigate();

    const [month , setMonth] = useState("");

    const [year , setYear] = useState('');
    
    const navToPage = (url) =>{
        navigate(url)
    };
    
    const [state, setState] = useState({
        number: "",
        month:month,
        year:year,
        cvc: "",
        name: "",
        focus: "",
    });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        
        setState((prev) => ({ 
            ...prev, 
            [name]: value 
        }));
      }
      console.log(month)
    
    const handleInputFocus = (event) => {
        setState((prev) => ({ 
            ...prev, 
            focus: event.target.name 
        }));
    }

    const handleSubmit = (event) =>{
        event.preventDefault()

        if(state.name && state.cvc && state.expireMonth && state.expireYear && state.focus && state.number ){
            console.log("done")
        }
    }

    const handleSelectMonth = (event) => {
        setMonth(event.target.value);
    };

    const handleSelectYear = (event) => {
        setYear(event.target.value);
    };

    const monthArray= [];
    if (monthArray.length === 0){
        for(let i= 1; i<=12;i++){
            monthArray.push(i);
        }
    }

    const CustomCheckbox = withStyles({
        root: {
          padding: '6px',
          '&$checked': {
            color: 'blue',
          },
        },
        checked: {},
      })((props) => <Checkbox {...props} />);

    return(
        <div >
            <Box>
            <form onSubmit={handleSubmit}>
                
                <Card variant="outlined" color="success" sx={{ m:2 ,p:2}}>
                    <CardContent>
                        <div>
                            <Box>
                                <TextField
                                label="Card number" 
                                name="number"
                                value={state.number}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                sx={{ m:0.5 ,p:0.5}}
                                type="tel"
                                inputProps={{ maxLength:16}}
                                variant="outlined"
                                
                                ></TextField>
                                
                                <TextField  
                                    label="Card holder" 
                                    name="name"
                                    value={state.name}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                    sx={{ m:0.5 ,p:0.5}} 
                                    
                                    type="" 
                                    variant="outlined">
                                </TextField><br></br>
                            </Box>

                            <label margin="0.5" padding="0.5">Expire Date</label><br></br>
                            <Box display={"flex"}>
                                <Box>
                                    <FormControl style={{ width: '120px' }}>
                                        <InputLabel id="monthId" >Month</InputLabel>
                                        <Select 
                                            name = "month"
                                            value={month}
                                            required
                                            labelId="monthId"
                                            onChange={handleSelectMonth}
                                            sx={{ m:0.5 ,p:0.5}} 
                                            >
                                                {
                                                    monthArray.map((number,index) =>(
                                                        <MenuItem key={index} value={number}>{number}</MenuItem>
                                                    ))
                                                }
                                        </Select>
                                    </FormControl>
                                    <FormControl style={{ width: '120px' }}>
                                    <InputLabel id="yearId" >Year</InputLabel>
                                        <Select 
                                            name = "year"
                                            value={year}
                                            required
                                            labelId="yearId" 
                                            onChange={handleSelectYear}
                                            sx={{ m:0.5 ,p:0.5}} 
                                            >
                                                <MenuItem value="2023">2023</MenuItem>
                                                <MenuItem value="2024">2024</MenuItem>
                                                <MenuItem value="2025">2025</MenuItem>
                                                <MenuItem value="2026">2026</MenuItem>
                                                <MenuItem value="2027">2027</MenuItem>
                                                <MenuItem value="2028">2028</MenuItem>
                                                <MenuItem value="2029">2029</MenuItem>
                                                <MenuItem value="2030">2030</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            <TextField 
                                label="CVC" 
                                name="cvc"
                                value={state.cvc}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                sx={{ m:0.5 ,p:0.5}}
                                type="tel" 
                                inputProps={{maxLength:3}}
                                variant="outlined">
                            </TextField>
                            </Box>
                            
                            <CustomCheckbox
                                icon={<span className="radio-button"></span>}
                                checkedIcon={<span className="radio-button checked"></span>}
                                inputProps={{ 'aria-label': 'checkbox' }}
                            />
                            
                            
                        </div>
                        <br></br>
                        
                        
                    </CardContent>
                </Card>
            </form>
            </Box>
        </div>
        
    );
}

export default Payment;