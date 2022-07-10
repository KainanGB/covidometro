import axios from "axios";
import * as S from "./Cards.Style";

export const Card = ({
  filteredCountry,
  cases,
  searchBar,
  handleFetchCasesBySearchBar,
}) => {
  return (
    <S.Container>
      {filteredCountry.length > 0
        ? filteredCountry.map((item, index) => {
            return (
              <S.Card key={index}>
                <S.CardTitle>{item.name}</S.CardTitle>
                <S.CardBody secondary>
                  <S.Column>
                    <S.CardSubtitles>
                      Total de casos dos últimos cinco dias
                    </S.CardSubtitles>
                    <S.CardCases>{item.cases}</S.CardCases>
                  </S.Column>
                </S.CardBody>
              </S.Card>
            );
          })
        : cases
            .filter((val) => {
              if (searchBar == "") {
                return val;
              } else if (
                val.Country.toLowerCase().includes(searchBar.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item) => {
              return (
                <S.Card
                  key={item.ID}
                  onClick={() => handleFetchCasesBySearchBar(item.Country)}
                >
                  <S.CardTitle>{item.Country}</S.CardTitle>
                  <S.CardBody>
                    <S.Column>
                      <S.CardSubtitles>Total de casos</S.CardSubtitles>
                      <S.CardCases>{item.TotalConfirmed}</S.CardCases>
                    </S.Column>
                    <S.Column>
                      <S.CardSubtitles>Mortes</S.CardSubtitles>
                      <S.CardCases>{item.TotalDeaths}</S.CardCases>
                    </S.Column>
                    <S.Column>
                      <S.CardSubtitles>Fatalidade</S.CardSubtitles>
                      <S.CardCases>
                        {(item.TotalDeaths / item.TotalConfirmed).toFixed(2)}%
                      </S.CardCases>
                    </S.Column>
                  </S.CardBody>
                </S.Card>
              );
            })}
    </S.Container>
  );
};

//cases
