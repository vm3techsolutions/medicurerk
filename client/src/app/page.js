import AboutUs from "./home/AboutUs";
import BlogRoom from "./home/BlogRoom";
import CounterSection from "./home/CounterSection";
import DownloadBrouchure from "./home/DownloadBrouchure";
import HomeBanner from "./home/HomeBanner";
import OurExpertise from "./home/OurExpertise";
import OurProducts from "./home/OurProducts";
import TopSellingProducts from "./home/TopSellingProducts";
import WhatClientSay from "./home/WhatClientSay";

export default function Home() {
  return (
   <div>
    
    <HomeBanner/>
    <AboutUs/>
    <CounterSection/>
    <OurExpertise/>
    <OurProducts/>
    <TopSellingProducts/>
    <DownloadBrouchure/>
    <WhatClientSay/>
    <BlogRoom/>
     </div>
  );
}
