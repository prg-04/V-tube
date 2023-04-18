import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Boldo, Presto } from "../../assets";
import { styled } from "@mui/material/styles";
import "./logo-slider.css";

const logo = [
  {
    src: Boldo,
    alt: "Boldo Logo",
  },
  {
    src: Boldo,
    alt: "Boldo Logo",
  },
  {
    src: Boldo,
    alt: "Boldo Logo",
  },
];

const StyledSlider = styled(Slider)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const LogoSlider = ({isDesktop}) => {
  return (
    <StyledSlider
      sx={{ mt: 2 }}
      infinite={true}
      {...(isDesktop ? { slidesToShow: 2 } : { slidesToShow: 1 } )}
      autoplay={true}
      autoplaySpeed={5000}
    >
      {logo.map((item, index) => (
        <div className="logo-slider-item" key={index}>
          <img
            src={item.src}
            alt={item.alt}
            style={{ width: "200px", marginRight: "1rem" }}
          />
        </div>
      ))}
    </StyledSlider>
  );
};

export default LogoSlider;
