import React from 'react'
import Notes from '../CNotes/Notes'
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";


function Index() {
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
          <Notes />
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
          <Notes />
        </Box>
        </Box>
    </>
  )
}

export default Index