import React from "react";
import { Box, Grid } from "@mui/material";
import FirstBanner from "../../components/firstBanner";
import SecondBanner from "../../components/secondBanner";
import NavBar from "../../components/navBar";
import Beautyselling from "../../components/beautySelling"
import Pokonya from "../../components/pokonya"
import Mentor from "../../components/mentor";
import Testimonial from "../../components/testimonial"
import Footer from "../../components/footer";

const HomePage = () => {
  return (
    <Box>
      <NavBar />
      <FirstBanner />
      <SecondBanner/>
      <Beautyselling/>
      <Pokonya/>
      <Mentor/>
      <Testimonial/>
      <Footer/>
    </Box>
  );
};

export default HomePage;
