import styled from "styled-components";
import TempActual from "./TempActual";
import TempsDelDia from "./TempsDelDia";
import GridFechaHoraMinMax from "./GridFechaHoraMinMax";
import GridDatosDestacados from "./GridDatosDestacados";

const StyledGridClima = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1.5fr;
  gap: 10px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export default function Clima(){
  return(
    <StyledGridClima>
      <TempActual />
      <TempsDelDia />
      <GridFechaHoraMinMax />
      <GridDatosDestacados />
    </StyledGridClima>
  );
}