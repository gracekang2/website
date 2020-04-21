import React from "react";

export const HeaderLink = ({ Href, Colour, Name, OnLinkClick }) => {
  return (
    <div className="headerLink" onClick={OnLinkClick.bind(null, Href)}>
      <span className={Colour} value={Href}>
        {Name}
      </span>
    </div>
  );
};
