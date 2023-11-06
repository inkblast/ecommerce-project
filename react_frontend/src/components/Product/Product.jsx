import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import TableP from './TableP';

function Product()
{
  const drawerWidth = 240;
  
 return(
  <>
    
      <Box sx={{display: { xs: 'none', md: 'flex' } }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
          style={{ marginLeft: "240px" }}
        >
          <TableP />
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
          style={{ marginLeft: "0px" }}
        >
          <TableP />
        </Box>
        </Box>

  </>
 ) ;
}

export default Product