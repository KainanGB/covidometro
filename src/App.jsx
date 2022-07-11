import { useState, useEffect } from "react";
import { SearchBar } from "./components/SearchBar";
import { Card } from "./components/Card";
import { toast } from "react-toastify";

import axios from "axios";
import HeroImg from "./assets/doctors.svg";
import * as S from "./global/global";

function App() {
  const [data, setData] = useState([]);
  const [reset, setReset] = useState(false);
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [searchBar, setSearchBar] = useState([]);

  const fetchCountries = async () => {
    try {
      const res = await axios.get("https://api.covid19api.com/summary");
      const results = await res.data;
      setData(results.Countries);
      setReset(false);
    } catch (err) {
      toast.error("Houve um erro com os dados, por favor atualize a página.");
    }
  };

  const handleFetchCasesBySearchBar = async (value) => {
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
      if ((err = "Cannot read properties of undefined (reading 'Slug')")) {
        toast.error("Tente novamente mas com o nome do país em inglês.");
      } else
        toast.error(
          "Houve um erro com a nossa busca, tente novamente ou espere alguns minutos."
        );
    }
  };

  const handleFetchDataBySearchBarFilter = (value) => {
    setSearchBar(value);
  };

  useEffect(() => {
    fetchCountries();
    if (reset) setSearchBar("");
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
        handleFetchCasesBySearchBar={handleFetchCasesBySearchBar}
        setReset={setReset}
        reset={reset}
        handleFetchDataBySearchBarFilter={handleFetchDataBySearchBarFilter}
      />
      <Card
        cases={data}
        filteredCountry={filteredCountry}
        handleFetchCasesBySearchBar={handleFetchCasesBySearchBar}
        searchBar={searchBar}
      />
    </S.Container>
  );
}

export default App;
