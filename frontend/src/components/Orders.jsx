import React,{ useState } from "react";
import { Box, Tab} from '@mui/material';
import { TabPanel, TabContext, TabList } from '@mui/lab';
import All from "./Orders/All";
import Completed from "./Orders/Completed";
import Processing from "./Orders/Processing";
import Shipped from "./Orders/Shipped";
import Unpaid from "./Orders/Unpaid";


function Orders(){
    const [value, setValue] = useState('all');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <Box>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="All" value="all" sx={{ width:"200px",fontSize:"25px" }}/>
                        <Tab label="Unpaid" value="unpaid" sx={{ width:"200px",fontSize:"25px" }}/>
                        <Tab label="Processing" value="processing" sx={{ width:"200px",fontSize:"25px" }}/>
                        <Tab label="Shipped" value="shipped" sx={{ width:"200px",fontSize:"25px" }}/>
                        <Tab label="Completed" value="completed" sx={{ width:"200px",fontSize:"25px" }}/>
                    </TabList>
                </Box>
                <TabPanel value="all"><All/></TabPanel>
                <TabPanel value="unpaid"><Unpaid/></TabPanel>
                <TabPanel value="processing"><Processing/></TabPanel>
                <TabPanel value="shipped"><Shipped/></TabPanel>
                <TabPanel value="completed"><Completed/></TabPanel>

            </TabContext>
        </Box>
    );
}

export default Orders;