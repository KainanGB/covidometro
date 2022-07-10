import { useState } from "react";
import * as S from "./SearchBar.Style";
import { FaSearch, FaSync } from "react-icons/fa";

export const SearchBar = ({
  fetchCasesByFilter,
  setReset,
  setFilteredCountry,
}) => {
  const [name, setName] = useState("");

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  return (
    <S.Content>
      <FaSync
        className="sync"
        onClick={() => {
          setReset(true);
          setFilteredCountry([]);
          setName("");
        }}
      />

      <S.SearchTitle>Filtrar dados sobre um país</S.SearchTitle>
      <S.InputDiv>
        <S.Border>
          <FaSearch color="#ed6160" />
          <S.SearchInput value={name} onChange={handleOnChange} />
        </S.Border>
        {name ? (
          <S.Button
            onClick={() => {
              fetchCasesByFilter(name);
              setName("");
            }}
          />
        ) : (
          ""
        )}
      </S.InputDiv>
    </S.Content>
  );
};
