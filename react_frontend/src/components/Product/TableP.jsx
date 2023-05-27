import React ,{ useEffect,useState } from 'react';
//import { useHistory,useParams } from 'react-router';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import {Button} from '@mui/material';
import axios from 'axios';
import {Modal, ModalBody, ModalHeader } from 'reactstrap';
import {FormGroup, FormControl, InputLabel, Input } from '@mui/material';









function TableP()
{
  const [details , setDetails] = useState([])
  //const history = useHistory()
  const [visible , setVisible] = useState(false)


    useEffect(()=>{
        fetch('http://127.0.0.1:8000/products/list/')
        .then(resp=> resp.json())
        .then(resp => setDetails(resp)
        //.catch(error => console.log(error))
        )
    },[])

      

    const deleteProduct = (id) => {
      const confirm = window.confirm("Would Like To Delete This Product?");
      if(confirm){
        axios.delete('http://127.0.0.1:8000/products/'+id) 
        location.reload();
      }
    }
    return(
        <>
        <div>
            <Modal 
              size='lg'
              isOpen={visible}
              toggle = {() => setVisible(!visible)}
            >
            <ModalHeader toggle = {() => setVisible(!visible)}>
              <Button>X</Button>
            </ModalHeader>
            <ModalBody>
            <div>
            <FormGroup sx={{
              width: '40%',
              height: '75%',
              m: 'auto',
              p: 10,
              border: "1px solid black",
              paddingTop:3,
              boxShadow:'0px 0px 8px rgba(0,0,0,0.5)',}}>
            <h1 style={{m:10}}>You Can Update the Product</h1> 
                <FormControl sx={{ mt:2}}>
                    <InputLabel>Product Name</InputLabel>
                    <Input />
                </FormControl>
                <FormControl sx={{ mt:2}}>
                    <InputLabel>Product Details</InputLabel>
                    <Input />
                </FormControl>
                <FormControl sx={{margin:5}}>
                    <Button variant="contained" color="secondary" >Update</Button>
                </FormControl>
            </FormGroup>
        </div>
            </ModalBody>
          </Modal>

        </div>
              {/* Above is Popup Update form and the Below one is always shown Table */}
            <div>
            <TableContainer component={Paper}>
      <Table style={{
              pl:20,
              m: 'auto'}} 
              aria-label="simple table">
        <TableHead>
          <TableRow align="center">
            <TableCell>ID</TableCell>
            <TableCell align="center" >Product Name</TableCell>
            <TableCell align="center">Product Details</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {details.map((product, index) => ( 
            <TableRow
            key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ mx:7 }}>
              {product.id}
              </TableCell>
              <TableCell align="right" style= {{width:200}}sx ={{ mx:7}}>{product.product_name}</TableCell>
              <TableCell align="right" sx={{ mx:7 }}>{product.product_details}</TableCell>
              <TableCell align="right" sx={{ mx:6 }}><Button color="success" variant="outlined" onClick={() => setVisible(true)} startIcon={<EditIcon />}>Update</Button>
                <Button  color="error" variant="outlined"  onClick={() => deleteProduct(product.id)} startIcon={<ClearIcon />} sx={{ml:2}}>Delete</Button>
              </TableCell>
            </TableRow>
            
            ))}
        </TableBody>
      </Table>
    </TableContainer>
            
            </div>
        </>
    )
}

export default TableP