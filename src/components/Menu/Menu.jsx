import React from "react";
import { MenuDisplay, MenuHamburger, MenuItem } from "./Menu.style";
import TwitterIcon from "@material-ui/icons/Twitter";
import LanguageIcon from "@material-ui/icons/Language";

//https://codepen.io/gundurraga/pen/wveyXmZ?editors=0010
const Menu = () => {
  return (
    <>
      <MenuHamburger>
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </MenuHamburger>

      <MenuDisplay>
        <MenuItem>
          <div className="itemContainer">
            <LanguageIcon />
            <h4>Lang: ENG</h4>
          </div>
        </MenuItem>
        <MenuItem>
          <div className=" itemContainer switchTheme">
            <h4>Night Mode</h4>
            <div className="btn-nightMode">
              <div className="switch"></div>
            </div>
          </div>
        </MenuItem>
        <MenuItem>
          <a
            href="https://twitter.com/paintingstack"
            target="_blank"
            rel="noreferrer">
            <div className="menuLink itemContainer">
              <TwitterIcon sx={{ m: 10 }} />
              <h4>Twitter</h4>
            </div>
          </a>
        </MenuItem>
      </MenuDisplay>
    </>
  );
};

export default Menu;
