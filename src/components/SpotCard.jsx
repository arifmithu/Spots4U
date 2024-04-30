import React from "react";
import { Link } from "react-router-dom";

const SpotCard = ({ spot }) => {
  console.log(spot);
  const {
    spotName,
    country,
    location,
    image,
    seasonality,
    cost,
    description,
    time,
    visitor,
  } = spot;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <div className="w-1/3 border rounded-tl-lg rounded-bl-lg overflow-hidden">
        <img src={image} alt="spot image" className=" h-full object-cover" />
      </div>
      <div className="card-body w-2/3 bg-red-200">
        <div className="flex items-center gap-3">
          <span className="card-title">{spotName}</span>
          <span className="bg-slate-300 p-1 rounded-lg">{country}</span>
        </div>
        <p className="font-bold">
          {" "}
          Cost : <span className="text-red-900 font-bold text-lg">
            {cost}
          </span>{" "}
          Taka per day
        </p>
        <p className="font-bold">
          {" "}
          Total Visitor Per Year :{" "}
          <span className="text-red-900 font-bold text-lg">{visitor}</span>
        </p>
        <p className="font-bold">
          Travel Time :{" "}
          <span className="text-red-900 font-bold text-lg">{time}</span>
        </p>
        <p className="font-bold">
          Seasonality :{" "}
          <span className="text-red-900 font-bold text-lg"> {seasonality}</span>{" "}
        </p>
        <div className="card-actions justify-center mb-[-25px]">
          <Link to={`/details/${spot._id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpotCard;
