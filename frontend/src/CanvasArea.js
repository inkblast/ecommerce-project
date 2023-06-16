import React, { useState, useEffect, useRef } from 'react';
import {fabric} from 'fabric'

function CanvasApp() {

  const [canvas,setCanvas] = useState();
  const [text,setText] = useState('');
  
const addCanvas = () => {

  const newCanvas = new fabric.Canvas('canvas',{

    height:500,
    width:500,
    backgroundColor:"pink"
  })

  setCanvas(newCanvas)
}
 
 


 
  
  const addRect =()=>{

   
    const rect = new fabric.Rect({
      height:100,
      width:50,
      fill:'red'
    })
    
    canvas.add(rect);
    canvas.renderAll();
  }

  const imageAdded = () =>{

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

  const addText = ()=>{

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
    <div>
      <button onClick={addCanvas}>Add Canvas</button>
      <button onClick={addRect}>Add Rect</button>
      <input type='file' accept='image/*' id='myImg' onChange={imageAdded}></input>
      <input type='text' onChange={handleTextChange}></input>
      <button onClick={addText}>Add Text</button>
      <canvas id='canvas' />
    </div>
  );
}

export default CanvasApp;
