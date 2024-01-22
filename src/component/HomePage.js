import React from "react";
import Header from "./Header";
import Separator from "./Separator";
import SubHeader from "./SubHeader";
import Banner from "./Banner";
import BrandPartners from "./BrandPartners";
import SubBanner from "./SubBanner";
import Features from "./Feature";
import BannerTwo from "./BannerTwo";
import Labels from "./Labels";
import BannerThree from "./BannerThree";
import BannerFour from "./BannerFour";
import SubFooter from "./SubFooter";

const HomePage = () => {
  return (
    <>
      <Header />
      <Separator />
      <SubHeader />
      <Separator />
      <Banner />
      <BrandPartners />
      <SubBanner />
      <Features />
      <SubBanner />
      <BannerTwo />
      <Labels />
      <BannerThree />
      <BannerFour />
      <Separator />
      <SubFooter />
      <Separator />
    </>
  );
};

export default HomePage;
