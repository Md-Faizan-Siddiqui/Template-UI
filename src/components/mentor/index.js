import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Container from "../container";
import ProfileCard from "../cards/profileCard";
import MentorDots from "../../assets/MentorDots.png";
import MentorEllipse from "../../assets/MentorEllipse.png";
import ChantalShelburne from "../../assets/ChantalShelburne.png";
import KyleeDanford from "../../assets/KyleeDanford.png";
import LauraleeQuintero from "../../assets/LauraleeQuintero.png";
import FreidaVarnes from "../../assets/FreidaVarnes.png";

const Mentor = () => {
  const profileDetails = [
    {
      image: ChantalShelburne,
      name: "Chantal Shelburne",
      title: "Founder Beautieslife.id",
      position: "Our Mentor",
    },
    {
      image: KyleeDanford,
      name: "Kylee Danford",
      title: "Founder & CDO Syabany.com",
      position: "Our Mentor",
    },
    {
      image: LauraleeQuintero,
      name: "Lauralee Quintero",
      title: "Leader Nasional JAFRA Executive",
      position: "Our Advisor",
    },
    {
      image: FreidaVarnes,
      name: "Freida Varnes",
      title: "Founder Dakwahyu & Wadah Hikmah",
      position: "Our Advisor",
    },
  ];
  return (
    <Box
      sx={{
        position: "relative",
        mb:"180px"
      }}
    >
      <img
        src={MentorEllipse}
        alt="MentorEllipse"
        style={{
          position: "absolute",
          left: "0",
          top: "100px",
          zIndex: "-1",
        }}
      />
      <Container>
        <Grid container>
          <Grid
            item
            sx={{
              position: "relative",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#555555",
                fontWeight: "bold",
                fontSize: "40px",
                lineHeight: "54px",
                letterSpacing: "-0.3px",
                mb: "16px",
              }}
            >
              Meet our{" "}
              <Box component="span" color="#EE9591">
                mentor
              </Box>{" "}
              and{" "}
              <Box component="span" color="#EE9591">
                advisor
              </Box>
              .
            </Typography>
            <Typography
              sx={{
                color: "#888888",
                fontSize: "16px",
                lineHeight: "26px",
                letterSpacing: "-0.3px",
                mb: "80px",
              }}
            >
              Kita akan berlari ditemani para mentor dan advisor dari
              Beautieslife.id. Akan banyak ilmu baru dan inspiratif.
            </Typography>
            <Grid
              sx={{
                width: "121px",
                height: "109px",
                position: "absolute",
                top: "0",
                right: "11px",
              }}
            >
              <img
                src={MentorDots}
                alt="MentorDots"
                width="100%"
                height="100%"
              />
            </Grid>
          </Grid>
          <Grid container spacing="48px">
            {profileDetails.map((items, index) => (
              <Grid item key={index}>
                <ProfileCard items={items} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Mentor;
