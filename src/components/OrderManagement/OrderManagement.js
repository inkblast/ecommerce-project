import React, { Component } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import {updateStatus} from '../../actions/orderManagementAction'
import { useSelector } from 'react-redux';

class OrderManagement extends Component {
    constructor(props){
        super(props);
        this.state={
            activeItem: {
                product_id : '',
                product_name : '',
                product_quentity : '',
                product_price : '',
                cust_name : '',
                cust_email : '',
                cust_address : '',
                cust_phone : ''
            },
              todoList: []
        };
        this.handleStatus = this.handleStatus.bind(this)
    }
    
    async componentDidMount() {
        try {
          const res = await fetch('http://127.0.0.1:8000/api/products/');
          const todoList = await res.json();
          this.setState({
            todoList
          });
        } catch (e) {
          console.log(e);
      }
    }
    handleStatus(e)
    {
        const {name , value} = e.target;
        updateStatus();
        const product = useSelector((state) => state.filter.product);
        product.map(item , id) => (
          if(item.product_id == )
        );

        

    }

  render() {
    const {todoList} = this.state;
    const drawerWidth = 240;
    return (
      <Box sx={{ display: "flex" }}>
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
          <Toolbar />
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>product_id</TableCell>
                    <TableCell>product_name</TableCell>
                    <TableCell >product_quentity</TableCell>
                    <TableCell>product_price</TableCell>
                    <TableCell>cust_name</TableCell>
                    <TableCell >cust_email</TableCell>
                    <TableCell>cust_address</TableCell>
                    <TableCell>cust_phone</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                {console.log(todoList)}
                <TableBody>
                  {todoList.map((item ,id) => (
                    <TableRow
                      key={id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell >{item.product_id}</TableCell>
                      <TableCell >{item.product_name}</TableCell>
                      <TableCell >{item.product_quentity}</TableCell>
                      <TableCell >{item.product_price}</TableCell>
                      <TableCell >{item.cust_name}</TableCell>
                      <TableCell >{item.cust_email}</TableCell>
                      <TableCell >{item.cust_address}</TableCell>
                      <TableCell >{item.cust_phone}</TableCell>
                      <TableCell > 
                        <Button name="open" value={item.product_id} onClick={this.handleStatus}>Open</Button>
                        <Button name="pending" value={item.product_id}  onClick={this.handleStatus}>Pending</Button>
                        <Button name="shiped" value={item.product_id} onClick={this.handleStatus}>Shiped</Button>
                        <Button name="receive" value={item.product_id} onClick={this.handleStatus}>Delivered</Button>
                    </TableCell>
                    </TableRow>
                  ))}
                  </TableBody>
              </Table>
            </TableContainer>
        </Box>
      </Box>
    );
  }
}

export default OrderManagement;
