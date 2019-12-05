import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Menu from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";

interface IProps {
  className?: string
}

export default function Layout(props: IProps) {
  return (
    <div className={props.className}>
      {/* Header */}
      <AppBar position="static">
        <Toolbar style={{display: "flex"}}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6" >
            Electronic Data Capture
          </Typography>
          <div style={{display: "inline-flex", flexGrow: 1}}>

          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Box m={2}>
        <Grid container={true} justify={"center"}>
          <Grid item={true} lg={3}>
            <Typography variant={"h3"}>Driver</Typography>
            <Typography variant={"body1"}>
              Scientific workflows within pharma/biotech research vary greatly, however, many commonalities exist including
              the need to electronically capture information from experimental research. Based on analysis of the market and
              of previous lost deals, ChemAxon’s current offering will remain noncompetitive unless above listed needs are
              addressed within the scope of our solutions.
            </Typography>
          </Grid>
        </Grid>
      </Box>

    </div>
  );
}