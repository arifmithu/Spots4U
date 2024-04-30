import React from "react";

const PhotoCard = ({ spot }) => {
  return (
    <div className=" w-80 bg-base-100 shadow-xl image-full rounded-lg overflow-hidden">
      <img src={spot.image} alt="Shoes" className="h-full object-cover" />
    </div>
  );
};

export default PhotoCard;
