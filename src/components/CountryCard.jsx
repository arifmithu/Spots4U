import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const CountryCard = ({ country }) => {
  const [show, setShow] = useState(false);
  console.log(country);
  return (
    <div className="card w-[359px] bg-base-100 shadow-xl image-full">
      <figure>
        <img src={country.image} alt="Shoes" />
      </figure>
      <div className="card-body hover:mt-24 duration-1000">
        <h2 className="card-title gradient uppercase">{country.country}</h2>
        <p>
          {country.country} is Famous for various tourists spots around the
          globe. Visit {country.country} to explore amazing things.
        </p>
        <div className="card-actions justify-end">
          <Link to={`/${country.country}`}>
            <button className="btn btn-primary">Check All Spots</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
