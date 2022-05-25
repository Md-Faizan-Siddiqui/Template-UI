import React from "react";
import { Box, Typography } from "@mui/material";
import BeautieslifeIcons from "../../assets/BeautieslifeIcons.png";

const SocialCards = () => {
  return (
    <Box
      sx={{
        width: "260px",
        height: "180px",
        // border:"1px solid black",
        borderRadius: "16px",
        backgroundColor: "#ffff",
        boxShadow: "rgba(100, 100, 111, 0.2) 5px 5px 15px 2px",
        padding: "30px 0 0 30px",
      }}
    >
      <Box
        sx={{
          width: "170px",
          height: "80px",
        }}
      >
        <img src={BeautieslifeIcons} alt="" width="100%" height="100%" />
      </Box>
      <Typography>SocialCards</Typography>
    </Box>
  );
};

export default SocialCards;
