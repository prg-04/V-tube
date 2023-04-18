import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
} from "@mui/material";
import { servicesData } from "../constants/constants";
import styled from "@emotion/styled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { FaSpa, FaEye } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { useMediaQuery } from "@mui/material";

const Services = () => {
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "start",
    height: "100%",
    borderRadius: "22px 22px 5px 5px",
  }));

  const isMobile = useMediaQuery("(max-width:600px)");

  const { heading, cards, placeholder } = servicesData[0];
  const { image: image2, heading: heading2, list } = placeholder[0];
  const { image: image3, heading: heading3, list: list2 } = placeholder[1];

  return (
    <Container sx={{ backgroundColor: "#fff",pb: '2rem' }}>
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle1" sx={{ marginTop: "3.5rem" }}>
          Our Service
        </Typography>
        <Typography
          variant="h4"
          component="h4"
          gutterBottom
          sx={{ textAlign: "center", width: { xs: "100%", sm: "60%" } }}
        >
          {heading}
        </Typography>
      </Box>
      <Grid2
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {cards.map((card, idx) => (
          <Grid2
            xs={isMobile ? 12 : 3}
            key={idx}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Item
              sx={{
                width: {
                  xs: "80%",
                  sm: "100%",
                },
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", sm: "start" },
              }}
            >
              <img
                src={card.image}
                alt="illustration"
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
              <Typography
                variant={isMobile ? "h5" : "h6"}
                component="h6"
                gutterBottom
                sx={{ marginTop: "1rem", textAlign: { xs: "center" } }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                gutterBottom
                sx={{ width: "90%" }}
              >
                {card.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: { xs: "90%", sm: "60%" },
                }}
              >
                <Typography variant="body1" component="p" gutterBottom>
                  Explore page
                </Typography>
                <ArrowForwardIcon />
              </Box>
            </Item>
          </Grid2>
        ))}
      </Grid2>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            marginTop: "5rem",
            justifyContent: "space-around",
          }}
        >
          <img
            src={image2}
            alt="customer"
            style={{ width: "444px", objectFit: "contain" }}
          />
          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              marginTop: { xs: "1rem", md: "2.5rem" },
            }}
          >
            <Typography variant="h5" component="h6" gutterBottom>
              {heading2}
            </Typography>
            <List>
              {list.map((item, idx) => (
                <ListItem key={idx} sx={{ paddingLeft: 0 }}>
                  <ListItemAvatar>
                    <CheckCircleIcon />
                  </ListItemAvatar>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                backgroundColor: "#0a2640",
                marginTop: "1rem",
              }}
            >
              Start now
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
            marginTop: "5rem",
            justifyContent: "space-around",
          }}
        >
          <img src={image3} alt="customer" />
          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              marginTop: { xs: "1rem", md: "2.5rem" },
            }}
          >
            <Typography variant="h5" component="h6" gutterBottom>
              {heading3}
            </Typography>
            <List>
              {list2.map((item, idx) => {
                const { icon: Icon, text } = item;
                const icons = {
                  SpaIcon: <FaSpa />,
                  Visibility: <FaEye />,
                  LightModeOutlinedIcon: <BsFillSunFill />,
                };

                return (
                  <ListItem key={idx} sx={{ paddingLeft: 0 }}>
                    <ListItemAvatar>{icons[Icon]}</ListItemAvatar>
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                backgroundColor: "#0a2640",
                marginTop: "1rem",
              }}
            >
              Start now
            </Button>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default Services;
