import React, { useState } from "react";
import { Box, Tab } from '@mui/material';
import { TabPanel, TabContext, TabList } from '@mui/lab';
import Overview from "./Overview";

function User() {
  const [value, setValue] = useState('overview');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabListStyles = {
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: 'column',
    width: '200vw',
    height: '3vh',

    '@media (min-width: 600px)': {
      flexDirection: 'row',
    },

    // Add more media queries as needed
  };

  const tabStyles = {
    fontSize: "0.6em",

    '@media (min-width: 600px)': {
      fontSize: "0.8em",
    },

    // Add more media queries as needed
  };

  return (
    <TabContext value={value}>
      <Box sx={{ display: "flex" }}>
        <TabList onChange={handleChange} orientation="horizontal" sx={tabListStyles}>
          <Tab label="Overview" value="overview" sx={tabStyles} />
        </TabList>
     </Box>
        <Box sx={{ width: "100%", height: "100vh" }}>
          <TabPanel value="overview"><Overview /></TabPanel>
        </Box>
      
    </TabContext>
  );
}

export default User;
