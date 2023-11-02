import React,{ useState } from "react";
import { Box, Tab} from '@mui/material';
import { TabPanel, TabContext, TabList } from '@mui/lab';
import Overview from "./Overview";
import Orders from "./Orders";
import Payment from "./Payment";
import Settings from "./Settings";
import Shipping from "./Shipping";

function UserProfile(){
    const [value, setValue] = React.useState('overview');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <TabContext value={value}  >
            <Box sx={{ display:"flex", }}>
                <TabList onChange={handleChange}  orientation="vertical" sx={{ backgroundColor: "#f0f0f0", display: "flex", alignItems: "flex-start",width:"25vw" ,height:"100vh" }}>
                        <Tab label="Overview" value="overview" sx={{fontSize:"30px"}}/>
                        <Tab label="Orders" value="orders" sx={{fontSize:"30px"}} />
                        <Tab label="Payment" value="payment" sx={{fontSize:"30px"}} />
                        <Tab label="Settings" value="settings" sx={{fontSize:"30px"}} />
                        <Tab label="Shipping address" value="shipping" sx={{fontSize:"30px"}} />
                </TabList>
                <Box sx={{ width:"75vw",height:"100vh"  }}>
                    <TabPanel value="overview" ><Overview/></TabPanel>
                    <TabPanel value="orders"><Orders/></TabPanel>
                    <TabPanel value="payment"><Payment/></TabPanel>
                    <TabPanel value="settings"><Settings/></TabPanel>
                    <TabPanel value="shipping"><Shipping/></TabPanel>
                </Box>
            </Box>
        </TabContext>
    );
}

export default UserProfile;