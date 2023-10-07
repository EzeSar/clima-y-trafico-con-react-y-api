import styled from "styled-components";
import TempActual from "./TempActual";
import TempsDelDia from "./TempsDelDia";
import GridFechaHoraMinMax from "./GridFechaHoraMinMax";
import GridDatosDestacados from "./GridDatosDestacados";
import { WeatherCodes } from "./WeatherCodes";

const StyledGridClima = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 1fr 1.5fr;
  gap: 10px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export default function Clima(props){

  let temps_del_dia = [
    {hora:'00hs', temp:props.datos.hourly.temperature_2m[0]},
    {hora:'03hs', temp:props.datos.hourly.temperature_2m[3]},
    {hora:'06hs', temp:props.datos.hourly.temperature_2m[6]},
    {hora:'09hs', temp:props.datos.hourly.temperature_2m[9]},
    {hora:'12hs', temp:props.datos.hourly.temperature_2m[12]},
    {hora:'15hs', temp:props.datos.hourly.temperature_2m[15]},
    {hora:'18hs', temp:props.datos.hourly.temperature_2m[18]},
    {hora:'21hs', temp:props.datos.hourly.temperature_2m[21]},
  ];
  
  let fecha_hora_min_max = {
    fecha:(props.datos.current_weather.time).split('T')[0],
    hora:(props.datos.current_weather.time).split('T')[1],
    min:props.datos.daily.temperature_2m_min[0],
    max:props.datos.daily.temperature_2m_max[0],
    weather:{
      name:WeatherCodes[0].name,
      img:WeatherCodes[0].img
    }
  };
  
  let hora_sola = ((props.datos.current_weather.time).split('T')[1]).split(':')[0];
  
  let datos_destacados = {
    uv:props.datos.daily.uv_index_max[0],
    viento:props.datos.current_weather.windspeed,
    amanece:(props.datos.daily.sunrise[0]).split('T')[1],
    anochece:(props.datos.daily.sunset[0]).split('T')[1],
    humedad:props.datos.hourly.relativehumidity_2m[hora_sola],
    visibilidad:Math.round((props.datos.hourly.visibility[hora_sola])/1000),
    lluvia:props.datos.hourly.precipitation_probability[hora_sola]
  };
  
  return(
    <StyledGridClima>
      <TempActual temp_actual={props.datos.current_weather.temperature}/>
      <TempsDelDia data={temps_del_dia} />
      <GridFechaHoraMinMax data={fecha_hora_min_max} />
      <GridDatosDestacados data={datos_destacados} />
    </StyledGridClima>
  );
}