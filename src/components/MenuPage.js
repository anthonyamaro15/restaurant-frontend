import React from "react";
import { NavLink, useParams } from "react-router-dom";
import SingleItems from "./SingleItem";

const MenuHeader = () => {
  //   const { category } = useParams();
  // category to toggle menu items

  return (
    <div className="MenuPage">
      <header>
        <h1>menu</h1>
      </header>
      <section className="MenuPage-section">
        <div className="menu-btns">
          <NavLink to="/menu/combination">combination plates</NavLink>
          <NavLink to="/menu/alacarte">a la carte</NavLink>
          <NavLink to="/menu/sideorder">side orders</NavLink>
          <NavLink to="/menu/breakfast">breakfast</NavLink>
          <NavLink to="/menu/daily">daily specials</NavLink>
          <NavLink to="/menu/combos">super combos</NavLink>
        </div>

        <div className="Display-items">
          <SingleItems />
          <SingleItems />
          <SingleItems />
          <SingleItems />
          <SingleItems />
          <SingleItems />
          <SingleItems />
        </div>
      </section>
    </div>
  );
};

export default MenuHeader;
