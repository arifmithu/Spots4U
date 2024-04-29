import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";

const AddSpots = () => {
  const { user } = useContext(AuthContext);
  const handleAddSpot = (e) => {
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

    const newSpot = {
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

    fetch("http://localhost:5000/spots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Spot added successfully !");
          form.reset();
        }
      });
  };
  return (
    <div className="mx-5 lg:mx-[80px] mt-5 pb-5 lg:pb-10 lg:mt-10 px-5 lg:px-20 bg-green-200 rounded-lg">
      <div className=" text-center">
        <h1 className="text-3xl font-bold mb-8 pt-5 lg:pt-10">
          Add A New Spot
        </h1>
      </div>
      <form onSubmit={handleAddSpot}>
        {/* row-1 */}
        <div className="flex gap-5">
          <div className="flex flex-col  mb-5 w-1/2">
            <label htmlFor="spot" className="text-xl ">
              Tourists Spot Name :
            </label>
            <input
              type="text"
              name="spotName"
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
            placeholder="Enter image URL"
            className="w-full p-2 text-xl border rounded-lg ml-1"
          />
        </div>
        <input
          type="submit"
          value="Add Spot"
          className="w-full bg-green-700 text-white py-2 rounded-lg font-bold text-xl btn"
        />
      </form>
    </div>
  );
};

export default AddSpots;
