import React from 'react'
import Charts from '../Analysis/Charts'
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";


function Index() {
    const drawerWidth = 240;
  return (
    <>
        <Box sx={{ display: "flex" }}>
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
          <Charts />
        </Box>
        </Box>
    </>
  )
}

export default Index