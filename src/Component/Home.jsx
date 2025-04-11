import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Section from "./Section/Section";
import NewProduct from "./NewProduct/NewProduct";
import Popular_Product from "./Propular_Product/Popular_Product";
import Hero_Product from "./Hero_Product/Hero_Product";
import Top_Product from "./Top_product/Top_Product";
import Medical_Product from "./Medical_Product/Medical_Product";
import Achivement from "./Achivement/Achivement";
import UpcomingProduct from "./UpcomingProduct/UpcomingProduct";
import Offer from "./Offer/Offer";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";
import ScrollToTopButton from "./ScrollToTopButton";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Section />
      <NewProduct />
      <Popular_Product />
      <Hero_Product />
      <Top_Product />
      <Achivement />
      <Medical_Product />
      <UpcomingProduct />
      <Offer />
      <Blog />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Home;
