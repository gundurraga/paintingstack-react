import React from "react";
import { LogoStyled } from "./Logo.style";

const Logo = () => {
  return (
    <LogoStyled href="https://gundurraga.github.io/paintingstack-react/">
      <div className="logo">
        <div className="inside-logo noisy"></div>
      </div>
      <h1>
        <strong>Painting</strong>stack
      </h1>
    </LogoStyled>
  );
};

export default Logo;
