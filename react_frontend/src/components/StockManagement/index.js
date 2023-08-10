import React from 'react'
import Stock from '../StockManagement/Stock'
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";


function index() {
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
          style={{ marginLeft: "340px",marginTop: "30px" }}
        >
          <Stock />
        </Box>
        </Box>
    </>
  )
}

export default index