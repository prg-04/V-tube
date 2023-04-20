import React from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { blogsData } from "../constants/constants";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Blogs = () => {
  const location = useLocation();
  const { homeBlog } = blogsData[0];
  const { heading, heading2, placeholder, cards } = homeBlog[0];

  const Item = styled(Paper)(({ theme }) => ({
    borderRadius: "22px 22px 5px 5px",
  }));

  const isMobile = useMediaQuery("(max-width:600px)");

  const currentdate = new Date();
  const formattedDate = currentdate.toLocaleDateString();

  return (
    <div>
      {location.pathname === "/" ? (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mt: "8rem",
            }}
          >
            <Typography variant="subtitle1">Our Blog</Typography>
            <Typography
              variant={isMobile ? "h4" : "h2"}
              sx={{ textAlign: "center", width: { xs: "100%", sm: "80%" } }}
            >
              {heading}
            </Typography>
          </Box>
          <Container sx={{ display: "flex", mt: "2rem" }}>
            <Grid2
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              {cards.slice(0, 3).map((card, index) => (
                <Grid2 xs={isMobile ? 9 : 3}>
                  <Item sx={{ display: "flex", flexDirection: "column" }}>
                    <img
                      src={card.image}
                      alt="illustration"
                      style={{ width: "100%" }}
                    />
                    <Box
                      sx={{
                        display: { xs: "flex", sm: "none", md: "flex" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: { xs: "row", sm: "column", md: "row" },
                        width: "95%",
                        mt: "1rem",
                      }}
                    >
                      <Typography variant="h6">Category</Typography>
                      <Typography variant="body1">{formattedDate}</Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{ width: "90%", mt: "1rem" }}
                    >
                      {card.text}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "60%",
                        mt: "1.5rem",
                        pb: "1rem",
                      }}
                    >
                      <img src={card.avatar} alt="author" />
                      <Typography variant="body1">{card.name}</Typography>
                    </Box>
                  </Item>
                </Grid2>
              ))}
            </Grid2>
          </Container>
          <Button
            variant="outlined"
            sx={{
              alignSelf: "center",
              mt: "2rem",
              padding: "1rem 2.5rem",
              borderRadius: "40px",
            }}
          >
            Load more
          </Button>
        </Box>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Blogs;
