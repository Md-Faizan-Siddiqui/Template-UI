import React from "react";
import Container from "../container";
import { Box, Grid, Typography } from "@mui/material";
import BeautySellingEllipse from "../../assets/BeautySellingEllipse.png";
import BeautieslifeIcons from "../../assets/BeautieslifeIcons.png";
import EnhanceChatIcons from "../../assets/EnhanceChatIcons.png";
import ManagementIcons from "../../assets/ManagementIcons.png";
import SocialIcons from "../../assets/SocialIcons.png";
import BeautySellingDots from "../../assets/BeautySellingDots.png";
import SocialCards from "../cards/socialCards";

const Beautyselling = () => {
  const style = {
    circleBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      backgroundColor: "#f5dbda",
      mr: "8px",
    },
    circleBox1: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: "#EE9591",
    },
  };
  const listText = [
    "Udah bukan jamannya gaptek",
    "Udah gak ada lagi bingung pake tools apaan",
    "Gak ada lagi istilah siapa yang bakan ngajarin aku",
    "Udah bukan musimnya jalan sendirian!!",
  ];
  return (
    <Box
      sx={{
        // backgroundColor:"#FEF8F8"
        px: "80px",
        pb: "156px",
        backgroundImage: "linear-gradient(to top, #FEF8F8, #fff)",
        // backgroundImage: "linear-gradient(to top, #FFEEEE, #fff)",
      }}
    >
      <Container>
        <Grid container>
          <Box
            sx={{
              textAlign: "center",
              width: "100%",
              mt: "110px",
              mb: "140px",
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
          <Grid item xs="12" md="7">
            <Box
              sx={{
                // ml:"20px",
                mt: "25px",
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
                  <Box
                    sx={{
                      // mt:"35px",
                      mr: "50px",
                      mb: "50px",
                    }}
                  >
                    <SocialCards
                      cardImg={BeautieslifeIcons}
                      cardText="Beautieslife.id Platform"
                      width="170px"
                      height="80px"
                      padding="30px 0 0 30px"
                      mb="24px"
                    />
                  </Box>
                  <Box>
                    <SocialCards
                      cardImg={SocialIcons}
                      cardText="Social Media Platform"
                    />
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{
                      mt: "-50px",
                      mr: "50px",
                      mb: "50px",
                    }}
                  >
                    <SocialCards
                      cardImg={ManagementIcons}
                      cardText="Management Tools"
                    />
                  </Box>
                  <Box>
                    <SocialCards
                      cardImg={EnhanceChatIcons}
                      cardText="Enhance Chat Tools"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs="12" md="5">
            <Box
              sx={{
                mt: "-24px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100px",
                  height: "12px",
                  borderRadius: "100px",
                  backgroundColor: "#EE9591",
                  mb: "30px",
                }}
              ></Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "40px",
                  lineHeight: "54px",
                  letterSpacing: "-0.3px",
                  color: "#555555",
                  mb: "60px",
                }}
              >
                Bukan saatnya menunda
                <br />
                <Box component="span" color="#EE9591">
                  digitalisasi
                </Box>
                .
              </Typography>
              <Typography
                sx={{
                  // fontWeight: "bold",
                  fontSize: "16px",
                  lineHeight: "28px",
                  letterSpacing: "-0.3px",
                  color: "#888888",
                  mb: "60px",
                }}
              >
                Ayo kita hadapi bersama era peralihan ini.
                <b> Beautieslife.id</b> akan
                <br />
                bantu kamu belajar berbisnis dengan berbagai tools digital
                <br /> yang diharapkan akan mendorong kemudahan dan kelancaran
                <br /> bisnis beauty kamu.
              </Typography>
              {listText.map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      // mr: "20px",
                      color: "#888888",
                      fontWeight: "bold",
                      fontSize: "16px",
                      lineHeight: "22px",
                      letterSpacing: "-0.3px",
                      mb: "22px",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={style.circleBox}>
                      <Box sx={style.circleBox1}></Box>
                    </Box>
                    {item}
                  </Box>
                );
              })}
              <Box
                sx={{
                  width: "109px",
                  height: "122px",
                  right: "0",
                  bottom: "-38px",
                  position: "absolute",
                  // overflow:"hidden"
                }}
              >
                <img
                  src={BeautySellingDots}
                  alt="BeautySellingDots"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Beautyselling;
