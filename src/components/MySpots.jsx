import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import "../index.css";
import Swal from "sweetalert2";

const MySpots = () => {
  const [allSpots, setAllSpots] = useState([]);
  const { user, loading } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    fetch("https://spots4u-server.vercel.app/spots")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const mySpots = data.filter((spot) => spot.userEmail == user.email);
        setAllSpots(mySpots);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://spots4u-server.vercel.app/spots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your spot has been deleted.",
                icon: "success",
              });
            }
            const remaining = allSpots.filter((spot) => spot._id != id);
            setAllSpots(remaining);
          });
      }
    });
  };
  return (
    <div>
      {loading ? (
        <div className="h-lvh flex justify-center items-center">
          <span className="loading loading-dots loading-lg items-center"></span>
        </div>
      ) : (
        <div className=" mt-10 lg:mt-14 mx-5 lg:mx-[80px]">
          <div className="text-center mb-10">
            <div className=" text-4xl font-bold mb-3">
              <span className="text-red-500">My Added</span>
              <span className="text-orange-500"> Spots</span>
            </div>
            <div className="text-center text-zinc-400 w-[60%] mx-auto">
              <p>
                I have added some local and international spots to help others
                to have proper information.All these spots I have added in
                different times down below. I can update or delete any spot.
              </p>
            </div>
          </div>
          <div className="rounded-lg">
            <table className="table table-xs">
              <thead>
                <tr className="border text-xl">
                  <th></th>
                  <th>Spot Name</th>
                  <th>Country</th>
                  <th>Location</th>
                  <th>Average Cost</th>
                  <th>Update Spot</th>
                  <th>Delete Spot</th>
                </tr>
              </thead>
              <tbody>
                {allSpots.map((spot, index) => (
                  <tr key={index} className="border text-zinc-400">
                    <th className="text-lg">{index + 1}</th>
                    <td className="text-lg">{spot.spotName}</td>
                    <td className="text-lg">{spot.country}</td>
                    <td className="text-lg">{spot.location}</td>
                    <td className="text-lg">{spot.cost}</td>
                    <td className="text-lg">
                      <Link to={`/update/${spot._id}`}>
                        <button className="btn">Update</button>
                      </Link>
                    </td>
                    <td>
                      <Link>
                        <button
                          onClick={() => handleDelete(spot._id)}
                          className="btn"
                        >
                          Delete
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MySpots;
