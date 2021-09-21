import React, { useState } from "react";
import { MenuDisplay, MenuBurger, MenuItem } from "./Menu.style";

import TwitterIcon from "@material-ui/icons/Twitter";
import LanguageIcon from "@material-ui/icons/Language";
import { Switch } from "@material-ui/core";
import FormControlLabel from "@mui/material/FormControlLabel";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const toggleLanguages = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const [isNightMode, setIsNightMode] = useState(false);
  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <>
      <MenuBurger onClick={handleToggle} open={isMenuOpen}>
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </MenuBurger>

      <MenuDisplay open={isMenuOpen}>
        <MenuItem onClick={toggleLanguages}>
          <div className="itemContainer">
            <LanguageIcon color="primary" />
            <h4>Lang: ENG</h4>
          </div>
        </MenuItem>
        {isLanguageOpen && (
          <>
            <MenuItem className="language">
              <div className="itemContainer">
                <h4>English</h4>
              </div>
            </MenuItem>
            <MenuItem className="language">
              <div className="itemContainer">
                <h4>Français</h4>
              </div>
            </MenuItem>
            <MenuItem className="language">
              <div className="itemContainer">
                <h4>Español</h4>
              </div>
            </MenuItem>
          </>
        )}
        <MenuItem>
          <div className="itemContainer switchTheme" onClick={toggleNightMode}>
            <Switch color="default" checked={isNightMode} />
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
