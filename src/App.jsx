import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { Card } from "./components/Card";
import axios from "axios";

import HeroImg from "./assets/doctors.svg";
import * as S from "./global/global";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [worldDataCases, setWorldDataCases] = useState([]);
  const [reset, setReset] = useState(false);
  const [filteredCountry, setFilteredCountry] = useState([]);

  const fetchCountries = async () => {
    try {
      const res = await axios.get("https://api.covid19api.com/summary");
      const results = await res.data;
      setWorldDataCases(results.Global);
      setData(results.Countries);
      setReset(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCasesByFilter = async (value) => {
    try {
      const countryName = data.find((data) => {
        return data.Country.toLowerCase() === value.toLowerCase();
      });
      const res = await axios.get(
        `https://api.covid19api.com/country/${countryName.Slug}/status/confirmed`
      );
      const results = await res.data;
      const filteredResults = results.splice(results.length - 6, 6);
      let difference = filteredResults[5].Cases - filteredResults[0].Cases;
      //if (difference < 0) difference = 0;
      const copy = [];

      const newCountry = {
        name: countryName.Country,
        cases: Math.abs(difference),
      };
      copy.push(newCountry);
      setFilteredCountry(copy);
      setReset(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (filteredCountry.length <= 0) fetchCountries();
  }, [reset]);

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
      <SearchBar
        setFilteredCountry={setFilteredCountry}
        fetchCasesByFilter={fetchCasesByFilter}
        setReset={setReset}
      />
      <Card
        cases={data}
        filteredCountry={filteredCountry}
        fetchCasesByFilter={fetchCasesByFilter}
      />
    </S.Container>
  );
}

export default App;
