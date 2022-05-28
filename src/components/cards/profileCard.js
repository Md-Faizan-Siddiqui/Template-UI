import { Grid, Typography } from "@mui/material";
import React from "react";

const ProfileCard = ({ items }) => {
  console.log("items", items);
  return (
    <Grid>
      <Grid
        sx={{
          width: "274px",
          height: "320px",
          mb: "26px",
          borderRadius: "16px",
          filter: "drop-shadow(5px 5px 10px gray)",
        }}
      >
        <Grid
          sx={{
            position: "absolute",
          }}
        >
          {" "}
          <img
            src={items.image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "16px",
            }}
          />
        </Grid>
        <Grid
          sx={{
            opacity: "0.3",
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "16px",
            backgroundColor: "#EE9591",
          }}
        ></Grid>
      </Grid>
      <Typography
        sx={{
          color: "#555555",
          fontWeight: "Bold",
          fontSize: "18px",
          lineHeight: "28px",
          letterSpacing: "0.2px",
          mb: "4px",
        }}
      >
        {items.name}
      </Typography>
      <Typography
        sx={{
          color: "#EE9591",
          fontSize: "14px",
          lineHeight: "22px",
          letterSpacing: "0.2px",
          mb: "4px",
        }}
      >
        {items.title}
      </Typography>
      <Typography
        sx={{
          color: "#888888",
          fontSize: "14px",
          lineHeight: "22px",
          letterSpacing: "0.2px",
        }}
      >
        {items.position}
      </Typography>
    </Grid>
  );
};

export default ProfileCard;
