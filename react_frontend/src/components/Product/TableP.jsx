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
//import Grid from '@mui/material/Grid';

function TableP()
{
  const [details , setDetails] = useState([])
  const [editId , setEditId] = useState(-1)
  const [editCid , setCid] = useState(-1)
  const [uproduct_name,setProduct_name] = useState("")
  const [uproduct_details,setProduct_details] = useState("")


    useEffect(()=>{
        fetch('http://localhost:8000/products/list/')
        .then(resp=> resp.json())
        .then(resp => setDetails(resp)
        //.catch(error => console.log(error))
        )
    },[])

    const updateProduct = (id,cid) => {
        axios.get('http://127.0.0.1:8000/products/'+id)
        .then(res =>{
          setProduct_details(res.data.description)
          setProduct_name(res.data.name)
        })
        setCid(cid);
        setEditId(id);
    }

    const handleUpdate = () => {
      /*let formField = new FormData()
        formField.append('category_id', editCid)
        formField.append('name', uproduct_name)
        formField.append('description', uproduct_details)

        await axios({
            method: 'put',
            url: 'http://127.0.0.1:8000/products/'+editId,
            data: formField
        }).then((response)=>{
            console.log(response.data);
            location.reload();
        })*/
      axios.put('http://127.0.0.1:8000/products/'+editId, {category_id:editCid , name:uproduct_name , description:uproduct_details})
      .then(res => {
        console.log(res);
        setEditId(-1);
        setCid(-1);
        location.reload(); 
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
            <TableCell>Product ID</TableCell>
            <TableCell>Category ID</TableCell>
            <TableCell  >Product Name</TableCell>
            <TableCell >Product Details</TableCell>
            <TableCell >Action</TableCell>
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
              <TableCell component="th" scope="row" sx={{ mx:7 }}>
              <Input
                type="text"
                value={editCid}
                onChange={(e)=>setCid(e.target.value)} 
                />
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
                onChange={(e)=>setProduct_details(e.target.value)}
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
              <TableCell component="th" scope="row" xs={2}>{product.id}</TableCell>
              <TableCell align="right" style= {{}}sx ={{}}>{product.category_id}</TableCell>
              <TableCell align="right" style= {{width:200}}sx ={{ }}>{product.name}</TableCell>
              <TableCell align="right" sx={{ mx:7 }}>{product.description}</TableCell>
              <TableCell align="right" sx={{ mx:6 }}><Button color="success" variant="outlined" onClick={()=>updateProduct(product.id,product.category_id)}  startIcon={<EditIcon />}>Update</Button>
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