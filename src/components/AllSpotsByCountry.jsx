import React from "react";
import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";

const AllSpotsByCountry = () => {
  const spots = useLoaderData();
  console.log(spots);
  return (
    <div className="mx-5 lg:mx-[80px] mt-5 lg:mt-20">
      <div className="text-center">
        <div className=" text-4xl font-bold mb-3">
          All Tourist Spots of
          <span className="text-red-500"> {spots[0].country}</span>
        </div>
        <div className="text-center text-zinc-400 w-[60%] mx-auto">
          <p>
            South East Asia is renowned for its diverse array of enchanting
            tourist spots from the historic wonders of Angkor Wat and Borobudur
            Temple to the breathtaking natural landscapes of Halong Bay and
            Komodo National Park. and it offers endless opportunities for
            unforgettable experiences.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 shadow-lg bg-red-100 p-5 rounded-lg gap-4 lg:gap-10 mt-5 lg:mt-10">
        {spots.map((spot, index) => (
          <SpotCard key={index} spot={spot}></SpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllSpotsByCountry;
