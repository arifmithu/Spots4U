import React, { useContext, useEffect, useState } from "react";
import SpotCard from "./SpotCard";
import { AuthContext } from "./AuthProvider";

const AllSpots = () => {
  const [allSpots, setAllSpots] = useState([]);
  const [showSpots, setShowSpots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://spots4u-server.vercel.app/spots")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllSpots(data);
        setShowSpots(data.slice(0, 6));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  const handleShowAll = () => {
    setShowSpots(allSpots);
  };

  const handleAscendingSort = () => {
    // console.log(allSpots);
    allSpots.sort((a, b) => {
      const firstSpot = a.cost;
      const secondSpot = b.cost;
      const firstSpotCost = parseFloat(firstSpot);
      const secondSpotCost = parseFloat(secondSpot);
      return firstSpotCost - secondSpotCost;
    });
    // console.log(allSpots);
    setShowSpots(allSpots.slice(0, 6));
  };
  const handledescendingSort = () => {
    // console.log(allSpots);
    allSpots.sort((a, b) => {
      const firstSpot = a.cost;
      const secondSpot = b.cost;
      const firstSpotCost = parseFloat(firstSpot);
      const secondSpotCost = parseFloat(secondSpot);
      return secondSpotCost - firstSpotCost;
    });
    // console.log(allSpots);
    setShowSpots(allSpots.slice(0, 6));
  };
  return (
    <div>
      {loading ? (
        <div className="h-lvh flex justify-center items-center">
          <span className="loading loading-dots loading-lg items-center text-red-500"></span>{" "}
        </div>
      ) : error ? (
        <div className="h-lvh flex justify-center items-center">
          <span className=" items-center">{error}</span>{" "}
        </div>
      ) : (
        <>
          <div className="mx-5 lg:mx-[80px] mt-5 lg:mt-20">
            <div className="text-center">
              <div className=" text-4xl font-bold mb-3">
                <span className="text-red-500">Tourists</span>{" "}
                <span className="text-orange-500">Spots</span>
              </div>
              <div className="text-center text-zinc-400 w-[60%] mx-auto">
                <p>
                  South East Asia is renowned for its diverse array of
                  enchanting tourist spots from the historic wonders of Angkor
                  Wat and Borobudur Temple to the breathtaking natural
                  landscapes of Halong Bay and Komodo National Park. and it
                  offers endless opportunities for unforgettable experiences.
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1 bg-orange-500"
                >
                  Sort By Cost
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-orange-300 rounded-box w-52"
                >
                  <li>
                    <button onClick={handleAscendingSort}>Low to High</button>
                  </li>
                  <li>
                    <button onClick={handledescendingSort}>High to Low</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 shadow-lg bg-red-100 p-5 rounded-lg gap-4 lg:gap-10 mt-5 lg:mt-10">
              {showSpots.map((spot, index) => (
                <SpotCard key={index} spot={spot}></SpotCard>
              ))}
            </div>
            <div
              className={`text-center ${
                showSpots.length == allSpots.length ? "hidden" : ""
              }`}
            >
              <button
                onClick={handleShowAll}
                className="btn-secondary btn mt-5 font-bold"
              >
                Show All
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllSpots;
