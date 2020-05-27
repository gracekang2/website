import React from "react";
import { HashRouter, Link } from "react-router-dom";

export const HeaderLink = ({ Href, Colour, Name, OnLinkClick }) => {
  return (
    <HashRouter basename="/">
      <div className="headerLink">
        <Link to={Href}>
          <span className={Colour} value={Href}>
            {Name}
          </span>
        </Link>
      </div>
    </HashRouter>
  );
};
