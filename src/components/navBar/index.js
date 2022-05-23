import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/Logo.png";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FEF8F8",
        color: "black",
        height: { xs: "70px", md: "90px", lg: "112px" },
        display: "flex",
        justifyContent: "center",
        boxShadow: "none",
        // mb: 9,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              width: { md: "180px", lg: "190px" },
              height: { md: "37px", lg: "40px" },
            }}
          >
            <img src={Logo} alt="" width="100%" height="100%" />
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                // justifyContent: "flex-start",
                width: { xs: "120px" },
                height: { xs: "25px" },
              }}
            >
              <img src={Logo} alt="" width="100%" height="100%" />
            </Box>

            <Box
              sx={{
                // flexGrow: 1,
                display: { xs: "flex", md: "none" },
                alignItems: "center",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#EE9591",
                  color: "white",
                  width: "100px",
                  borderRadius: "10px",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  height: "35px",
                }}
              >
                Register
              </Button>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ p: 0, ml: "25px" }}
              >
                <MenuIcon
                  sx={{
                    fontSize: "35px",
                  }}
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  fontWeight: "600",
                  my: 2,
                  color: "black",
                  display: "block",
                  textTransform: "capitalize",
                  mr: "50px",
                }}
              >
                {page}
              </Button>
            ))}
            <Box>
              <Button
                sx={{
                  backgroundColor: "#EE9591",
                  color: "white",
                  width: "100px",
                  borderRadius: "10px",
                  fontWeight: "600",
                  textTransform: "capitalize",
                  height: "35px",
                }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
