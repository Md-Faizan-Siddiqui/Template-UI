import React from "react";
import Container from "../container";
import { Box, Grid, Typography } from "@mui/material";
import BeautySellingEllipse from "../../assets/BeautySellingEllipse.png";
import SocialCards from "../cards/socialCards";

const Beautyselling = () => {
  return (
    <Box
      sx={{
        // backgroundColor:"#FEF8F8"
        backgroundImage: "linear-gradient(to top, #FFEEEE, #fff)",
      }}
    >
      <Container>
        <Grid container>
          <Box
            sx={{
              textAlign: "center",
              width: "100%",
              my: "110px",
            }}
          >
            <Typography
              sx={{
                color: "#555555",
                fontWeight: "bold",
                fontSize: "70px",
                lineHeight: "80px",
                mb: "40px",
              }}
            >
              Beauty Selling{" "}
              <Box component="span" color="#EE9591">
                with
              </Box>{" "}
              Digital Pattern
              <Box component="span" color="#EE9591">
                .
              </Box>
            </Typography>
            <Typography
              sx={{
                color: "#888888",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "26px",
                letterSpacing: "0.3px",
              }}
            >
              Pasar yang besar ditunjang dengan wadah yang tepat, insyaAllah
              akan bebuah keberhasilan
            </Typography>
          </Box>
          <Grid item xs="12" md="8">
            <Box
              sx={{
                // width: "534px",
                height: "530px",
                backgroundImage: `url(${BeautySellingEllipse})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              {/* <img src={BeautySellingEllipse} alt="BeautySellingEllipse" width="100%" height="100%"/> */}
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box>
                  <SocialCards />
                  {/* <SocialCards /> */}
                </Box>
                {/* <Box>
                  <SocialCards />
                  <SocialCards />
                </Box> */}
              </Box>
            </Box>
          </Grid>
          <Grid xs="12" md="4">
            Beautyselling
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Beautyselling;
