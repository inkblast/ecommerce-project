import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import index from '../StockManagement';

function Notes() {
    return(
        <>
        <Box>
            <FormControl>
                <FormLabel sx={{fontSize:20, fontWeight:800, }}>Order Number:</FormLabel>
                <TextField sx={{m:2, width: 400}} type="text" variant='outlined' defaultValue="Order Number" />
                <FormLabel sx={{fontSize:20, fontWeight:800, }}>Document Number:</FormLabel>
                <TextField sx={{m:2, width: 400}} type="text" variant='outlined' defaultValue="Document Number" />
            </FormControl>
            <FormControl>
                <FormLabel sx={{fontSize:20, fontWeight:800, }}>From</FormLabel>
                <TextField sx={{m:2, width: 400}} type="date" variant='outlined'  />
                <FormLabel sx={{fontSize:20, fontWeight:800}}>To</FormLabel>
                <TextField sx={{m:2}} type="date" variant='outlined'   />
            </FormControl>
            
        </Box>
        <Button sx = {{m:2 , ml:49}}variant="contained">Search</Button>
        <Box>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Document No</TableCell>
            <TableCell align="right">Order No</TableCell>
            <TableCell align="right">Order Date</TableCell>
            <TableCell align="right">Ship-to Name</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
        </Box>

        </>
    );   
}

export default Notes;
