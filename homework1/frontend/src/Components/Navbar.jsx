import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import { insertData } from "../Reducers/profileReducer";

export default function Navbar() {
  const data = useSelector((state) => [state.profile]);
  // console.log(data);
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#99FFFF",
        border: "3px solid black",
        borderBottom: "0px",
      }}
    >
      <div
        style={{
          displat: "flex",
          padding: "20px",
          margin: "10px auto",
          textAlign: "center",
        }}
      >
        {data.map((x) => (
          <div
            key={x}
            style={{ display: "flex", flexDirection: "row-reverse" }}
          >
            <p style={{ padding: "0px 30px" }}> Age : {x.age}</p>
            <p style={{ padding: "0px 30px" }}> Lastname : {x.lastname}</p>
            <p style={{ padding: "0px 30px", textAlign: "right" }}>
              {" "}
              Firstname : {x.firstname}
            </p>
          </div>
        ))}
        <NavLink to="/profile" style={{ margin: "0px 20px" }}>
          Profile
        </NavLink>
        <NavLink to="/cart" style={{ margin: "0px 20px" }}>
          Cart
        </NavLink>
        <NavLink to="/productlist" style={{ margin: "0px 20px" }}>
          ProductList
        </NavLink>
      </div>
    </div>
  );
}
