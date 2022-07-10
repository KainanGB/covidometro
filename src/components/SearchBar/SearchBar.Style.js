import styled from "styled-components";
import * as pallete from "../../global/variables";

export const Content = styled.div`
  margin: 0 auto;
  width: 50rem;
  margin-top: -4rem;
  background: white;
  box-shadow: 0px 1px 6px #c7bfbe;

  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2em 4em;
  border-radius: 4px;
  text-align: center;

  position: relative;
`;

export const InputDiv = styled.div`
  width: 100%;
`;
export const SearchTitle = styled.h2`
  margin-bottom: 1em;
`;
export const SearchInput = styled.input.attrs({
  type: "search",
  name: "search",
  placeholder: "Digite o nome do país",
})`
  border: none;
  padding: 0.5em;
  margin-left: 0.5em;
  width: 100%;

  :focus {
    border: none;
    outline: none;
  }

  ::placeholder {
    color: ${pallete.primaryTextColor};
  }
`;

export const Border = styled.div`
  border-bottom: 1px solid #ed6160;
  display: flex;
  align-items: center;
  width: 100%;

  svg {
    /*padding: 0 1em;*/
  }
`;

export const Button = styled.input.attrs({
  type: "button",
  value: "Pesquisar",
})`
  box-shadow: 0px 1px 6px #c7bfbe;
  border: none;
  background-color: white;
  border-radius: 4px;
  padding: 1em;
  margin-top: 2em;
  width: 15rem;
  font-weight: bold;
`;
