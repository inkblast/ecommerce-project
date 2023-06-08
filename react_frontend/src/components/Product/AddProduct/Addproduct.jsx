import React,{ useContext } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import {Stepper,StepLabel,Step} from '@mui/material';
import { multiStepContext } from './StepContext';
import Box from "@mui/material/Box";

export default function Addproduct() {
    const drawerWidth = 240;

    const { currentStep} = useContext(multiStepContext)

    function ShowStep(step) {
        switch(step){
            case 1 :
                return <FirstStep />
            case 2 :
                return <SecondStep />
        }
    }
  return (
    <div>
        iiiiiiiiiiiiiiiiiiiiiiiiiii
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
          style={{ marginLeft: "240px" }}
        >
        <Stepper style={{ width:"20%"}} activestep={currentStep -1} orientation="horizontal">
            <Step>
                <StepLabel></StepLabel>
            </Step>
            <Step>
                <StepLabel></StepLabel>
            </Step>
        </Stepper>
        <div>
           {ShowStep(currentStep)} 
        </div>
        </Box>
    </div>
  )
}
