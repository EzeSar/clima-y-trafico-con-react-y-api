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
  {hora: '02hs', temp: DatosApi.hourly.temperature_2m[2]},
  {hora: '04hs', temp: DatosApi.hourly.temperature_2m[4]},
  {hora: '06hs', temp: DatosApi.hourly.temperature_2m[6]},
  {hora: '08hs', temp: DatosApi.hourly.temperature_2m[8]},
  {hora: '10hs', temp: DatosApi.hourly.temperature_2m[10]},
  {hora: '12hs', temp: DatosApi.hourly.temperature_2m[12]},
  {hora: '14hs', temp: DatosApi.hourly.temperature_2m[14]},
  {hora: '16hs', temp: DatosApi.hourly.temperature_2m[16]},
  {hora: '18hs', temp: DatosApi.hourly.temperature_2m[18]},
  {hora: '20hs', temp: DatosApi.hourly.temperature_2m[20]},
  {hora: '22hs', temp: DatosApi.hourly.temperature_2m[22]}
];

let fecha_hora_min_max = {
  fecha: (DatosApi.current_weather.time).split('T')[0],
  hora: (DatosApi.current_weather.time).split('T')[1],
  min: DatosApi.daily.temperature_2m_min[0],
  max: DatosApi.daily.temperature_2m_max[0]
};

let hora_sola = ((DatosApi.current_weather.time).split('T')[1]).split(':')[0];

let datos_destacados = {
  uv: DatosApi.daily.uv_index_max[0],
  viento: DatosApi.current_weather.windspeed,
  amanece: (DatosApi.daily.sunrise[0]).split('T')[1],
  anochece: (DatosApi.daily.sunset[0]).split('T')[1],
  humedad: DatosApi.hourly.relativehumidity_2m[hora_sola],
  visibilidad: Math.round((DatosApi.hourly.visibility[hora_sola])/1000),
  lluvia: DatosApi.hourly.precipitation_probability[hora_sola]
};

export default function Clima(){
  
  return(
    <StyledGridClima>
      <TempActual temp_actual={DatosApi.current_weather.temperature}/>
      <TempsDelDia data={temps_del_dia} />
      <GridFechaHoraMinMax data={fecha_hora_min_max} />
      <GridDatosDestacados data={datos_destacados} />
    </StyledGridClima>
  );
}