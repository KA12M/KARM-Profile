import React, { useState, useEffect } from "react";
import Header from "./app/Header";
import Footer from "./app/Footer";
import BlogSection from "./app/blogs/BlogSection";
import TechnologySection from "./app/technology/TechnologySection";
import { GetKARMProfile } from "./services/karm";
import AboutMe from "./app/about/AboutMe";

export default function App() {
  const [karmProfile, setKarmProfile] = useState();

  useEffect(() => {
    setTimeout(() => {
      GetKARMProfile().then(setKarmProfile);
    }, 1000);
  }, []);

  if (!karmProfile)
    return (
      <div className="animate-container ">
        <h2 className="animate">Loading...</h2>
      </div>
    );

  return (
    <div>
      <Header karm={karmProfile} />

      <AboutMe karm={karmProfile} />

      <BlogSection />

      <TechnologySection />

      <Footer />
    </div>
  );
}
