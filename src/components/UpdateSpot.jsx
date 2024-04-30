import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const spot = useLoaderData();
  const { user } = useContext(AuthContext);
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
    _id,
  } = spot;
  const handleUpdateSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const spotName = form.spotName.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const time = form.time.value;
    const visitor = form.visitor.value;
    const image = form.image.value;
    const userEmail = user.email;
    const userName = user.displayName;

    const updatedSpot = {
      spotName,
      country,
      location,
      description,
      cost,
      seasonality,
      time,
      visitor,
      image,
      userEmail,
      userName,
    };

    fetch(`https://spots4u-server.vercel.app/spots/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire("Spot updated successfully !");
        }
      });
  };
  return (
    <div className="mx-5 lg:mx-[80px] mt-5 pb-5 lg:pb-10 lg:mt-10 px-5 lg:px-20 bg-green-200 rounded-lg">
      <div className=" text-center">
        <h1 className="text-3xl font-bold mb-8 pt-5 lg:pt-10">Update Spot</h1>
      </div>
      <form onSubmit={handleUpdateSpot}>
        {/* row-1 */}
        <div className="flex gap-5">
          <div className="flex flex-col  mb-5 w-1/2">
            <label htmlFor="spot" className="text-xl ">
              Tourists Spot Name :
            </label>
            <input
              type="text"
              name="spotName"
              defaultValue={spotName}
              placeholder="Enter a new spot"
              className="flex-1 p-2 text-xl border rounded-lg ml-1"
            />
          </div>
          <div className="flex flex-col mb-5 w-1/2">
            <label htmlFor="spot" className="text-xl ">
              Country Name :
            </label>
            <input
              type="text"
              name="country"
              defaultValue={country}
              placeholder="Enter country name"
              className="flex-1 p-2 text-xl border rounded-lg ml-1"
            />
          </div>
        </div>
        {/* row-2 */}
        <div className="flex gap-5">
          <div className="flex flex-col mb-5 w-1/2">
            <label htmlFor="spot" className="text-xl ">
              Location :
            </label>
            <input
              type="text"
              name="location"
              defaultValue={location}
              placeholder="Enter location"
              className="flex-1 p-2 text-xl border rounded-lg ml-1"
            />
          </div>
          <div className="flex flex-col mb-5 w-1/2">
            <label htmlFor="spot" className="text-xl ">
              Short Description :
            </label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              placeholder="Enter short description"
              className="flex-1 p-2 text-xl border rounded-lg ml-1"
            />
          </div>
        </div>
        {/* row-3 */}
        <div className="flex gap-5">
          <div className="flex flex-col w-1/2 mb-5">
            <label htmlFor="spot" className="text-xl ">
              Average Cost :
            </label>
            <input
              type="text"
              name="cost"
              defaultValue={cost}
              placeholder="Enter average cost"
              className="flex-1 p-2 text-xl border rounded-lg ml-1"
            />
          </div>
          <div className="flex flex-col w-1/2 mb-5">
            <label htmlFor="spot" className="text-xl ">
              Seasonality:
            </label>
            <input
              type="text"
              name="seasonality"
              defaultValue={seasonality}
              placeholder="Enter best season to visit"
              className="flex-1 p-2 text-xl border rounded-lg ml-1"
            />
          </div>
        </div>
        {/* row-4 */}
        <div className="flex gap-5">
          <div className="flex flex-col w-1/2 mb-5">
            <label htmlFor="spot" className="text-xl ">
              Travel Time :
            </label>
            <input
              type="text"
              name="time"
              defaultValue={time}
              placeholder="Required time for a visit"
              className="flex-1 p-2 text-xl border rounded-lg ml-1"
            />
          </div>
          <div className="flex flex-col w-1/2 mb-5">
            <label htmlFor="spot" className="text-xl ">
              Visitor Per Year :
            </label>
            <input
              type="text"
              name="visitor"
              defaultValue={visitor}
              placeholder="How much people visit per year"
              className="flex-1 p-2 text-xl border rounded-lg ml-1"
            />
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="spot" className="text-xl ">
            Image URL :
          </label>
          <input
            type="text"
            name="image"
            defaultValue={image}
            placeholder="Enter image URL"
            className="w-full p-2 text-xl border rounded-lg ml-1"
          />
        </div>
        <input
          type="submit"
          value="Update Spot"
          className="w-full bg-green-700 text-white py-2 rounded-lg font-bold text-xl btn"
        />
      </form>
    </div>
  );
};

export default UpdateSpot;
