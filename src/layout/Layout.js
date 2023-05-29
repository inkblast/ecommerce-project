import React, { Fragment } from "react";
import Product from "../components/Product";
import Deliveries from "../components/Deliveries";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";

function Layout() {
  return (
    <Fragment>
      <div style={{ display: "flex" }}>
        <IconButton>
          <DashboardIcon style={{ color: "#145DA0" }} />
        </IconButton>
        <Typography variant="h4">Dashboard</Typography>
      </div>

      <Stack direction="row" spacing={2}>
        <Product />
        <Deliveries />
        <Deliveries />
      </Stack>
    </Fragment>
  );
}

export default Layout;
