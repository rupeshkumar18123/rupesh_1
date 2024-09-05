import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "./AdvancedBanner";
import "./App.css";
function App() {
  
  return (
    <ParallaxProvider>
    <AdvancedBannerTop />
    <div className="center full">
      <h1 className="headline gray">Goodnight.</h1>
    </div>
  </ParallaxProvider>
  );
}

export default App;
