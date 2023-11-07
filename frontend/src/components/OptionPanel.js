import React, { useState } from "react";

import { Box, Button, Typography, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { fabric } from "fabric";

function OptionPanel({ imgAdded }) {
  return (
    <Box sx={{ marginTop: "20px" }}>
      <Box
        sx={{ display: "flex", justifyContent: "right", marginRight: "10px" }}
      >
        <Typography>Product Variants</Typography>
      </Box>
      <Box>
        <TextField
          id="addDesign"
          label="File Input"
          type="file"
          accept="/image*"
          onChange={imgAdded}
        />
        <Button
          sx={{
            border: "1px dashed #000",
            width: "75%",
            height: "60px",
            margin: "10px 10px 10px 10px",
          }}
        >
          <AddIcon />
          <Typography>Add design</Typography>
        </Button>
      </Box>

      <Box>
        <Button
          sx={{
            border: "1px dashed #000",
            width: "75%",
            height: "60px",
            margin: "10px 10px 10px 10px",
          }}
        >
          <TextFieldsIcon />
          <Typography>Add Text</Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default OptionPanel;
