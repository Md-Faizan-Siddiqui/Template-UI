import React from "react";
import { Grid } from "@mui/material";
import FirstBanner from "../../components/firstBanner";
import SecondBanner from "../../components/secondBanner";
import NavBar from "../../components/navBar";

const HomePage = () => {
  return (
    <Grid>
      <NavBar />
      <FirstBanner />
      <SecondBanner/>
    </Grid>
  );
};

export default HomePage;
