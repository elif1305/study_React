import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>      //! linkte aktif ozellik veremiyoruz.
      <NavLink                     //! NavLinkte aktif ozellik verebiliyoruz.
        to="/about"
        className={({ isActive }) =>
          isActive ? styles.activeStyle : undefined // bu su demek, activeStyle de style varsa uygula yoksa undefined yani bise yapma .

          // NavLinkte aktif ozellik verebiliyoruz. ornek:
          // className={({ isActive }) => (isActive ? "red" : "blue")
        }
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? styles.activeStyle : undefined
        }
      >
        Products
      </NavLink>
      {/* <a href="/">Home</a>   //! a tagi ile yapildigi zaman sayfa tekrar render aliyor.Bu nedenle LINK kullaniliyor.yukaridaki gibi.
      <a href="/about">About</a> 
      <a href="/products">Products</a> */}
    </div>
  );
};

export default Navbar;
