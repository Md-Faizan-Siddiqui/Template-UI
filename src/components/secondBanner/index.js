import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Container from "../container";
import Ellipse from "../../assets/Ellipse.png";
import SecondBoxDote from "../../assets/secondBoxDote.png";

const SecondBanner = () => {
  return (
    <Box
      sx={{
        my: "70px",
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
          <Grid item xs="12" md="7">
            <Box
              sx={{
                width: "100%",
                minHeight: "458px",
                display: "flex",
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
                  display: { xs: "none", md: "block" },
                  p: 0,
                }}
              >
                <img src={Ellipse} alt="" width="100%" height="100%" />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    boxShadow:
                      "0px 7px 8px -4px rgb(105 105 105 / 20%), 0px 12px 17px 2px rgb(105 105 105 / 20%), 0px 5px 22px 4px rgb(105 105 105 / 35%)",
                    mr: "40px",
                    border: "8px solid #F6F6F6",
                    width: "350px",
                    height: "270px",
                    borderRadius: "20px",
                    backgroundImage:
                      "linear-gradient(to right, #F9A8A5 , #E28A86)",
                  }}
                >
                  <Box sx={{ display: "flex", position: "relative" }}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "90px",
                          fontWeight: "bold",
                          lineHeight: "100px",
                          color: "#ffff",
                          margin: "22px 0 14px 32px",
                        }}
                      >
                        50%
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "61px",
                        height: "61px",
                        margin: "12px 13px 0 0",
                        position: "absolute",
                        top: "0",
                        right: "0",
                      }}
                    >
                      <img
                        src={SecondBoxDote}
                        alt="Dots"
                        width="100%"
                        height="100%"
                      />
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "400",
                      lineHeight: "22px",
                      color: "#ffff",
                      letterSpacing: "-0.3px",
                      margin: "0px 0 10px 32px",
                    }}
                  >
                    Bingun bagaimana caranya memulai bisnis <br />
                    healthy beauty. Sedangkan demand di sektor <br />
                    ini begitu melimpah.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontWeight: "400",
                      lineHeight: "22px",
                      color: "#ffff",
                      letterSpacing: "-0.3px",
                      margin: "0px 0 0px 32px",
                      opacity: "40%",
                    }}
                  >
                    source involve.cewekbanget.id/beautypreneur
                  </Typography>
                </Box>
                <Box
                  sx={{
                    boxShadow:
                      "0px 7px 8px -4px rgb(105 105 105 / 20%), 0px 12px 17px 2px rgb(105 105 105 / 20%), 0px 5px 22px 4px rgb(105 105 105 / 35%)",
                    border: "8px solid #F6F6F6",
                    width: "350px",
                    height: "270px",
                    borderRadius: "20px",
                    backgroundImage:
                      "linear-gradient(to right, #F9A8A5 , #E28A86)",
                  }}
                >
                  <Box sx={{ display: "flex", position: "relative" }}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "90px",
                          fontWeight: "bold",
                          lineHeight: "100px",
                          color: "#ffff",
                          margin: "22px 0 14px 32px",
                        }}
                      >
                        23,7%
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "61px",
                        height: "61px",
                        margin: "12px 13px 0 0",
                        position: "absolute",
                        top: "0",
                        right: "0",
                      }}
                    >
                      <img
                        src={SecondBoxDote}
                        alt="Dots"
                        width="100%"
                        height="100%"
                      />
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "400",
                      lineHeight: "22px",
                      color: "#ffff",
                      letterSpacing: "-0.3px",
                      margin: "0px 0 10px 32px",
                    }}
                  >
                    Khawatir butuh modal usaha yang sangat
                    <br /> besar. Padahal banyak cara agar dapat
                    <br /> berbinis di sektor ini (Healthy Beauty)
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontWeight: "400",
                      lineHeight: "22px",
                      color: "#ffff",
                      letterSpacing: "-0.3px",
                      margin: "0px 0 0px 32px",
                      opacity: "40%",
                    }}
                  >
                    source involve.cewekbanget.id/beautypreneur
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SecondBanner;
