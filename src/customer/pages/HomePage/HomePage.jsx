import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel./HomeSectionCarousel";
import { women_kurti } from "../../../Data/women_kurti";

function HomePage() {
  return (
    <div>
      <MainCarousel></MainCarousel>
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={women_kurti} sectionName={"Women Kurti"} />
        <HomeSectionCarousel data={women_kurti} sectionName={"Women Saree"} />
        <HomeSectionCarousel data={women_kurti} sectionName={"Women Suit"} />
        <HomeSectionCarousel data={women_kurti} sectionName={"Women Formals"} />
        <HomeSectionCarousel data={women_kurti} sectionName={"Women Casuals"} />
      </div>
    </div>
  );
}

export default HomePage;
