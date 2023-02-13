import "./body.scss";
import JSONDATA from "../countries-data.json";
import logo from "../logo.png";

import { useState } from "react";

const Body = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="body">
      <div className="navbar">
        <img src={logo} className="logo" />
        <input
          className="searchBox"
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>

      <div className="country-box">
        {JSONDATA.filter((value) => {
          if (searchTerm === "") {
            return value;
          } else if (
            value.country.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
        }).map((value, key) => {
          return (
            <div className="country" key={key}>
              <img src={value.flag_base64} className="flagImage" />
              <p>{value.country}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
