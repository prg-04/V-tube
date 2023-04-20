import React from "react";
import AboutUs from "./AboutUs";
import { Box, Container, Typography } from "@mui/material";
import { aboutData } from "../constants/constants";

const About = () => {
  const { ourStory, ourNumbers, ourTeam, ourValues } = aboutData[0];
  return (
    <div style={{ marginTop: "4rem" }}>
      <AboutUs />
      <Box>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "5rem",
            pb: "5rem",
          }}
        >
          {ourStory.map((item) => (
            <Box sx={{ width: "70%" }}>
              <Typography variant="subtitle1" sx={{ color: "GrayText" }}>
                Our Story
              </Typography>
              <Typography variant="h3" sx={{ my: "1.5rem" }}>
                {item.heading}
              </Typography>
              <Typography
                variant="body2"
                sx={{ width: "75%", textAlign: "start", color: "GrayText" }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Container>
      </Box>
      <div style={{ backgroundColor: "#0a2640" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            pb: "5rem",
          }}
        >
          {ourNumbers.map((item) => (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mt: "2.5rem",
                }}
              >
                <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                  Our Numbers
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    my: "1.5rem",
                    color: "#fff",
                    textAlign: "center",
                    width: "80%",
                  }}
                >
                  {item.heading}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                {item.numbers.map((num) => (
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h2" sx={{ color: "#4fe9a4" }}>
                      {num.number}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#fff" }}>
                      {num.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </>
          ))}
        </Container>
      </div>

      <Container>
        {ourTeam.map((item) => (
          <>
            <Box>
              <Typography variant="subtitle1" sx={{ color: "GrayText" }}>
                Our Team
              </Typography>
              <Typography variant="h3" sx={{ my: "1.5rem" }}>
                {item.heading}
              </Typography>
              <Typography
                variant="body2"
                sx={{ width: "75%", textAlign: "start", color: "GrayText" }}
              >
                {item.text}
              </Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent:'-moz-initial'}}>
              {item.cards.map((card) => (
                <Box>
                  <img src={card.image} alt='team-member' />
                  <Typography variant="h5">{card.name}</Typography>
                  <Typography variant="body2">{card.title}</Typography>
                </Box>
              ))}
            </Box>
          </>
        ))}
      </Container>
    </div>
  );
};

export default About;
