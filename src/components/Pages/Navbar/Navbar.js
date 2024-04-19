import React, { useEffect, useState } from "react";
import "../../Pages/Navbar/Navbar.css";
import menu from "../../../img/Vector (14).png";
import phone from "../../../img/Vector (15).png";
import meva from "../../../img/Group 475.png";
import lupa from "../../../img/Vector (16).png";
import vector from "../../../img/Vector (17).png";
import user from "../../../img/Vector (18).png";
import heart from "../../../img/Vector (19).png";
import card from "../../../img/Vector (20).png";
const Navbar = () => {
  const href = ["Home", "Category", "Products", "Pages", "Blog", "Elements"];
  let a = href?.map((el, ind) => {
    return (
      <a key={ind} href="">
        {el}
      </a>
    );
  });
  return (
    <div>
      <div className="navbar__top">
        <div className="navbar__continer">
          <div className="nav">
            <div className="nav__menu">
              <img src={menu} alt="" />
            </div>
            <div className="a__text">{a}</div>
            <div className="phone">
              <img src={phone} alt="" />
              <h5 className="num">+123 ( 456 ) ( 7890 )</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar__continer">
        <div className="navbar__bottom">
          <div className="meva">
            <img src={meva} alt="" />
          </div>
          <div className="serch__card">
            <input type="text" id="search" placeholder="Search For items..." />
            <div className="all">
              <h5>All Categories</h5>
              <img src={vector} alt="" />
            </div>
            <button className="btn">
              <img src={lupa} alt="" />
            </button>
          </div>
          <div className="login">
            <div className="acc">
              <img src={user} alt="" />
              <h3>Account</h3>
            </div>
            <div className="acc">
              <img src={heart} alt="" />
              <h3>Wishlist</h3>
            </div>
            <div className="acc">
              <img src={card} alt="" />
              <h3>cart</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
