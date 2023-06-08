import React from 'react'
import { Button, TextField} from '@mui/material';
import { useContext } from 'react';
import { multiStepContext } from './StepContext';
import Stack from '@mui/material/Stack';

export default function SecondStep() {
    const {setStep ,userData, setUserData,submitData} = useContext(multiStepContext);
  return (
    <div style={{mt:1}}>
        <div>
            <TextField label="Category_ID" value={userData['cid']} onChange={(e)=>setUserData({...userData, 'cid' :e.target.value})} margin="normal" variant="outlined" color="secondary" />
        </div>
        <div>
            <TextField value={userData['photo']} onChange={(e)=>setUserData({...userData, 'photo' :e.target.value})} margin="normal" variant="outlined" color="secondary" type="file" />
        </div>
        <Stack sx={{ml:6,mt:2}} direction="row" spacing={3}>
            <Button variant="contained" color="secondary" onClick={()=>setStep(1)}>Back</Button>
            <Button variant="contained" color="primary" onClick={submitData}>Add Product</Button>
        </Stack>
    </div>
  )
}
