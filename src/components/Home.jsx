import React, { useContext } from "react";
import Banner from "./BannerSwiper/Banner";
import AllSpots from "./AllSpots";
import TouristsSpotSection from "./TouristsSpotSection";
import CountriesSection from "./CountriesSection";
import { AuthContext } from "./AuthProvider";

const Home = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div>
      {loading ? (
        <div className="h-lvh flex justify-center items-center">
          <span className="loading loading-dots loading-lg items-center"></span>
        </div>
      ) : (
        <>
          <Banner></Banner>
          <TouristsSpotSection></TouristsSpotSection>
          <CountriesSection></CountriesSection>
        </>
      )}
    </div>
  );
};

export default Home;
