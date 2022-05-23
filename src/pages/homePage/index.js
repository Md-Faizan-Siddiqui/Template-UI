import React from "react";
import { Grid } from "@mui/material";
import FirstBanner from "../../components/firstBanner";
import NavBar from "../../components/navBar";

const HomePage = () => {
  return (
    <Grid>
      <NavBar />
      <FirstBanner />
    </Grid>
  );
};

export default HomePage;
