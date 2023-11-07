import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  CardContent,
  Container,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import { fabric } from "fabric";
import HeadBar from "./HeadBar";

function EditArea() {
  const [canvas, setCanvas] = useState();
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");
  const [backgroundImage, setBackgroundImage] = useState(`url(./white_tshirt.png)`);

  const styles = {
    paperContainer: {
      backgroundImage: `url(./white_tshirt.png)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  // useEffect(() => {
  //   addCanvas();
  // });
  const addCanvas = () => {
    const newCanvas = new fabric.Canvas("canvas", {
      height: 250,
      width: 250,
      backgroundColor: "rgba(0, 0, 0, 0)",
    });

    setCanvas(newCanvas);
  };

  const imgAdded = () => {
    const reader = new FileReader();
    const inputFile = document.getElementById("myImg");
    const file = inputFile.files[0];
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => {
      fabric.Image.fromURL(reader.result, (img) => {
        canvas.add(img);
        canvas.renderAll();
      });
    });
  };
  const handleColor = (e) => {
    setColor(e.target.value);
  };
  const handleTextChange = (event) => {
    setText(event.target.value);
    console.log("text", text);
  };
  const textAdded = () => {
    const newText = new fabric.Text(text, {
      left: 50,
      top: 50,
      fontFamily: "Arial",
      fontSize: 24,
      fill: `${color}`,
    });
    canvas.add(newText);
    canvas.renderAll();
  };

  const saveImageToDevice = () => {
    if (canvas) {
      const imageDataURL = canvas.toDataURL({ format: "png" });
      const a = document.createElement("a");
      a.href = imageDataURL;
      a.download = "edited_image.png";
      a.click();
    }
  };
  // const saveCompositeImage = () => {
  //   if (canvas && backgroundImage) {
  //     const compositeCanvas = new fabric.StaticCanvas();
  //     compositeCanvas.setWidth(backgroundImage.width);
  //     compositeCanvas.setHeight(backgroundImage.height);

  //     // Add the background image to the composite canvas
  //     compositeCanvas.add(backgroundImage);

  //     // Add the edited content (from your canvas) to the composite canvas
  //     const editedImage = new fabric.Image(canvas.toDataURL(), {
  //       left: 0,
  //       top: 0,
  //     });
  //     compositeCanvas.add(editedImage);

  //     // Create a data URL for the composite image
  //     const compositeDataURL = compositeCanvas.toDataURL({
  //       format: "png",
  //       quality: 1.0,
  //     });

  //     // Create a download link for the composite image
  //     const a = document.createElement("a");
  //     a.href = compositeDataURL;
  //     a.download = "composite_image.png";
  //     a.click();
  //   }
  // };
  return (
    /* <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '600px' ,width:'600px'}} >
            <Card sx={{backgroundColor:"transparent",border:'none'}}>
                <CardMedia
                sx={{ height: 400, mt:20}}
                 image='./white_tshirt.png'/>
            </Card>
        </Box >
      </Container>*/
    <Grid container spacing={2} sx={{ mt: "5" }}>
      <HeadBar/>
      <Grid item xs={8}>
        <Paper
          style={styles.paperContainer}
          sx={{
            height: 800,
            width: 800,
            backgroundColor: "#1A2027",
            backgroundImage: `url(./white_tshirt.png)`,
          }}
        >
          <Box
            sx={{
              border: "2px dashed black",
            }}
          >
            <canvas id="canvas" />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Card
          style={{
            alignContent: "center",
            justifyContent: "center",
            marginTop: "50px",
            marginRight: "30px",
          }}
        >
          <CardContent>
            <div
              style={{
                border: "1px dotted black",
                padding: "5px",
                borderRadius: "5px",
                margin: "3px",
              }}
            >
              <Typography>Choos Colour</Typography>
            </div>
            <div
              style={{
                border: "1px dotted black",
                padding: "5px",
                borderRadius: "5px",
                margin: "3px",
                display: "flex",
                flexDirection: "row", // Display children horizontally
                alignItems: "center", // Center align the children vertically
                backgroundColor: "#EEEDE7",
              }}
            >
              <RadioGroup
                aria-label="color"
                name="color"
                value={color}
                onChange={handleColor}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <FormControlLabel
                  value="black"
                  control={<Radio style={{ color: "black" }} />}
                  label="Black"
                  style={{ marginRight: "10px" }} // Add spacing between button and label
                />
                <FormControlLabel
                  value="green"
                  control={<Radio style={{ color: "green" }} />}
                  label="Green"
                  style={{ marginRight: "10px" }}
                />
                <FormControlLabel
                  value="white"
                  control={<Radio style={{ color: "white" }} />}
                  label="White"
                  style={{ marginRight: "10px" }}
                />
                <FormControlLabel
                  value="blue"
                  control={<Radio style={{ color: "blue" }} />}
                  label="Blue"
                  style={{ marginRight: "10px" }}
                />
              </RadioGroup>
            </div>
            <div
              style={{
                border: "1px dotted black",
                padding: "5px",
                borderRadius: "5px",
                margin: "3px",
                textAlign: "center",
              }}
            >
              <Button onClick={addCanvas}>Add canvas </Button>
            </div>
            <div
              style={{
                padding: "5px",
                margin: "3px",
              }}
            >
              <TextField
                label=""
                id="myImg"
                type="file"
                accept="/image*"
                onChange={imgAdded}
                style={{ width: "100%" }}
              />
            </div>
            <div
              style={{
                padding: "5px",
                margin: "3px",
              }}
            >
              <TextField
                id="myText"
                label="Text Input"
                type="text"
                onChange={handleTextChange}
                style={{ width: "100%" }}
              />
            </div>
            <div
              style={{
                border: "1px dotted black",
                padding: "5px",
                borderRadius: "5px",
                margin: "3px",
                textAlign: "center",
              }}
            >
              <Button onClick={textAdded}>Add Text</Button>
            </div>
          </CardContent>
        </Card>
        <Card sx={{ marginTop: "5px" }}>
          <CardContent>
            <div
              style={{
                border: "1px dotted black",
                padding: "5px",
                borderRadius: "5px",
                margin: "3px",
                textAlign: "center",
                backgroundColor: "#FFA384",
              }}
            >
              <Button onClick={textAdded} sx={{ color: "white" }}>
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card sx={{ marginTop: "5px" }}>
          <CardContent>
            <div
              style={{
                border: "1px dotted black",
                padding: "5px",
                borderRadius: "5px",
                margin: "3px",
                textAlign: "center",
              }}
            >
              <Button onClick={saveImageToDevice}>Save to Device</Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default EditArea;
