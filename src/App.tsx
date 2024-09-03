import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "./AdvancedBanner";
import "./App.css";
function App() {
  // let name: string = "Rupesh singh";
  // let age: number = 21;
  // let arr: string[];
  // let arr_num: number[];

  
  // type Person = {
  //   name: string;
  //   age: number;
  // };

  // let person: Person = {
  //   name : "rupesh",
  //   age : 21
  // };

  // person : Object;
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
