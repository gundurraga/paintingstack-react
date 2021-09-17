import React from "react";

import { HeaderStyle } from "./Header.style";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <HeaderStyle>
      <Logo />
      <Menu />
    </HeaderStyle>
  );
};

export default Header;
