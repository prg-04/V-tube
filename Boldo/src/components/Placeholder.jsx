import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import { enterpriseData } from "../constants/constants";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";

const Placeholder = () => {
  const { heading, cards, image, text, list } = enterpriseData[0];

  return (
    <div style={{ width: "100%", backgroundColor: "#fff", marginTop: "2rem" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img src={image} alt="workplace" style={{ marginTop: "5rem" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              marginTop: "5rem",
              width: { xs: "95%", md: "50%" },
              color: "#000",
            }}
          >
            {text}
          </Typography>
          <Box
            sx={{
              displa: "flex",
              flexDirection: "column",
              width: { xs: "95%", md: "30%" },
            }}
          >
            {list.map((item, idx) => (
              <Paper
                elevation={1}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "2rem",
                  width: "100%",
                }}
              >
                <Typography variant="body2" component="p" gutterBottom>
                  {item}
                </Typography>
                <ArrowDropDownCircleRoundedIcon />
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Placeholder;
