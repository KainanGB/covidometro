import styled from "styled-components";
import * as pallete from "../../global/variables";

export const Container = styled.div``;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 0 auto;
  width: 50rem;

  background: white;
  box-shadow: 0px 1px 6px #c7bfbe;

  padding: 1.5em 4em;

  border-radius: 6px;
  margin-top: 2em;

  cursor: pointer;

  transition: transform 2s;

  :hover {
    transform: scale(1.1);
  }
`;

export const CardBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.secondary ? "center" : "space-between")};
`;

export const Column = styled.div`
  text-align: center;
`;

export const CardTitle = styled.h1`
  margin-bottom: 0.5rem;
`;

export const CardSubtitles = styled.h3``;

export const CardCases = styled.h2`
  color: ${pallete.primaryColorPink};
`;
