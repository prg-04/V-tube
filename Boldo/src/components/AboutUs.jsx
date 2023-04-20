import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { aboutData } from "../constants/constants";
import { Masonry } from "@mui/lab";

const heights = [290, 600, 290, 290, 290];

const AboutUs = () => {
  const { images } = aboutData[0];

  return (
    <div>
      <div style={{ backgroundColor: "#0a2640" }}>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          {aboutData.map((item) => (
            <Box
              key={item.heading}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                pb: "10rem",
                mt: "3.5rem",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "center", color: "#fff" }}
              >
                About
              </Typography>
              <Typography
                variant="h2"
                sx={{ textAlign: "center", color: "#fff", width: "60%" }}
              >
                {item.heading}
              </Typography>
              <Typography
                variant="body2"
                sx={{ textAlign: "center", color: "#fff", width: "55%" }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Container>
      </div>
      <Container sx={{ mt: "-8rem" }}>
        <Masonry columns={3} spacing={2}>
          {images.map((item, index) => (
            <img
              key={index}
              src={`${item.image}?w=162&auto=format`}
              alt={item.alt}
              loading="lazy"
              style={{
                borderRadius: "20px",
                display: "block",
                width: "100",
                objectFit: "cover",
                height: `${heights[index]}px`,
              }}
            />
          ))}
        </Masonry>
      </Container>
    </div>
  );
};

export default AboutUs;
