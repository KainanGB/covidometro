import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { Card } from "./components/Card";

import HeroImg from "./assets/doctors.svg";
import * as S from "./global/global";

function App() {
  return (
    <S.Container>
      <S.Hero>
        <S.HeroBody>
          <S.HeroText>
            <S.Title>Conheça o Covidômetro</S.Title>
            <S.Subtitle>
              Fique atualizado com velocidade e transparência. O Covidômetro é
              uma ferramenta que mostra para você em tempo real o número de
              casos e óbitos relacionados a pandemia da COVID-19 ao redor do
              mundo.
            </S.Subtitle>
          </S.HeroText>
          <S.HeroImage src={HeroImg} />
        </S.HeroBody>
      </S.Hero>
      <SearchBar />
      <Card />
    </S.Container>
  );
}

export default App;
