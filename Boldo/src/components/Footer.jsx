import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { footerData } from "../constants/constants";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "transparent",
      },
  },
});

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const { landings, Company, Resources } = footerData[0];

  return (
    <div>
      <Container
        sx={{
          backgroundColor: "#0a2640",
          display: "flex",
          alignItems: "center",
          mt: "5rem",
          flexDirection: "column",
          borderRadius: "10px",
          pb: "3.5rem",
        }}
      >
        {footerData.map((item) => (
          <>
            <Typography
              variant={isMobile ? "h4" : "h2"}
              sx={{
                textAlign: "center",
                width: "75%",
                color: "#fff",
                mt: "2.5rem",
              }}
            >
              {item.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "row" },
                mt: "2.5rem",
                width: { xs: "100%", md: "40%" },
                gap: { xs: "1rem", md: "2rem" },
                justifyContent: "space-between",
              }}
            >
              <TextField
                placeholder="Your email address"
                variant="outlined"
                value={value}
                onChange={handleChange}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "40px",
                  width: "80%",
                }}
                classes={{ root: classes.root }}
              />
              <Button
                variant="contained"
                sx={{
                  borderRadius: "40px",
                  padding: { xs: "0.5rem", sm: "1rem" },
                  backgroundColor: "#129b85",
                  width: "40%",
                }}
              >
                Start now
              </Button>
            </Box>
          </>
        ))}
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: 'row' },
          alignItems: "center",
          mt: "3rem",
          gap: "5rem",
          pb: "2rem",
        }}
      >
        <Box sx={{ width: { xs: "95%", md: "30%" } }}>
          {footerData.map((item) => (
            <>
              <img src={item.logo} alt="logo" />
              <Typography variant="body1" sx={{ mt: "1.5rem", width: "90%" }}>
                {item.description}
              </Typography>
              <Typography variant="body1" sx={{ mt: "2.5rem" }}>
                All rights reserved
              </Typography>
            </>
          ))}
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: { xs: "95%", md: "50%" } }}
        >
          {footerData.map((item) => (
            <>
              <Stack sx={{ gap: "1.5rem" }}>
                <Typography variant="h6">Landings</Typography>
                {landings.map((item) => (
                  <>
                    <Link to={item.path} variant="body1">
                      {item.title}
                    </Link>
                  </>
                ))}
              </Stack>
              <Stack sx={{ gap: "1.5rem" }}>
                <Typography variant="h6">Company</Typography>
                {Company.map((item) => (
                  <>
                    <Link to={item.path} variant="body1">
                      {item.title}
                    </Link>
                  </>
                ))}
              </Stack>
              <Stack sx={{ gap: "1.5rem" }}>
                <Typography variant="h6">Resources</Typography>
                {Resources.map((item) => (
                  <>
                    <Link to={item.path} variant="body1">
                      {item.title}
                    </Link>
                  </>
                ))}
              </Stack>
            </>
          ))}
        </Stack>
      </Container>
    </div>
  );
};

export default Footer;
