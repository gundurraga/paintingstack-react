import styled from "styled-components";

export const Cabeza = styled.nav`
  background-color: rgb(245, 245, 245);
  border-bottom: 1px solid rgb(209, 209, 209);
  box-shadow: 0px 2px 5px 0px rgba(18, 18, 33, 0.1);
  -moz-box-shadow: 0px 2px 5px 0px rgba(18, 18, 33, 0.1);
  -webkit-box-shadow: 0px 2px 5px 0px rgba(18, 18, 33, 0.1);
  display: flex;
  position: fixed;
  height: 56px;
  justify-content: start;
  left: 0;
  margin-top: 0;
  transition: transform 1s;
  top: 0;
  width: 100%;
  z-index: 10;

  .menuHamburger {
    display: block;
    cursor: pointer;
    position: absolute;
    height: 36px;
    top: 50%;
    margin-top: -24px;
    right: 17px;
    padding: 6px 8px;
    border-radius: 50%;
  }

  .menuHamburger:hover,
  .menuHamburger:focus {
    background-color: rgb(235, 235, 235);
    outline: 0;
  }

  .bar {
    width: 32px;
    height: 4px;
    background-color: rgb(160, 160, 160);
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 2px;
  }

  .in-view .bar1 {
    /* -webkit-transform: rotate(-45deg) translate(-9px, 6px); */
    transform: translate(0, 10px) rotate(-45deg);
    background: rgb(255, 184, 28);
  }

  .in-view .bar2 {
    opacity: 0;
  }

  .in-view .bar3 {
    /* -webkit-transform: rotate(45deg) translate(-8px, -8px); */
    transform: translate(0, -10px) rotate(45deg);
    background: rgb(255, 184, 28);
  }
`;

export const Logo = styled.a`
  display: flex;
  height: 30px;
  justify-content: center;
  margin-top: -15px;
  margin-left: 25px;
  position: absolute;
  top: 50%;
  text-decoration: none;

  .logo {
    background-color: rgb(255, 255, 255);
    border: solid;
    border-color: rgb(199, 199, 199);
    border-width: 1px;
    height: 28px;
    position: relative;
    width: 28px;
  }

  .inside-logo {
    background-color: rgb(0, 59, 92);
    display: block;
    height: 67%;
    left: 23%;
    position: relative;
    transform: rotate(11deg);
    -moz-transform: rotate(11deg);
    -webkit-transform: rotate(11deg);
    -o-transform: rotate(11deg);
    -ms-transform: rotate(11deg);
    top: 9%;
    width: 67%;
  }

  h1 {
    color: rgb(0, 59, 92);
    font-size: 17px;
    font-weight: 300;
    margin: 0;
    padding: 5px 0 5px 5px;
    position: relative;
    text-transform: uppercase;
  }

  h1 strong {
    font-weight: 400;
  }
`;

export const Menu = styled.ul`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 57px;
  right: 0px;
  width: 200px;
  border-radius: 2px;
  background: rgb(230, 230, 230);
  border: 1px solid rgb(221, 221, 221);
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  transition: visibility 0s, opacity 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  z-index: 3;

  #menu li {
    padding: 5px 10px;
    font-size: 1rem;
    border-bottom: 1px solid rgb(209, 209, 209);
  }

  #menu li h4 {
    display: inline-block;
    line-height: 30px;
    margin: 0;
    padding: 5px 10px 5px 0;
    font-weight: 400;
    vertical-align: middle;
  }

  #menu li ion-icon {
    display: inline-block;
    margin: 0;
    padding: 10px;
    vertical-align: middle;
    color: rgb(35, 34, 39);
    font-size: 20px;
  }

  #menu.in-view {
    visibility: visible;
    opacity: 0.95;
  }

  .switchTheme {
    display: inline-block;
    cursor: pointer;
    padding: 0 15px;
    border-radius: 100px;
  }

  .menuLink {
    display: inline-block;
    border-radius: 100px;
    padding: 0 5px;
  }

  .switchTheme:hover,
  .menuLink:hover {
    background-color: rgb(209, 209, 209);
  }

  .btn-nightMode {
    width: 35px;
    height: 16px;
    background: rgb(245, 245, 245);
    border-radius: 25px;
    position: relative;
    display: inline-block;
    border: 1px solid rgb(35, 34, 39);
    top: 5px;
    cursor: pointer;
  }

  .btn-nightMode .switch {
    background: white;
    width: 12px;
    height: 12px;
    background: rgb(0, 59, 92);
    border-radius: 100%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: visibility 0s, transform 0.5s ease;
  }
`;
