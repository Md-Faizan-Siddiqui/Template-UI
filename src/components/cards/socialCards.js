import React from "react";
import { Box, Typography } from "@mui/material";

const SocialCards = ({ cardImg, cardText, width, height, padding, mb }) => {
  return (
    <Box
      sx={{
        width: "260px",
        height: "180px",
        borderRadius: "16px",
        backgroundColor: "#ffff",
        boxShadow: "rgba(100, 100, 111, 0.2) 5px 5px 15px 2px",
        padding: padding ? padding : "20px 0 0 20px",
      }}
    >
      <Box
        sx={{
          width: width ? width : "230px",
          height: height ? height : "110px",
          mb: mb ? mb : "5px",
        }}
      >
        <img src={cardImg} alt="" width="100%" height="100%" />
      </Box>
      <Typography
        sx={{
          padding: padding ? "0" : "0px 0 0 12px",
          fontSize: "14px",
          lineHeight: "22px",
          letterSpacing: "-0.3px",
          color: "#888888",
        }}
      >
        {cardText}
      </Typography>
    </Box>
  );
};

export default SocialCards;
