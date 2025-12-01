import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn, cart, setCart }) => {
  const navigate = useNavigate();

  const cartCount = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  // Desktop dropdown
  const [openShirt, setOpenShirt] = useState(false);
  const [openPant, setOpenPant] = useState(false);

  // Mobile menu
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileShirt, setMobileShirt] = useState(false);
  const [mobilePant, setMobilePant] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    setCart([]);
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">

      {/* LEFT (Logo + Mobile Menu Button) */}
      <div className="navbar-start">
        
        {/* Mobile Hamburger */}
        <button
          className="btn btn-ghost lg:hidden text-xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost ml-2 p-0">
          <img
            className="w-25 h-16 rounded-md"
            src="https://www.vhv.rs/dpng/d/134-1348158_shopping-dresses-fashion-clothing-shopper-clothes-man-and.png"
            alt="logo"
          />
        </Link>
      </div>

      {/* CENTER MENU (Desktop Only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-md">

          <li><Link to="/">HOME</Link></li>

          {/* SHIRT DROPDOWN (Desktop) */}
          <li
            className="relative"
            onMouseLeave={() => setOpenShirt(false)}
          >
            <button 
              className="btn btn-ghost"
              onClick={() => setOpenShirt(!openShirt)}
            >
              SHIRT ▾
            </button>

            {openShirt && (
              <ul className="absolute bg-base-100 shadow-lg p-3 rounded-lg w-40">
                <li><Link to="/roadstar">Roadster</Link></li>
                <li><Link to="/highlander">Highlander</Link></li>
                <li><Link to="/peterengland">Peter England</Link></li>
                <li><Link to="/levis">Levi's</Link></li>
              </ul>
            )}
          </li>

          {/* PANT DROPDOWN (Desktop) */}
          <li
            className="relative"
            onMouseLeave={() => setOpenPant(false)}
          >
            <button 
              className="btn btn-ghost"
              onClick={() => setOpenPant(!openPant)}
            >
              PANT ▾
            </button>

            {openPant && (
              <ul className="absolute bg-base-100 shadow-lg p-3 rounded-lg w-40">
                <li><Link to="/spykar">Spykar</Link></li>
                <li><Link to="/lee">Lee</Link></li>
                <li><Link to="/polo">U.S. Polo</Link></li>
                <li><Link to="/jones">Jack & Jones</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/about">ABOUT</Link></li>

          {/* CART */}
          <li>
            <Link to="/cart" className="relative">
              CART
              {cartCount > 0 && (
                <span className="badge badge-error ml-1">{cartCount}</span>
              )}
            </Link>
          </li>

        </ul>
      </div>

      {/* RIGHT BUTTONS */}
      <div className="navbar-end gap-2 hidden lg:flex">
        {isLoggedIn ? (
          <button className="btn btn-error" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn btn-outline">Login</Link>
        )}
      </div>

      {/* 🌟 MOBILE MENU PANEL */}
      {mobileOpen && (
        <div className="absolute bg-base-100 w-full top-16 left-0 p-5 shadow-lg lg:hidden">

          <ul className="menu text-lg space-y-3">

            <li><Link to="/" onClick={() => setMobileOpen(false)}>HOME</Link></li>

            {/* MOBILE SHIRT */}
            <li>
              <button
                className="font-semibold"
                onClick={() => setMobileShirt(!mobileShirt)}
              >
                SHIRT ▾
              </button>
              {mobileShirt && (
                <ul className="pl-5 space-y-2">
                  <li><Link to="/roadstar">Roadster</Link></li>
                  <li><Link to="/highlander">Highlander</Link></li>
                  <li><Link to="/peterengland">Peter England</Link></li>
                  <li><Link to="/levis">Levi's</Link></li>
                </ul>
              )}
            </li>

            {/* MOBILE PANT */}
            <li>
              <button
                className="font-semibold"
                onClick={() => setMobilePant(!mobilePant)}
              >
                PANT ▾
              </button>
              {mobilePant && (
                <ul className="pl-5 space-y-2">
                  <li><Link to="/spykar">Spykar</Link></li>
                  <li><Link to="/lee">Lee</Link></li>
                  <li><Link to="/polo">U.S. Polo</Link></li>
                  <li><Link to="/jones">Jack & Jones</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/about">ABOUT</Link></li>

            {/* CART */}
            <li>
              <Link to="/cart">
                CART
                {cartCount > 0 && (
                  <span className="badge badge-error ml-2">{cartCount}</span>
                )}
              </Link>
            </li>

            {/* LOGIN / LOGOUT IN MOBILE */}
            <li className="pt-4">
              {isLoggedIn ? (
                <button className="btn btn-error w-full" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Link to="/login" className="btn btn-outline w-full">
                  Login
                </Link>
              )}
            </li>

          </ul>
        </div>
      )}

    </div>
  );
};

export default Navbar;
