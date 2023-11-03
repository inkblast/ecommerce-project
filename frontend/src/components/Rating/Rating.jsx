import React from 'react';
import { Box,Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import useStyles from './Rating.style';

function Rating(props) {

    const classes = useStyles();

    const stars =['','','','','']
    return (
        <Box>
            <Box className={classes.container}>
                    {
                        stars.map((item,index) =>(
                            <StarIcon  className={classes.iconStyle}/>
                        ))
                    }
        </Box>
                <Box>
                    <Typography className={classes.txt}>(88)</Typography>
                </Box>
        </Box>
        
    );
}

export default Rating;