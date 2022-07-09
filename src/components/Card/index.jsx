import * as S from "./Cards.Style";

export const Card = ({ cases }) => {
  //console.log(cases);
  return (
    <S.Container>
      {cases.map((item) => {
        return (
          <S.Card>
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
