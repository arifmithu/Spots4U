import React from "react";
import { Tooltip } from "react-tooltip";

const PhotoCard = ({ spot }) => {
  return (
    <div className=" w-80 bg-base-100 shadow-xl image-full rounded-lg overflow-hidden">
      <a data-tooltip-id="my-tooltip" data-tooltip-content={spot.spotName}>
        <img src={spot.image} alt="Shoes" className="h-full object-cover" />
      </a>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default PhotoCard;
