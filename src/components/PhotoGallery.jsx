import React, { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";

const PhotoGallery = () => {
  const [allSpots, setAllSpots] = useState([]);
  const [showSpots, setShowSpots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/spots")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllSpots(data);
        setShowSpots(data.slice(0, 6));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleShowPhotos = () => {
    const newPhotos = allSpots.slice(showSpots.length, showSpots.length + 6);
    setShowSpots([...showSpots, ...newPhotos]);
  };
  return (
    <div className="mx-5 lg:mx-[80px] mt-10 lg:mt-20">
      <div className="text-center">
        <div className=" text-4xl font-bold mb-3">
          <span className="text-red-500"> Photo </span>Gallery
        </div>
        <div className="text-center text-zinc-400 w-[60%] mx-auto">
          <p>
            Here are some photos of best tourists spots of South East Asia.
            Watch these photos and take a plan to visit your dream spot as soon
            as possible.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 shadow-lg bg-red-100 p-5 rounded-lg gap-4 lg:gap-10 mt-5 lg:mt-10">
        {showSpots.map((spot, index) => (
          <PhotoCard key={index} spot={spot}></PhotoCard>
        ))}
      </div>
      <div className=" w-full mt-5 text-center">
        <button
          onClick={handleShowPhotos}
          className="btn btn-active btn-accent text-white"
        >
          Show More Photo
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;
