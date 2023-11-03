import React,{ useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import "./style.css";
// import { red } from '@mui/material/colors';
// import { green } from '@mui/material/colors';
//import Paper from '@mui/material/Paper';


function index() {

    const [data, setData] = useState([]);
    // const [progress,setProgress] = useState();
    // const [line, setLine] = useState();
    useEffect (()=> {
        fetch('http://localhost:8000/products/plist/').
        then(resp=>resp.json()).
        then(resp => setData(resp))
    },[])
    // React.useEffect(() => {
    //     setProgress((currentProgress) =>
    //        currentProgress >= 100 ? 1 : line
    //     );
    // }, [line]);
  return (
    <>
         <TableContainer>
      <Table sx={{ maxWidth: 1450 }} aria-label="simple table">
        <TableHead>
          <TableRow  sx={{backgroundColor: "#d5d9d8"}} >
            <TableCell align="center">Status</TableCell>
            <TableCell>ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell sx={{paddingLeft: "50px"}}>Quantity</TableCell>
            <TableCell align="left">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow
              key={data.category_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor:"#DCE6EC" }}
            >
              <TableCell align="center">
                <div className='status'
                   style={{ backgroundColor: data.quantity == 0 ? "red" : data.quantity <= 50 ? "yellow" : "green" }} >
                </div>
              </TableCell>
              <TableCell component="th" scope="data">
                {data.category_id}
              </TableCell>
              <TableCell align="left">{data.name}</TableCell>
              <TableCell align="left">{data.description}</TableCell>
              <TableCell align="left">
              <Typography style={{paddingLeft: "30px"}}>{data.quantity} / 500</Typography>

                <div className = "mainLineDiv">
                    <div className = "childLineDiv" style = {{ width: `${data.quantity * 100 / 500}%` }}>
                    <span> </span>
                    </div>
                </div>
              </TableCell>
              <TableCell align="left">{data.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default index