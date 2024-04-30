import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const CountriesSection = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://spots4u-server.vercel.app/spots")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const allCountries = [];
        const pushedCountries = [];
        for (let spot of data) {
          let exist = false;
          for (let i = 0; i < allCountries.length; i++) {
            if (allCountries[i].country == spot.country) {
              exist = true;
            }
          }
          if (!exist) {
            allCountries.push(spot);
          }
        }
        setCountries(allCountries);
      });
  }, []);
  return (
    <div className="mt-20 mx-5 lg:mx-[80px]">
      <div className="divider divider-accent text-4xl font-bold">
        <span className="text-red-500">All</span> Countries
      </div>
      <div className="text-center text-zinc-400">
        <p>Check all the countries of South East Asia</p>
      </div>
      <div className="lg:grid grid-cols-3 gap-8 mt-5 lg:mt-10">
        {countries.slice(0, 6).map((spot, index) => (
          <CountryCard key={index} country={spot}></CountryCard>
        ))}
      </div>
    </div>
  );
};

export default CountriesSection;
