import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { memo } from "react";
import { enterpriseData } from "../constants/constants";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Masonry from "react-masonry-css";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Enterprise = memo(() => {
  const { heading, cards } = enterpriseData[0];
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div style={{ backgroundColor: "#0a2640", paddingBottom: "5rem" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              marginTop: "5rem",
              width: { xs: "95%", md: "50%" },
              color: "#fff",
            }}
          >
            {heading}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: { xs: "90%", sm: "15%" },
              height: "100%",
              marginTop: "5rem",
            }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: "60%",
                padding: "1.5rem",
                backgroundColor: "#d3d3d3",
              }}
            >
              <ArrowBackIcon sx={{ color: "#000" }} />
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "60%",
                padding: "1.5rem",
                backgroundColor: "#d3d3d3",
              }}
            >
              <ArrowForwardIcon sx={{ color: "#000" }} />
            </Button>
          </Box>
        </Box>
        <Masonry
          breakpointCols={{ default: 3, 650: 2, 500: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          style={{ display: "flex", marginTop: "2rem" }}
        >
          {cards.map((card, idx) => {
            if (idx > 2) return null; // Only show first three cards
            let height;
            switch (idx) {
              case 0:
                height = "300px";
                break;
              case 1:
                height = '400px'
                break;
              case 2:
                height = "320px";
                break;
              default:
                height = "320px";
            }
            return (
              <Grid2 xs={isMobile ? 12 : 3} key={idx}>
                <Box
                  sx={{
                    height: height,
                    width: "95%",
                    backgroundColor: "#f4f4f4",
                    padding: "2.5rem 1rem 1rem 1rem",
                    borderRadius: "10px",
                    mb: "1.5rem",
                  }}
                >
                  <Typography variant="body1">{card.text}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: { xs: '90%', sm: '100%'},
                      marginTop: "2rem",
                      gap: "0.5rem",
                    }}
                  >
                    <img src={card.avatar} alt="author" />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="body1">{card.name}</Typography>
                      <Typography variant="body1">{card.title}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
            );
          })}
        </Masonry>
      </Container>
    </div>
  );
});

export default Enterprise;
