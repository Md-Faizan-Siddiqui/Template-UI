import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Container from "../container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import FirstBannerImg from "../../assets/1stBannerImg.png";
import Dots from "../../assets/Dots.png";
const FirstBanner = () => {
  return (
    <Box sx={{ backgroundColor: "#FEF8F8", pt: 9 }}>
      <Container>
        <Grid container>
          <Grid item xs="12" md="6">
            <Box sx={{ width: "108px", height: "32px" }}>
              <img src={Dots} alt="" width="100%" height="100%" />
            </Box>
            <Typography>Pasti berat kalo lari sendirian.</Typography>
            <Typography>
              Setiap hal pasti butuh hal lain untuk membersamai. Begitupun
              dengan bisnis,Beautiesifie.id hadir untuk membersamai kalian untuk
              menjadi Beautypreneur.Siapapun kamu
            </Typography>
            {/* <Box>
            <List>
              <ListItem>
                <ListItemText>
                  fdjhfkjh
                </ListItemText>
                <ListItemText>
                  fdjhfkjh
                </ListItemText>
                <ListItemText>
                  fdjhfkjh
                </ListItemText>
              </ListItem>

            </List>
          </Box> */}
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
