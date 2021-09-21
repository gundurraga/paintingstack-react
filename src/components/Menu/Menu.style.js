import styled from "styled-components";

export const MenuBurger = styled.div`
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
    outline: none;
  }

  .bar {
    width: 32px;
    height: 4px;
    background-color: rgb(160, 160, 160);
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 2px;
  }

  .bar1 {
    transform: ${({ open }) => open && "translate(0, 10px) rotate(-45deg)"};
    background-color: ${({ open }) => open && "rgb(255, 184, 28)"};
  }

  .bar2 {
    opacity: ${({ open }) => (open ? "0" : "1")};
  }

  .bar3 {
    transform: ${({ open }) => open && "translate(0, -10px) rotate(45deg)"};
    background-color: ${({ open }) => open && "rgb(255, 184, 28)"};
  }
`;

export const MenuDisplay = styled.ul`
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? "0.95" : "0")};
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

  .language {
    background: rgb(240, 240, 240);
  }
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
    padding: 5px 0 5px 10px;
    font-weight: 400;
    vertical-align: middle;
    white-space: nowrap;
  }

  .switchTheme h4 {
    padding: 5px 0;
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
`;
