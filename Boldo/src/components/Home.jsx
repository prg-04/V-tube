import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Enterprise from "./Enterprise";
import Placeholder from "./Placeholder";
import Blogs from "./Blogs";
import Footer from "./Footer";

const Home = ({ isLargeScreen }) => {
  return (
    <div style={{ height: "100%" }}>
      <Hero isLargeScreen={isLargeScreen} />
      <Services />
      <Enterprise />
      <Placeholder />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
