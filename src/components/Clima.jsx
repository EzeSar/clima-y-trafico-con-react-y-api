import styled from "styled-components";
import TempActual from "./TempActual";
import TempsDelDia from "./TempsDelDia";
import GridFechaHoraMinMax from "./GridFechaHoraMinMax";
import GridDatosDestacados from "./GridDatosDestacados";
import { DatosApi } from "./DatosApi";

const StyledGridClima = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1.5fr;
  gap: 10px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

let temps_del_dia = [
  {hora: '00hs', temp: DatosApi.hourly.temperature_2m[0]},
  {hora: '03hs', temp: DatosApi.hourly.temperature_2m[3]},
  {hora: '06hs', temp: DatosApi.hourly.temperature_2m[6]},
  {hora: '09hs', temp: DatosApi.hourly.temperature_2m[9]},
  {hora: '12hs', temp: DatosApi.hourly.temperature_2m[12]},
  {hora: '15hs', temp: DatosApi.hourly.temperature_2m[15]},
  {hora: '18hs', temp: DatosApi.hourly.temperature_2m[18]},
  {hora: '21hs', temp: DatosApi.hourly.temperature_2m[21]}
];

export default function Clima(){
  
  return(
    <StyledGridClima>
      <TempActual temp_actual={DatosApi.current_weather.temperature}/>
      <TempsDelDia data={temps_del_dia} />
      <GridFechaHoraMinMax />
      <GridDatosDestacados />
    </StyledGridClima>
  );
}