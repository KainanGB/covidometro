import styled, { createGlobalStyle } from "styled-components";
import * as pallete from "./variables";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Spectral', serif;

    body {
      background-color: #FFFFFF;
      color: ${pallete.primaryTextColor};
    }

    img {
      display:block;
      width:100%;
    }

  }
  `;

export const NavBar = styled.nav`
  padding: 1.25em 2em;
  box-shadow: 0px 1px 6px #c7bfbe;
`;

export const Logo = styled.img`
  max-width: 7rem;
`;

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  height: 100%;

  padding-bottom: 5em;
`;

export const Hero = styled.div`
  padding-top: 4em;
`;

export const HeroText = styled.div``;
export const HeroImage = styled.img`
  width: 30rem;
  z-index: -1;
`;

export const HeroBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1``;
export const Subtitle = styled.p`
  max-width: 35em;
`;
