import React, {useState} from "react";
import {Box,Button,Container, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import {fabric} from 'fabric'

function EditArea(){

  const [canvas,setCanvas] = useState();
  const [text,setText] = useState('');



  const styles = {
  paperContainer: {
    backgroundImage: `url(./white_tshirt.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
  },

 
};

const addCanvas = () => {

  const newCanvas = new fabric.Canvas('canvas',{

    height:250,
    width:250,
    backgroundColor: 'rgba(0, 0, 0, 0)',
   
    
  })

  setCanvas(newCanvas)

 
}


const imgAdded = () =>{

  const reader  = new FileReader();
  const inputFile = document.getElementById('myImg');
  
  const file = inputFile.files[0];
  reader.readAsDataURL(file);
  reader.addEventListener('load',()=>{

    fabric.Image.fromURL(reader.result,img => {
      canvas.add(img);
      canvas.renderAll();
    })
  })


}


const handleTextChange = (event) =>{

  setText(event.target.value);


}
const textAdded = ()=>{

  const newText = new fabric.Text(text,{
    left: 50,
    top: 50,
    fontFamily: 'Arial',
    fontSize: 24,
    fill: 'black'
  })

  canvas.add(newText);
  canvas.renderAll();

}
    return(
       /* <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '600px' ,width:'600px'}} >
            <Card sx={{backgroundColor:"transparent",border:'none'}}>
                <CardMedia
                sx={{ height: 400, mt:20}}
                 image='./white_tshirt.png'/>
            </Card>
        </Box >
      </Container>*/

      <Grid container spacing={2} sx={{mt:'5'}}>

        <Grid item xs={8} >
            <Paper style={styles.paperContainer}
                sx={{
                  height:  800,
                  width: 800,
                  backgroundColor:'#1A2027',
                  backgroundImage:'./white-tshirt.png'
                }}
              >
                <Box
                sx={{
                  border: '2px dashed black',
                  
                }}>
                <canvas id='canvas' />
                </Box>
                
                
                
              </Paper>
        </Grid>

        <Grid item xs={4}>
          <Typography>item 4</Typography>
          <Button onClick={addCanvas}>Add canvas </Button>
          <TextField
          id="myImg"
        label="File Input"
        type="file"
        accept='/image*'
        onChange={imgAdded}
      />
      <TextField
          id="myText"
        label="Text Input"
        type="text"
       
        onChange={handleTextChange}
      />
      <Button onClick={textAdded}>Add Text</Button>
        </Grid>

      </Grid>
    );
}

export default EditArea;