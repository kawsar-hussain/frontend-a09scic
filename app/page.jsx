import React from "react";
import Hero from "./components/Home/Hero";
import Categories from "./components/Home/Categories";
import Craftsmanship from "./components/Home/Craftsmanship";
import Pillars from "./components/Home/Pillars";
import Testimonial from "./components/Home/Testimonial";
import Newsletter from "./components/Home/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Categories></Categories>
      <Craftsmanship></Craftsmanship>
      <Pillars></Pillars>
      <Testimonial></Testimonial>
      <Newsletter></Newsletter>
    </div>
  );
}
