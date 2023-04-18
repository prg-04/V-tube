import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { heroData } from "../constants/constants";
import { Logo, heroImg, Presto, Boldo } from "../assets";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slider from "react-slick";
import LogoSlider from "./LogoSlider/LogoSlider";

const { heading, paragraphOne } = heroData[0];

const Hero = () => {
  const isDesktop = useMediaQuery("(min-width:900px)");
  return (
    <Box sx={{ backgroundColor: "#0a2640", height: "100%" }}>
      <Container sx={{ height: "100%" }}>
        <Container sx={{ display: "flex", marginTop: "3rem" }}>
          <Box
            sx={{
              marginTop: { xs: "2.5rem", sm: "8rem" },
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Typography variant="h3" sx={{ color: "#fff" }}>
              {heading}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "1rem",
                color: "#d4d5d6",
                width: { xs: "95%", sm: "80%" },
              }}
            >
              {paragraphOne}
            </Typography>
            <Box
              sx={{
                width: { xs: "100%", sm: "90%" },
                display: "flex",
                marginTop: "2rem",
                alignItems: "center",
                gap: { xs: "1rem", sm: "7rem" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: { xs: "40px", sm: "20px" },
                  backgroundColor: "#129b85",
                  padding: { xs: "0.8rem", sm: "0.5rem" },
                }}
              >
                Buy Template
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: { xs: "40px", sm: "20px" },
                  borderColor: "#d3d3d3",
                  color: "#d3d3d3",
                  padding: { xs: "0.8rem 0.9rem", sm: "0.5rem" },
                }}
              >
                Explore
              </Button>
            </Box>
          </Box>
          {isDesktop ? (
            <img
              src={heroImg}
              alt="data-illustration"
              style={{ marginTop: "5rem", width: "50%" }}
            />
          ) : (
            <></>
          )}
        </Container>
        <Container sx={{ marginTop: "2rem" }}>
          <Box sx={{ marginTop: "5rem", pb: "2rem" }}>
            <LogoSlider isDesktop={isDesktop} />
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

export default Hero;
