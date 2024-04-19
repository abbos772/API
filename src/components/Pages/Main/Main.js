import React, { useEffect, useState } from "react";
import "../Main/Main.css";
import not from "../../../img/Vector (21).png";
import before2 from "../../../img/_before.png";
import before from "../../../img/_before@2x.png";
import banner from "../../../img/banner-13.png.png";
import banner1 from "../../../img/banner-1.png.png";
import banner2 from "../../../img/banner-2.png.png";
import banner3 from "../../../img/banner-3.png.png";
import starts from "../../../img/div.product-rating.png";
import card from "../../../img/Vector (22).png";
import meva from "../../../img/Group 475.png";
import axios from "axios";
const API_URL = "https://dummyjson.com/products";
const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  const cardlar = data?.slice(0, 8).map((products) => (
    <div key={products.id} className="card">
      <div className="card_img">
        <img src={products.thumbnail} width={220} alt="" />
      </div>
      <div className="card_text">
        <p>{products.title}</p>
        <h3>{products.description.slice(0, 55)}...</h3>
        <div className="stars">
          <img src={starts} alt="" />
          <p>({products.rating})</p>
        </div>
        <div className="by">
          <p>By</p>
          <p style={{ color: "green" }}>{products.brand}</p>
        </div>
        <div className="price">
          <h4>${products.price}</h4>
          <button className="btn_add">
            <img src={card} alt="" /> Add
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="main__img">
        <img src={before} alt="" width={60} />
        <img className="bf" src={before2} alt="" />
        <img className="banner" src={banner} alt="" />
        <div className="continer">
          <div className="main_flex">
            <div className="main__text">
              <h3>
                <b>100%</b> Organic Vegetables
              </h3>
              <h1>
                The best way to <br />
                stuff your wallet.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet{" "}
                <br />
                reiciendis beatae consequuntur.
              </p>
              <div className="search2">
                <p>Your emaill address</p>
                <div className="ser">
                  <h3>Subscribe</h3>
                </div>
              </div>
            </div>
            <div className="main__mini__cards">
              <div className="mini__card">
                <img src={not} alt="" />
                <h4 style={{ color: "rgb(59, 183, 126)" }}>Shopping</h4>
              </div>
              <div className="mini__card">
                <img src={not} alt="" />
                <h4>Recips</h4>
              </div>
              <div className="mini__card">
                <img src={not} alt="" />
                <h4 style={{ color: "rgb(59, 183, 126)" }}>Kitchen</h4>
              </div>
              <div className="mini__card">
                <img src={not} alt="" />
                <h4 style={{ color: "rgb(59, 183, 126)" }}>News</h4>
              </div>
              <div className="mini__card">
                <img src={not} alt="" />
                <h4 style={{ color: "rgb(59, 183, 126)" }}>Food</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="continer">
        <div className="mediums">
          <div className="medium">
            <img src={banner1} alt="" height={250} />
            <div className="medi__text">
              <h4>
                Everyday Fresh & <br /> Clean with Our <br />
              </h4>
              <button className="btn__mini">Shop now</button>
            </div>
          </div>
          <div className="medium">
            <img src={banner2} alt="" height={250} />
            <div className="medi__text">
              <h4>
                Make your Breakfast <br />
                Healthy and Easy
              </h4>
              <button className="btn__mini">Shop now</button>
            </div>
          </div>
          <div className="medium">
            <img src={banner3} alt="" height={250} />
            <div className="medi__text">
              <h4>
                The best Organic <br />
                Products Online
              </h4>
              <button className="btn__mini">Shop now</button>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="cards__text">
            <h1>Popular Products</h1>
            <div className="all_">
              <p style={{ color: "green" }}>All</p>
              <p>Milks & Dairies</p>
              <p>Coffes & Teas</p>
              <p>Pet Foods</p>
              <p>Meats</p>
              <p>Vegetables</p>
              <p>Fruits</p>
            </div>
          </div>
          <div className="card_flex">{cardlar}</div>
        </div>
      </div>
      <div className="footer">
        <div className="continer">
          <div className="foot">
            <div className="foot1">
              <img src={meva} alt="" width={150} />
              <p>
                FoodTrove is the biggest market of grocery products. <br /> Get
                your daily needs from our store.
              </p>
              <p>
                51 Green St.Huntington ohaio beach ontario, NY <br />
                11746 KY 4783, USA.
              </p>
              <p>example@email.com</p>
              <p>+91 123 4567890</p>
            </div>
            <div className="foot1">
              <h4>Company</h4>
              <p>About Us</p>
              <p>Delivery Information</p>
              <p>Privacy Policy </p>
              <p>Terms & Conditions</p>
              <p>contact Us</p>
              <p>Support Center</p>
            </div>
            <div className="foot1">
              <h4>Company</h4>
              <p>About Us</p>
              <p>Delivery Information</p>
              <p>Privacy Policy </p>
              <p>Terms & Conditions</p>
              <p>contact Us</p>
              <p>Support Center</p>
            </div>

            <div className="foot1">
              <h4>Company</h4>
              <p>About Us</p>
              <p>Delivery Information</p>
              <p>Privacy Policy </p>
              <p>Terms & Conditions</p>
              <p>contact Us</p>
              <p>Support Center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
