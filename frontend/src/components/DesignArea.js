import React, { useState, useRef, useEffect } from "react";
import { Box, Typography,Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { fabric } from "fabric";
import BlackTshirt from '../assets/blackT.png'
import IconButton from "@mui/material/IconButton";
import CircleIcon from '@mui/icons-material/Circle';
import Grid from "@mui/material/Grid";


import HeadBar from './HeadBar';
import OptionPanel from "./OptionPanel";

const useStyles = makeStyles({

  container:{
    display:'flex',
   position:'relative'
  },


  editAreaContainer:{
    width:'60%',
    height:450,
    backgroundColor:"orange",
    justifyContent:"center",
    alignItems:"center"
  },

  optionPanelContainer:{

   width:'40%',
    backgroundColor:"blue"
  },

  canvasStyle:{

    border:'1px dashed black',
    position:'absolute',
    width: 150,
    height: 200,
    top:50,
    left:100
  }
   
  });

function DesignArea(){

    

    const classes = useStyles();
    const [canvas,setCanvas] = useState();
    const [text,setText] = useState('');
    const canvasRef = useRef(null);

    
/*useEffect(()=>{

  addCanvas();
},[]) */

 const addCanvas = () => {
  const element = document.getElementById('canvas')
    const newcanvas = new fabric.Canvas(element, {
      containerClass:'classes.canvasStyle'
    });

    setCanvas(newcanvas);
    console.log(element)
    
  };


  
    
const imgAdded = () =>{

    const reader  = new FileReader();
    const inputFile = document.getElementById('addDesign');
    console.log(inputFile);
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


  return (
    <Box>
    <HeadBar />
    <Box className={classes.container}>
      <Box className={classes.editAreaContainer}>
       {/* <img
        
        src ={BlackTshirt}
        
  />*/}
        <canvas ref={canvasRef} id='canvas' className={classes.canvasStyle}  />
      </Box>
      <Box className={classes.optionPanelContainer}>
        <OptionPanel imgAdded={imgAdded}/>
      </Box>
    </Box>

    <Button onClick={addCanvas}>Add canvas</Button>
    
      
    
    </Box>
  );
}


export default DesignArea;