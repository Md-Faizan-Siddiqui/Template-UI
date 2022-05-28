import { Box, Typography } from "@mui/material";
import React from "react";
import Shape1 from "../../assets/Shape1.png";
import SmileFace from "../../assets/SmileFace.png";

const ServiceCard = ({ items }) => {
  return (
    <Box
      sx={{
        width: "274px",
        height: "200px",
        borderRadius: "16px",
        backgroundColor: "#ffff",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "rgba(100, 100, 111, 0.2) 5px 5px 15px 2px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          mb: "22px",
        }}
      >
        <img src={items.bgImage} alt="" />
        <img
          src={items.image}
          alt=""
          style={{
            position: "absolute",
            left: "15px",
            top: "20px",
          }}
        />
      </Box>
      <Typography
        sx={{
          fontSize: "26px",
          lineHeight: "40px",
          letterSpacing: "-0.3px",
          color: "#888888",
        }}
      >
        {items.text}
      </Typography>
    </Box>
  );
};

export default ServiceCard;
