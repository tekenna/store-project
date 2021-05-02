import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import {
  RiSearchLine,
  RiAccountPinCircleFill,
  RiShoppingCart2Fill,
} from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { SiShopify } from "react-icons/si";
import  Fancy  from "./Fancy";


class Navbar extends Component {
  render() {
    return (
      <nav>
        <Fancy />
        <div className="nav_container">
          <Link to="/" className="nav_home_link">
            <p className="top_text">Shop with us</p>
            <SiShopify size="3em" color="var(--Yellow)" />
          </Link>

          <form>
            <button className="btn" type="button">
              <span>
                <RiAccountPinCircleFill color="rgba(29, 107, 209, 0.829)" />
                Sign up
              </span>
            </button>
            <button className="btn" type="button">
              <span>
                <FiLogIn color="rgba(29, 107, 209, 0.829)" /> Login
              </span>
            </button>
          </form>
        </div>
        <form className="search_area">
          <input
            className="search_input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="search_btn" type="submit">
            <RiSearchLine size="1em"  color="var(--Yellow)" />
          </button>
        </form>
        <div className="nav_bottom">
          <p className="style_text">
            Get the latest smart phone of your choice today!!
          </p>
          <Link to="/carts" style={{ textDecoration: "none" }}>
            <button className="cart_btn">
              <span>My cart</span>{" "}
              <RiShoppingCart2Fill
                id="cart_icon"
                size="1.5em"
                color="var(--Blue)"
              />
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
