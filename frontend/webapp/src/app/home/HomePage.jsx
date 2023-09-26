import React from "react";
import { observer } from "mobx-react-lite";

import BlogSection from "../blogs/BlogSection"; 
import TechnologySection from "./../technology/TechnologySection";
import AboutMe from "./../about/AboutMe";
import Header from "./Header";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />

      <AboutMe />

      <BlogSection />

      <TechnologySection />

      <Footer />
    </React.Fragment>
  );
};

export default observer(HomePage);
