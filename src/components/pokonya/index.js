import React from "react";
// import { Box } from "@mui/system";
import Container from "../container";
import PokonyaEllipse from "../../assets/PokonyaEllipse.png";
import { Typography, Box, Grid } from "@mui/material";
import ServiceCard from "../cards/serviceCard";
import ServiceDots from "../../assets/ServiceDots.png";
import Shape1 from "../../assets/Shape1.png";
import Shape2 from "../../assets/Shape2.png";
import Shape3 from "../../assets/Shape3.png";
import Shape4 from "../../assets/Shape4.png";
import Shape5 from "../../assets/Shape5.png";
import Shape6 from "../../assets/Shape6.png";
import Shape7 from "../../assets/Shape7.png";
import Shape8 from "../../assets/Shape8.png";
import SmileFace from "../../assets/SmileFace.png";
import Heart from "../../assets/Heart.png";
import Reward from "../../assets/Reward.png";
import Web from "../../assets/Web.png";
import Dollar from "../../assets/Dollar.png";
import Digital from "../../assets/Digital.png";
import Fire from "../../assets/Fire.png";
import Draw from "../../assets/Draw.png";

const Pokonya = () => {
  const cardDetails = [
    { image: SmileFace, bgImage: Shape1, text: "Intens Mentoring" },
    { image: Heart, bgImage: Shape2, text: "Kajian Rutin" },
    { image: Reward, bgImage: Shape3, text: "Rewards" },
    { image: Web, bgImage: Shape4, text: "Free Web Profile" },
    { image: Dollar, bgImage: Shape5, text: "Kelas Bisnis" },
    { image: Digital, bgImage: Shape6, text: "Kelas Digital" },
    { image: Fire, bgImage: Shape7, text: "Kelas Skin Care" },
    { image: Draw, bgImage: Shape8, text: "Product Knowledge" },
  ];
  return (
    <Box
      sx={{
        // height:"386px",
        // backgroundImage:`url(${PokonyaEllipse})`,
        // backgroundRepeat:"no-repeat",
        // backgroundSize:"contain",
        // backgroundPosition:"center"
        backgroundColor: "#FEF8F8",
        pb: "250px",
        height: "600px",
        mb: "230px",
      }}
    >
      <Container>
        <Box
          sx={{
            // display: "flex",
            position: "relative",
          }}
        >
          <Box>
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
                fontSize: "40px",
                fontWeight: "bold",
                color: "#555555",
                mb: "80px",
              }}
            >
              Pokonya udah pasti kita bimbing,
              <br />
              dengan
              <Box component="span" color="#EE9591">
                {" "}
                berbagai fasilitas
              </Box>
              .
            </Typography>
          </Box>
          {/* <Box
            sx={{
              width: "383px",
              height: "386px",
              //   justifyContent: "flex-end",
            }}
          > */}
          <img
            style={{
              position: "absolute",
              width: "389px",
              height: "386px",
              right: "114px",
              top: "118px",
            }}
            src={PokonyaEllipse}
            alt="PokonyaEllipse"
            width="100%"
            height="100%"
          />
          {/* </Box> */}
          <Grid
            container
            spacing={6}
            sx={{ position: "relative", zIndex: "1" }}
          >
            {cardDetails.map((items, index) => (
              <Grid item>
                <ServiceCard items={items} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              width: "121px",
              height: "148px",
              position: "absolute",
              left: "-51px",
              bottom: "162px",
            }}
          >
            <img
              src={ServiceDots}
              alt="ServiceDots"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Pokonya;
