import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Container from "../container";
import Ellipse from "../../assets/Ellipse.png";

const SecondBanner = () => {
  return (
    <Box
      sx={{
        mt: "70px",
        px: "80px",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs="12" md="5" mt="95px">
            <Typography
              sx={{
                fontSize: "40px",
                color: "#555555",
                fontWeight: "bold",
                lineHeight: "50px",
                mb: "23px",
              }}
            >
              Beautypreneur
              <Box component="span" sx={{ color: "#EE9591" }}>
                .
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#888888",
                fontWeight: "500",
                lineHeight: "26px",
                letterSpacing: "-0.3px",
                mb: "23px",
              }}
            >
              ˈbyo͞odē prəˈnər (noun)
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#888888",
                fontWeight: "400",
                lineHeight: "28px",
                letterSpacing: "-0.3px",
                mb: "23px",
              }}
            >
              Bukan sekedar bisnis yang hits dengan segudang untung.
              <br /> Tren
              <b>
                <u> beautypreneur</u>
              </b>{" "}
              di Indonesia sudah mulai terlihat sejak
              <br /> beberapa tahun terakhir, industri kecantikan dalam negeri
              <br /> maulai berkembang pesat.
            </Typography>
            <Box
              sx={{
                backgroundColor: "#EE9591",
                width: "100px",
                height: "12px",
                borderRadius: "100px",
              }}
            ></Box>
          </Grid>
          <Grid
            item
            xs="12"
            md="7"
            //   border="1px solid black"
          >
            <Box
              sx={{
                width: "100%",
                minHeight: "458px",
                // border: "1px Solid red",
                display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  left: "30%",
                  top: "0",
                  bottom: "0",
                  position: "absolute",
                  width: "487px",
                  height: "458px",
                  //   maxHeight:"100%",
                  display: { xs: "none", md: "block" },
                  // display: { xs: "none", md: "flex" },
                  // justifyContent:"center",
                  // alignItems:"center",
                  p: 0,
                }}
              >
                <img src={Ellipse} alt="" width="100%" height="100%" />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  //   left: "50%",
                  //   top: "0",
                  //   bottom: "0",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                      mr:"40px",
                    border: "8px solid #F6F6F6",
                    width: "350px",
                    height: "270px",
                    borderRadius: "20px",
                    boxShadow: "-40px, 40px rgba (85, 85, 85, 0.14)",
                    backgroundImage: "linear-gradient(to right, #F9A8A5 , #E28A86)",
                  }}
                >
                  fgas
                </Box>
                <Box
                  sx={{
                    border: "8px solid #F6F6F6",
                    width: "350px",
                    height: "270px",
                    borderRadius: "20px",
                    boxShadow: "-40px, 40px rgba (85, 85, 85, 0.14)",
                    backgroundImage: "linear-gradient(to right, #F9A8A5 , #E28A86)",
                  }}
                >
                  fgas
                </Box>
                {/* <Box sx={{ border: "1px solid black" }}>fdafs</Box> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SecondBanner;
