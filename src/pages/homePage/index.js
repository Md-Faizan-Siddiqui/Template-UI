import React from "react";
import { Grid } from "@mui/material";
import FirstBanner from "../../components/firstBanner";
import SecondBanner from "../../components/secondBanner";
import NavBar from "../../components/navBar";
import Beautyselling from "../../components/beautySelling"

const HomePage = () => {
  return (
    <Grid>
      <NavBar />
      <FirstBanner />
      <SecondBanner/>
      <Beautyselling/>
    </Grid>
  );
};

export default HomePage;
