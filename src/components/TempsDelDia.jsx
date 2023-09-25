import styled from "styled-components";
import GraficoTempsDelDia from "./GraficoTempsDelDia";

const StyledDivTempsDia = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr;
  color: whitesmoke;
  text-shadow:
  1px 1px 1px black,
  0 0 0.5em red;
  text-align: center;
  padding: 30px;
`;

export default function TempsDelDia(){
  return(
    <StyledDivTempsDia>
      <h1>Temperaturas del dia de hoy</h1>
      <GraficoTempsDelDia />
    </StyledDivTempsDia>
  );
}