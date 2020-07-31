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
          <NavLink exact to="/menu/combination" activeClassName="active-m">
            combination plates
          </NavLink>
          <NavLink exact to="/menu/alacarte" activeClassName="active-m">
            a la carte
          </NavLink>
          <NavLink exact to="/menu/sideorder" activeClassName="active-m">
            side orders
          </NavLink>
          <NavLink exact to="/menu/breakfast" activeClassName="active-m">
            breakfast
          </NavLink>
          <NavLink exact to="/menu/daily" activeClassName="active-m">
            daily specials
          </NavLink>
          <NavLink exact to="/menu/combos" activeClassName="active-m">
            super combos
          </NavLink>
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
