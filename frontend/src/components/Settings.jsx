import React from "react";
import { Typography, Box, Button,  FormControlLabel,  FormControl, FormLabel, RadioGroup, Radio , DialogTitle , Dialog, IconButton} from "@mui/material";

function Settings(){
    return(
        <Box>
            <Box>
                <Button>
                    <Typography variant="h6">Change email Address</Typography>
                </Button>
            </Box>
            <Box>
                <Button>
                    <Typography variant="h6">Change password</Typography>
                </Button>
            </Box>
        </Box>
    );
}

export default Settings;