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
import { Input } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

function TableP()
{
  const [details , setDetails] = useState([])
  const [editId , setEditId] = useState(-1)
  const [uproduct_name,setProduct_name] = useState("")
  const [uproduct_details,setProduct_details] = useState("")


    useEffect(()=>{
        fetch('http://127.0.0.1:8000/products/list/')
        .then(resp=> resp.json())
        .then(resp => setDetails(resp)
        //.catch(error => console.log(error))
        )
    },[])

    const updateProduct = async (id) => {
        axios.get('http://127.0.0.1:8000/products/'+id)
        .then(res =>{
          setProduct_details(res.data.product_details)
          setProduct_name(res.data.product_name)
        })
        setEditId(id);
    }

    const handleUpdate = () => {
      axios.put('http://127.0.0.1:8000/products/'+editId, {id:editId , product_name:uproduct_name , product_details:uproduct_details})
      .then(res => {
        console.log(res);
        location.reload();
        setEditId(-1);
      }).catch(err => console.log(err));
      location.reload();
      
    }


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
          product.id === editId ?
            <TableRow
            key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ mx:7 }}>
              {product.id}
              </TableCell>
              <TableCell align="right" style= {{width:200}}sx ={{ mx:7}}>
                <Input
                type="text"
                value={uproduct_name}
                onChange={(e)=>setProduct_name(e.target.value)} 
                />
              </TableCell>
              <TableCell align="right" sx={{ mx:7 }}>
                <Input
                type="text"
                value={uproduct_details}
                onChange={(e)=> setProduct_details(e.target.value)}
                />
              </TableCell>
              <TableCell align="right" sx={{ mx:6 }}><Button color="success" variant="outlined" onClick={()=>handleUpdate()}  startIcon={<DoneIcon />}>Done</Button>
              </TableCell>
            </TableRow>
            :
            <TableRow
            key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ mx:7 }}>
              {product.id}
              </TableCell>
              <TableCell align="right" style= {{width:200}}sx ={{ mx:7}}>{product.product_name}</TableCell>
              <TableCell align="right" sx={{ mx:7 }}>{product.product_details}</TableCell>
              <TableCell align="right" sx={{ mx:6 }}><Button color="success" variant="outlined" onClick={()=>updateProduct(product.id)}  startIcon={<EditIcon />}>Update</Button>
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