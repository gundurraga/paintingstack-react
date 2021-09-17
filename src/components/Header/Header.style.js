import styled from "styled-components";
import texture from "../../images/texture.png";

export const HeaderStyle = styled.nav`
  background-image: url(${texture});

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
`;
