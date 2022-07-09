import * as S from "./SearchBar.Style";
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  return (
    <S.Content>
      <S.SearchTitle>Filtrar dados sobre um país</S.SearchTitle>
      <S.InputDiv>
        <S.Border>
          <FaSearch color="#ed6160" />
          <S.SearchInput />
        </S.Border>
      </S.InputDiv>
    </S.Content>
  );
};
