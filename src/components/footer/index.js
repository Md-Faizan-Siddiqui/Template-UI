import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FooterImage from "../../assets/FooterImage.png";
import LogoWhite from "../../assets/LogoWhite.png";
import Support from "../../assets/Support.png";

const Footer = () => {
  return (
    <Box>
      <Grid container>
        <Grid
          container
          item
          md={8}
          sx={{
            position: "relative",
          }}
        >
          <Grid
            item
            md={7}
            sx={{
              background: "#EE9591",
              width: "540px",
              height: "450px",
              borderRadius: "0 150px 0 0",
            }}
          ></Grid>
          <Grid
            md={7}
            item
            sx={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <Box>
              <Box
                sx={{
                  mb: "30px",
                }}
              >
                <img src={LogoWhite} alt="" />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  fontSize: "14px",
                  lineHeight: "30px",
                  letterSpacing: "-0.3px",
                  color: "#FFFFFF",
                }}
              >
                Indonesian Beautypreneur Community.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "30px",
                  letterSpacing: "-0.3px",
                  color: "#FFFFFF",
                  mb: "45px",
                }}
              >
                Wadah positif bagi para Beautypreneur. Berpenghasilan
                <br /> dari rumah dengan memanfaatkan teknologi.
                <br /> Bergabung bersama beautypreneur lainnya.
              </Typography>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    mb: "17px",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      mr: "5px",
                      opacity: "0.6",
                    }}
                  >
                    <img src={Support} alt="" />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "12px",
                        letterSpacing: "-0.3px",
                        color: "#ffffffba",
                        mb: "3px",
                      }}
                    >
                      Support by
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "700",
                        fontSize: "14px",
                        lineHeight: "14px",
                        letterSpacing: "-0.3px",
                        color: "#ffffffba",
                      }}
                    >
                      syabany.com
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "24px",
                    letterSpacing: "-0.3px",
                    color: "#FFFFFF",
                  }}
                >
                  © 2022 Beautieslife.id.{" "}
                  <Box component="span" sx={{ fontWeight: "400" }}>
                    Made with love
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            md={5}
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                mr: "80px",
                ml: "100px",
                mt: "115px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "-0.3px",
                  color: "#EE9591",
                  mb: "30px",
                }}
              >
                About
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.3px",
                  color: "#888888",
                  mb: "14px",
                }}
              >
                Home
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.3px",
                  color: "#888888",
                  mb: "14px",
                }}
              >
                Beautypreneur
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.3px",
                  color: "#888888",
                  mb: "14px",
                }}
              >
                Brand Partner
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.3px",
                  color: "#888888",
                  mb: "14px",
                }}
              >
                Official Partner
              </Typography>
            </Box>
            <Box
              sx={{
                mt: "115px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "-0.3px",
                  color: "#EE9591",
                  mb: "30px",
                }}
              >
                Support
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.3px",
                  color: "#888888",
                  mb: "14px",
                }}
              >
                Kelas Geratis{" "}
                <Box component="span" color="#EE9591">
                  *
                </Box>{" "}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.3px",
                  color: "#888888",
                  mb: "14px",
                }}
              >
                Fasilitas
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.3px",
                  color: "#888888",
                  mb: "14px",
                }}
              >
                FAQs
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "-0.3px",
                  color: "#888888",
                  mb: "14px",
                }}
              >
                Contact
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Box
            sx={{
              overflow: "hidden",
            }}
          >
            <img src={FooterImage} alt="" style={{ marginBottom: "-6px" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
