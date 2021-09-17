import React from "react";

import { Cabeza, Logo, Menu } from "./Header.style";

const Header = () => {
  return (
    <Cabeza>
      <Logo href="https://paintingstack.com">
        <div className="logo">
          <div className="inside-logo noisy"></div>
        </div>
        <h1>
          <strong>Painting</strong>stack
        </h1>
      </Logo>

      <div className="menuHamburger">
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </div>

      <Menu>
        <li>
          <h4>Lang: ENG</h4>
        </li>
        <li>
          <div className="switchTheme">
            <h4>Night Mode</h4>
            <div className="btn-nightMode">
              <div className="switch"></div>
            </div>
          </div>
        </li>
        <li>
          <a
            href="https://twitter.com/paintingstack"
            target="_blank"
            rel="noreferrer">
            <div className="menuLink">
              <ion-icon name="logo-twitter"></ion-icon>
              <h4>Twitter</h4>
            </div>
          </a>
        </li>
      </Menu>
    </Cabeza>
  );
};

export default Header;
