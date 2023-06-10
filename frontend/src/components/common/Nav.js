import React from "react";
import logoInner from '../../assets/Images/logoInner.png';

const Nav = () => {

  return (
    <div className="nav layout-container" >

      <div className="logo-icon-container mid-container mid1">
        <img src={logoInner} alt="Logo" />
      </div>

    </div>
  );
};

export default Nav;