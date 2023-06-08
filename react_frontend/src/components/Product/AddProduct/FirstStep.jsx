import React from 'react';
import { Button, TextField} from '@mui/material';
import { multiStepContext } from './StepContext';
import { useContext } from 'react';

export default function FirstStep() {
    const {setStep ,userData, setUserData} = useContext(multiStepContext);
  return (
    <div>
        <div>
            <TextField label="Category ID" value={userData['cid']} onChange={(e)=>setUserData({...userData, 'cid' :e.target.value})} margin="normal" variant="outlined" color="secondary" />
        </div>
        <div>
            <TextField label="Product Name" value={userData['pname']} onChange={(e)=>setUserData({...userData, 'pname' :e.target.value})} margin="normal" variant="outlined" color="secondary" />
        </div>
        <div>
            <TextField label="Description" value={userData['pdes']} onChange={(e)=>setUserData({...userData, 'pdes' :e.target.value})} margin="normal" variant="outlined" color="secondary" />
        </div>
        <div>
            <TextField label="Quantity" value={userData['qty']} onChange={(e)=>setUserData({...userData, 'qty' :e.target.value})} margin="normal" variant="outlined" color="secondary" />
        </div>
        <div>
            <Button sx={{ml:9,mt:2}} variant="contained" color="primary" onClick={()=>setStep(2)}>Next</Button>
        </div>
    </div>
  )
}
