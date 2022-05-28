import { Box } from "@mui/material";
import React from "react";
import Container from "../container";
import FooterImage from "../../assets/FooterImage.png";

const Footer = () => {
  return (
    <Box sx={{
        position:"relative"
    }}>
      <Box
        sx={{
            position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Box
          sx={{
            // position: "relative",
            width: "540px",
            height: "450px",
            backgroundColor: "#EE9591",
            borderRadius: "0 150px 0 0",
          }}
        ></Box>
        <Box
          sx={{
            // position: "absolute",
            right: "0px",
            bottom: "0px",
            width: "465px",
            height: "281px",
            justifyContent: "flex-end",
          }}
        >
          <img src={FooterImage} alt="" width="100%" height="100%" />
        </Box>
      </Box>
      <Box>
          
      <Container>
          <Box>HEllo</Box>
          <Box>woitelk</Box>
      </Container>
      </Box>
    </Box>
  );
};

export default Footer;
