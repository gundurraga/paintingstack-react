import React, { useState } from "react";
import { MenuDisplay, MenuBurger, MenuItem } from "./Menu.style";

import TwitterIcon from "@material-ui/icons/Twitter";
import LanguageIcon from "@material-ui/icons/Language";
import { Switch } from "@material-ui/core";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <MenuBurger onClick={handleToggle} open={isMenuOpen}>
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </MenuBurger>

      <MenuDisplay open={isMenuOpen}>
        <MenuItem>
          <div className="itemContainer">
            <LanguageIcon color="primary" />
            <h4>Lang: ENG</h4>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="itemContainer switchTheme">
            <Switch color="default" />
            <h4>Night Mode</h4>
          </div>
        </MenuItem>
        <MenuItem>
          <a
            href="https://twitter.com/paintingstack"
            target="_blank"
            rel="noreferrer">
            <div className="menuLink itemContainer">
              <TwitterIcon color="primary" />
              <h4>Twitter</h4>
            </div>
          </a>
        </MenuItem>
      </MenuDisplay>
    </>
  );
};

export default Menu;
