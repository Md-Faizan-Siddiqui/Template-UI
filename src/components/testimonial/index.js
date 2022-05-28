import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Container from "../container";
import TestimonialImage from "../../assets/TestimonialImage.png";
import TestimonialEllipse from "../../assets/TestimonialEllipse.png";
import { BsArrowRight } from "react-icons/bs";

const Testimonial = () => {
  return (
    <Box>
      <Container>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Grid item md={7}>
            <Grid item md={12}>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "18px",
                  lineHeight: "28px",
                  letterSpacing: "0.2px",
                  color: "#EE9591",
                  mb: "3px",
                }}
              >
                Testimonial
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "40px",
                  lineHeight: "54px",
                  letterSpacing: "-0.3px",
                  color: "#555555",
                  mb: "40px",
                }}
              >
                Apa kata{" "}
                <Box component="span" color="#EE9591">
                  mereka
                </Box>
                ?
              </Typography>
            </Grid>
            <Grid container>
              <Grid item md={4} sx={{ position: "relative" }}>
                <Grid
                  sx={{
                    width: "83px",
                    height: "24px",
                    position: "absolute",
                    right: "68px",
                    top: "8px",
                    zIndex: "-1",
                  }}
                >
                  <img
                    src={TestimonialEllipse}
                    alt="TestimonialEllipse"
                    width="100%"
                    height="100%"
                  />
                </Grid>
                <Grid
                  sx={{
                    width: "180px",
                    height: "180px",
                  }}
                >
                  <img
                    src={TestimonialImage}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "0px 100px 100px 100px",
                    }}
                  />
                </Grid>
                <Grid
                  sx={{
                    position: "absolute",
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                    backgroundColor: "#EE9591",
                    bottom: "0",
                    right: "80px",
                    zIndex: "-1",
                  }}
                ></Grid>
              </Grid>
              <Grid item md={8} sx={{ marginLeft: "-35px" }}>
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "18px",
                    lineHeight: "28px",
                    letterSpacing: "0.2px",
                    color: "#555555",
                  }}
                >
                  Annabel Rohan
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    letterSpacing: "0.2px",
                    color: "#EE9591",
                    mb: "16px",
                  }}
                >
                  Leader Nasional JAFRA Executive
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "28px",
                    letterSpacing: "-0.3px",
                    color: "#888888",
                    mb: "14px",
                  }}
                >
                  Arcu sed etiam proin natoque at lectus aliquam. Faucibus ipsum
                  <br />
                  porta eleifend facilisis cras in. Sed etiam proin natoque at
                  lectus
                  <br /> aliquam. Faucibus ipsum porta eleifend facilisis cras
                  in.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "16px",
                      color: "#888888",
                      mr: "6px",
                    }}
                  >
                    next
                  </Typography>
                  <BsArrowRight color="#EE9591" size="20px" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonial;
