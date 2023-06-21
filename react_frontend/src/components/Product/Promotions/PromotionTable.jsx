import React ,{ useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import CategoryIcon from '@mui/icons-material/Category';
import Stack from '@mui/material/Stack';
//import Grid from '@mui/material/Grid';

function PromotionTable()
{
  const [details , setDetails] = useState([])
  const [sdate , setSdate] = useState([])
  const [edate , setEdate] = useState([])
  const [editId , setEditId] = useState(-1)
  const [udescription , setDescription] = useState("")
  const [uname,setName] = useState("")
  //const [uimage, setImage] = useState()
  const navigate = useNavigate()

    useEffect(()=>{
        fetch('http://localhost:8000/products/prlist/')
        .then(resp=> resp.json())
        .then(resp => setDetails(resp)
        //.catch(error => console.log(error))
        )
    },[])

    const updateProduct = (id) => {
        axios.get('http://localhost:8000/products/prid='+id)
        .then(res =>{
          setName(res.data.name)
          setDescription(res.data.description)
          setSdate(res.data.start_date)
          setEdate(res.data.end_date)
        })
        setEditId(id);
    }

    const handleUpdate = async() => {
      /*let formField = new FormData()
        formField.append('category_id', editCid)
        formField.append('name', uproduct_name)
        formField.append('description', uproduct_details)
        formField.append('quantity', uquantity)
        formField.append('price', uprice)

        await axios({
            method: 'put',
            url: 'http://127.0.0.1:8000/products/'+editId,
            data: formField
        }).then((response)=>{
            console.log(response.data);
            location.reload();
        })*/
      axios.put('http://localhost:8000/products/prid='+editId, {name:uname, description:udescription,start_date:sdate, end_date:edate })
      .then(res => {
        console.log(res);
        setEditId(-1);
        location.reload(); 
      }).catch(err => console.log(err));
      location.reload();
    
    }


    const deleteProduct = (id) => {
      const confirm = window.confirm("Would Like To Delete This Product?");
      if(confirm){
        axios.delete('http://localhost:8000/products/prid='+id) 
        location.reload();
      }
    }
    return(
        <>
          <Stack spacing={6} direction="row" sx={{ m:3}}>
            <Button style={{backgroundColor:'#448aff', color: 'white', height:'40px'}} variant="contained" onClick={()=>navigate('addpromotion')}  startIcon={<CategoryIcon />}>Add Promotoin</Button>
          </Stack>
          <div>
            <TableContainer component={Paper}>
      <Table style={{
              pl:20,
              m: 'auto'}} 
              aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{backgroundColor:'#e8eaf6', color: 'black',}}>Product ID</TableCell>
            <TableCell align="center" style={{backgroundColor:'#e8eaf6', color: 'black',}}>Product Name</TableCell>
            <TableCell align="center" style={{backgroundColor:'#e8eaf6', color: 'black',}}>Description</TableCell>
            <TableCell align="center" style={{backgroundColor:'#e8eaf6', color: 'black',}}>Start Date</TableCell>
            <TableCell align="center" style={{backgroundColor:'#e8eaf6', color: 'black',}}>End Date</TableCell>
            <TableCell align="center" style={{backgroundColor:'#e8eaf6', color: 'black',}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {details.map((product, index) => ( 
          product.id === editId ?
            <TableRow
            key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center" width="125px">
              {product.id}
              </TableCell>
              <TableCell component="th" scope="row" align="center" width="150px">
              <Input
                type="text"
                value={uname}
                onChange={(e)=>setName(e.target.value)} 
                />
              </TableCell>
              <TableCell  align="center" width="300px">
                <Input
                type="text"
                value={udescription}
                onChange={(e)=>setDescription(e.target.value)} 
                />
              </TableCell>
              <TableCell  align="center" width="150px">
                <Input
                type="text"
                value={sdate}
                onChange={(e)=>setSdate(e.target.value)} 
                />
              </TableCell>
              <TableCell  align="center" width="150px">
                <Input
                type="text"
                value={edate}
                onChange={(e)=>setEdate(e.target.value)} 
                />
              </TableCell>
              <TableCell  align="center"><Button color="success" variant="outlined" onClick={()=>handleUpdate()}  startIcon={<DoneIcon />} width="300px">Done</Button>
              </TableCell>
            </TableRow>
            :
            <TableRow
            key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center" width="125px">{product.id}</TableCell>
              <TableCell align="center"  width="250px">{product.name}</TableCell>
              <TableCell align="center" width="500px">{product.description}</TableCell>
              <TableCell align="center" width="200px">{product.start_date}</TableCell>
              <TableCell align="center" width="200px">{product.end_date}</TableCell>
              <TableCell align="center" sx={{ mx:6 }}><Button color="success" variant="outlined" onClick={()=>updateProduct(product.id)}  startIcon={<EditIcon />}>Update</Button>
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

export default PromotionTable