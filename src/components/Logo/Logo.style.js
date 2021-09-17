import styled from "styled-components";

export const LogoStyled = styled.a`
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
