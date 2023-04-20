import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Stack,
  Menu,
  Box,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { pages } from "../constants/constants";
import { Boldo, Logo } from "../assets";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = ({ isLargeScreen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar sx={{ backgroundColor: "#0a2640" }}>
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <img
                src={Boldo}
                alt="logo"
                style={{ width: "95px", marginTop: "-2px" }}
              />
            </Box>
          </Link>
          <Box>
            {isLargeScreen ? (
              <Stack direction="row" gap={2} alignItems="center">
                {pages.map((page, idx) => (
                  <Link
                    key={idx}
                    to={page.path}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    {page.title}
                  </Link>
                ))}
                <Link to="login">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#fff",
                      color: "#1e4456",
                      borderRadius: "20px",
                    }}
                  >
                    login
                  </Button>
                </Link>
              </Stack>
            ) : (
              <>
                <IconButton onClick={handleClick}>
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100px",
                    }}
                  >
                    {pages.map((page, idx) => (
                      <Link
                        key={page.idx}
                        to={page.path}
                        sx={{
                          color: "white",
                        }}
                        onClick={handleClose}
                      >
                        {page.title}
                      </Link>
                    ))}
                  </Box>

                  <Link to="login" style={{ marginLeft: "0.6rem" }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#fff",
                        color: "#1e4456",
                        borderRadius: "20px",
                      }}
                    >
                      login
                    </Button>
                  </Link>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
