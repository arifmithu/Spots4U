import React from "react";
import { useLoaderData } from "react-router-dom";
import "../index.css";

const Details = () => {
  const spot = useLoaderData();
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
    <div className="mx-5 lg:mx-[80px] shadow-xl p-5">
      <div class="divider divider-success text-4xl font-bold ">
        <span className="gradient">{spotName}</span>
      </div>
      <div className="h-[350px] rounded-lg overflow-hidden mb-4">
        <img src={image} alt="" className=" h-full w-full object-cover" />
      </div>
      <div class="divider divider-success text-4xl font-bold mb-10">
        <span className="gradient">{country}</span>
      </div>
      <div className="mb-3 flex gap-2 items-center">
        <div className="w-[17.8%] text-nowrap flex items-center justify-between">
          <span className="text-lg font-bold">Short Description</span>
          <span className="text-lg font-bold">:</span>
        </div>
        <p className="flex-1">{description}</p>
      </div>
      <div className="mb-3 flex items-center gap-2">
        <p className="w-[17.8%] flex justify-between items-center">
          <span className="text-lg font-bold">Location</span>
          <span className="text-lg font-bold">:</span>
        </p>
        <p className="flex-1 ">It is located in the {location}.</p>
      </div>
      <div className="mb-3 flex gap-2 items-center">
        <p className="w-[17.8%] flex justify-between items-center">
          <span className="text-lg font-bold">Visitor</span>
          <span className="text-lg font-bold">:</span>
        </p>
        <p className="flex-1">
          According to the global statistics about{" "}
          <em className="gradient">{visitor}</em> tourists visit this tourists
          spot every year. It bears a great impact over the economoy of{" "}
          <strong className="gradient">{country}</strong>.
        </p>
      </div>
      <div className="mb-3 flex gap-2 items-center">
        <p className="w-[17.8%] flex justify-between items-center">
          <span className="text-lg font-bold">Season For Visit</span>
          <span className="text-lg font-bold">:</span>
        </p>
        <p className="flex-1">
          According to the <strong className="gradient">{country}</strong>{" "}
          statistics <em className="gradient">{seasonality}</em> is/are perfect
          for tourists to visit this tourists spot. It helps the tourists to
          have best moments and unforgetable memory to visit this place again
          and again.
        </p>
      </div>
      <div className="mb-3 flex gap-2 items-center">
        <p className="w-[17.8%] flex justify-between items-center">
          <span className="text-lg font-bold">Required Time</span>
          <span className="text-lg font-bold">:</span>
        </p>
        <p className="flex-1">
          You need approximately <strong className="gradient">{time}</strong> to
          visit the main spots spoothly. So make the schedule carefully.
        </p>
      </div>
      <div className="mb-3 flex gap-2 items-center">
        <p className="w-[17.8%] flex justify-between items-center">
          <span className="text-lg font-bold">Average Cost</span>
          <span className="text-lg font-bold">:</span>
        </p>
        <p className="flex-1">
          After a reserch period by the online news and informations you need{" "}
          <strong className="gradient">{cost}</strong> Bangladeshi Taka per day.
          Within this money transportation, housing and food included.
        </p>
      </div>
    </div>
  );
};

export default Details;
