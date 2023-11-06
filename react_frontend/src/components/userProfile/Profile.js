import React from 'react'
import User from '../userProfile/User'
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";


function Profile() {
    const drawerWidth = 240;
  return (
    <>
        <Box sx={{  display: { xs: 'none', md: 'flex' }}}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
          style={{ marginLeft: "240px",marginTop: "30px" }}
        >
          <User />
        </Box>
        </Box>
        <Box sx={{  display: { xs: 'flex', md: 'none' }}}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
          style={{ marginLeft: "0px",marginTop: "30px" }}
        >
          <User />
        </Box>
        </Box>
    </>
  )
}

export default Profile