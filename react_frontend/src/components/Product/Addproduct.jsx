import React ,{ useState } from 'react';
import { Button } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import {FormGroup, FormControl, InputLabel, Input } from '@mui/material';
import axios from 'axios';

{/*function addprduct()
{
    alert("Click the addProduct")
}*/}

function Addproduct()
{
    //const history = useHistory();
    const [modal, setModal] = useState(false)

    const [product_name, setProduct_name] = useState("")
    const [product_details, setProduct_details] = useState("")
    const [category_id, setCategory_id] = useState()

    const add = async () => {
        let formField = new FormData()
        formField.append('category_id', category_id)
        formField.append('name', product_name)
        formField.append('description', product_details)

        await axios({
            method: 'post',
            url: 'http://localhost:8000/products/add/',
            data: formField
        }).then((response)=>{
            console.log(response.data);
            location.reload();
        })
    }
    return(
        <div>
            <div>
                <Modal
                    size='lg'
                    isOpen={modal}
                    toggle = {()=>setModal(!modal)}
                >
                    <ModalHeader
                        toggle ={()=>setModal(!modal)}
                    >
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
                 <h1 style={{m:10}}>Add Product</h1>
                 <FormControl sx={{ mt:2}}>
                         <InputLabel>Category ID</InputLabel>
                         <Input
                         type="text" 
                         name="category_id" 
                         value={category_id}
                         onChange={(e)=>setCategory_id(e.target.value)} />
                     </FormControl> 
                     <FormControl sx={{ mt:2}}>
                         <InputLabel>Product Name</InputLabel>
                         <Input
                         type="text" 
                         name="product_name" 
                         value={product_name}
                         onChange={(e)=>setProduct_name(e.target.value)} />
                     </FormControl>
                        <FormControl sx={{ mt:2}}>
                         <InputLabel>Product Details</InputLabel>
                            <Input
                            type="text"
                             name="product_details"  
                             value={product_details}
                             onChange={(e)=> setProduct_details(e.target.value)} />
                      </FormControl>
                     <FormControl sx={{margin:5}}>
                         <Button variant="contained" color="success" onClick={()=>add()} >Add</Button>
                         <Button variant="contained" color="error" sx={{ mt:2}} onClick={()=>setModal(false)}>Cancel</Button>
                        </FormControl>
                    </FormGroup>
                </div>
                    </ModalBody>
                </Modal>
            </div>
            <Button style={{backgroundColor:'#448aff', color: 'white',}} variant="contained" onClick={()=>setModal(true)} sx={{ m:3  }} startIcon={<AddShoppingCartIcon />}>Add Product</Button>
        </div>
    );
}

export default Addproduct