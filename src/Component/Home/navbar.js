import React, { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import toggle from "../../Images/Toggle.png";
import udemyLogo from "../../Images/Udemy.png";
import searchIcon from "../../Images/Search Icon.png";
import cart from "../../Images/Cart.png";
import lang from "../../Images/Lang.png";
import "../../Styles/Home/navbar.css";

function Navbar() {
  const searchInput = useRef("");
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const search = document.querySelector(".search");

  const filterSearch = () => {
    navigate({ pathname: "/", search: `?search=${searchInput.current.value}` });
    search.value = "";
  };

  const filterSearchOnEnter = (event) => {
    if (event.key === "Enter") {
      navigate({
        pathname: "/",
        search: `?search=${searchInput.current.value}`,
      });
      search.value = "";
    }
  };

  return (
    <nav className="nav-container ">
      <div className="nav-toggle d-block d-sm-none">
        <img src={toggle} alt="Toggle icon" className="nav-img" />
      </div>

      <div className="udemy-logo ">
        <Link to="/">
          <img src={udemyLogo} alt="Udemy logo" className="nav-img" />
        </Link>
      </div>

      <div className="nav-text hidden-all">
        <a>Categories</a>
      </div>

      <div className="nav-search">
        <img src={searchIcon} alt="search icon" />
        <input
          type="text"
          placeholder="Search for anything"
          className="search hidden-all"
          onKeyPress={filterSearchOnEnter}
          ref={searchInput}
        />
      </div>

      <input
        type="submit"
        value="Search"
        className="search-btn hidden-all"
        onClick={filterSearch}
      />

      <div className="nav-text nav-hidden1 hidden-all">
        <a>Udemy Business</a>
      </div>
      <div className="nav-text nav-hidden2 hidden-all">
        <a>Teach on Udemy</a>
      </div>

      <div className="nav-cart">
        <img src={cart} alt="cart icon" className="nav-img" />
      </div>

      <div className="hidden-all">
        <button className="nav-btn login">Login</button>
      </div>
      <div className="hidden-all">
        <button className="nav-btn signup">Sign Up</button>
      </div>

      <div className="hidden-all nav-lang">
        <img src={lang} alt="lang icon" className="nav-img" />
      </div>
    </nav>
  );
}

export default Navbar;
