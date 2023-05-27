import React,{ useState } from 'react';
import { Button } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Modal, ModalHeader} from 'reactstrap';

const [modal, setModal] = useState(false)

function Addproduct()
{
    return(
        <>
        <div>
            <Modal
                size="lg"
                isOpen={modal}
                toggle = {()=>setModal(!modal)}
            >
                <ModalHeader
                    toggle ={()=>setModal(!modal)}
                >
                     Hiii
                </ModalHeader>
            </Modal>
        </div>
        <div className="addprduct">
          <Button color="primary" variant="contained" onClick={()=>setModal(!modal)} sx={{ m:3  }} startIcon={<AddShoppingCartIcon />}>Add Product</Button>
        </div>
        </>
    );
}

export default Addproduct