import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  console.log(basket);
  const login=()=>{
      if(user)
      {
          auth.signOut()
      }
  }

  return (
    <nav className="header">
      {/* logo on left */}
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* search box */}
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="search_icon " />
      </div>
      {/* 3 links */}
      <div className="header_nav">
        <Link to={!user&&"/Login"} className="header_link">
          <div  onClick={login}className="header_option">
            <span className="header_options_line_one">Hello</span>
            {user&&<span className="header_options_line_two">{user?.email}</span>}
            {!user&&<span className="header_options_line_two">Sign In</span>}

          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_options_line_one">Returns &</span>
            <span className="header_options_line_two">Orders</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          {user&&<div className="header_option">
            <span className="header_options_line_one">Your</span>
            <span className="header_options_line_two">Prime</span>
          </div>}
        </Link>
        <Link to="/Checkout" className="header_link">
          <div className="header_basker_options">
            <ShoppingBasketIcon className="basketIcon" />
            <span className="header_options_line_two">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
