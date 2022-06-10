import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Container from "../container";
import FirstBannerImg from "../../assets/1stBannerImg.png";
import Dots from "../../assets/Dots.png";

const FirstBanner = () => {
  const style = {
    circleBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "22px",
      height: "22px",
      borderRadius: "50%",
      backgroundColor: "#f5dbda",
      mr: "8px",
    },
    circleBox1: {
      width: "11px",
      height: "11px",
      borderRadius: "50%",
      backgroundColor: "#EE9591",
    },
  };
  return (
    <Box sx={{ backgroundColor: "#FEF8F8", pt: 9, px: "80px", pb: "119px" }}>
      <Container>
        <Grid container>
          <Grid item xs="12" md="6">
            <Box sx={{ width: "108px", height: "32px", mb: "23px" }}>
              <img src={Dots} alt="" width="100%" height="100%" />
            </Box>

            <Typography
              sx={{
                color: "#555555",
                fontWeight: "700",
                fontSize: {xs:"50px",sm:"60px",lg:"70px"},
                lineHeight: {xs:"60px",sm:"70px",lg:"80px"},
                letterSpacing: "0.3px",
                width: "593px",
                mb: "30px",
              }}
            >
              Pasti berat <br /> kalo lari sendirian
              <Box component="span" sx={{ color: "#EE9591" }}>
                .
              </Box>
            </Typography>
            <Typography
              sx={{
                color: "#888888",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "26px",
                letterSpacing: "-0.3px",
                width: "460px",
                pb: "30px",
              }}
            >
              Setiap hal pasti butuh hal lain untuk membersamai.
              <br /> Begitupun dengan bisnis, Beautieslfie.id hadir untuk
              membersamai kalian untuk menjadi{" "}
              <b>
                <u>Beautypreneur</u>
              </b>
              . Siapapun kamu!!
            </Typography>
            <Box sx={{ display: "flex", mb: "40px" }}>
              <Box
                sx={{
                  display: "flex",
                  mr: "20px",
                  color: "#888888",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                <Box sx={style.circleBox}>
                  <Box sx={style.circleBox1}></Box>
                </Box>
                Mahasiswi
              </Box>
              <Box
                sx={{
                  display: "flex",
                  mr: "20px",
                  color: "#888888",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                <Box sx={style.circleBox}>
                  <Box sx={style.circleBox1}></Box>
                </Box>
                Ibu Rumah Tangga
              </Box>
              <Box
                sx={{
                  display: "flex",
                  mr: "20px",
                  color: "#888888",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                <Box sx={style.circleBox}>
                  <Box sx={style.circleBox1}></Box>
                </Box>
                Career Hunter
              </Box>
            </Box>
            <Box
              sx={{
                width: "412px",
                height: "84px",
                backgroundColor: "#EE9591",
                borderRadius: "10px",
                padding: "15px 22px",
                boxShadow:
                  "0px 7px 8px -4px rgb(238	149	145 / 20%), 0px 12px 17px 2px rgb(238	149	145 / 20%), 0px 5px 22px 4px rgb(238	149	145 / 35%)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "19px",
                  fontWeight: "bold",
                  color: "#F6F6F6",
                  mb: "6px",
                }}
              >
                1st Indonesian Beautypreneur Community
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#F6F6F6",
                }}
              >
                Dengan berbagai fasilitas <i>“advance disigital platform”</i>.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs="12" md="6">
            <Box
              sx={{
                width: "639px",
                height: "540px",
                display: { xs: "none", md: "unset" },
              }}
            >
              <img src={FirstBannerImg} alt="" width="100%" height="100%" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FirstBanner;
