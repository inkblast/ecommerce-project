import React from 'react';

import Header from '../../components/Header'
import LeftDrawer from '../../components/LeftDrawer';
import TableP from './TableP';


import Box from "@mui/material/Box";
import Addproduct from './Addproduct';



function Product()
{
 return(
  <>
    <Header />
      <Box
        sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}
      >
        <LeftDrawer />
        <Box>
          <Addproduct />
          <TableP />
        </Box>

      </Box>
  </>
 ) ;
}

export default Product