import styled from "styled-components";

export const MenuHamburger = styled.div`
  display: block;
  cursor: pointer;
  position: absolute;
  height: 36px;
  top: 50%;
  margin-top: -24px;
  right: 17px;
  padding: 6px 8px;
  border-radius: 50%;

  &:hover,
  &:focus {
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

export const MenuDisplay = styled.ul`
  visibility: visible;
  opacity: 0.95;
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
`;

export const MenuItem = styled.li`
  display: flex;
  padding: 5px 10px;
  font-size: 1rem;
  border-bottom: 1px solid rgb(209, 209, 209);
  align-content: center;
  justify-content: space-around;

  h4 {
    display: inline-block;
    line-height: 30px;
    margin: 0;
    padding: 5px 10px;
    font-weight: 400;
    vertical-align: middle;
  }

  .in-view {
    visibility: visible;
    opacity: 0.95;
  }

  .itemContainer {
    display: flex;
    cursor: pointer;
    padding: 0 15px;
    border-radius: 100px;
    align-items: center;
  }

  .itemContainer:hover {
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
