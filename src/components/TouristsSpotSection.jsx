import React, { useEffect, useState } from "react";
import SpotCard from "./SpotCard";

const TouristsSpotSection = () => {
  const [allSpots, setAllSpots] = useState([]);
  const [showSpots, setShowSpots] = useState([]);

  useEffect(() => {
    fetch("https://spots4u-server.vercel.app/spots")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllSpots(data);
        setShowSpots(data.slice(0, 6));
      });
  }, []);

  return (
    <div className="mx-5 lg:mx-[80px] mt-5 lg:mt-20">
      <div className="divider divider-accent text-4xl font-bold">
        <span className="text-red-500">Tourists</span>{" "}
        <span className="text-orange-500">Spots</span>
      </div>
      <div className="text-center text-zinc-400">
        <p>Check all the added tourists spots</p>
      </div>
      <div className="grid grid-cols-2 shadow-lg bg-slate-200 p-5 rounded-lg gap-4 lg:gap-10 mt-5 lg:mt-10">
        {showSpots.map((spot, index) => (
          <SpotCard key={index} spot={spot}></SpotCard>
        ))}
      </div>
    </div>
  );
};

export default TouristsSpotSection;
