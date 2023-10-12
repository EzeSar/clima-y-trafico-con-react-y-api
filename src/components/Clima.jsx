import styled from "styled-components";
import TempActual from "./TempActual";
import TempsDelDia from "./TempsDelDia";
import FechaHoraMinMax from "./FechaHoraMinMax";
import DatosDestacados from "./DatosDestacados";
import { WeatherCodes } from "./WeatherCodes";

const StyledGridClima = styled.div`
  color: whitesmoke;
  text-shadow:
  1px 1px 1px black,
  0 0 0.5em blue;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 1fr 1.5fr;
  gap: 10px;
  align-items: top;
  justify-items: center;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default function Clima(props){

  let temps_del_dia = [
    {"hora":"00", "temp":props["datos"]["hourly"]["temperature_2m"][0]},
    {"hora":"02", "temp":props["datos"]["hourly"]["temperature_2m"][2]},
    {"hora":"04", "temp":props["datos"]["hourly"]["temperature_2m"][4]},
    {"hora":"06", "temp":props["datos"]["hourly"]["temperature_2m"][6]},
    {"hora":"08", "temp":props["datos"]["hourly"]["temperature_2m"][8]},
    {"hora":"10", "temp":props["datos"]["hourly"]["temperature_2m"][10]},
    {"hora":"12", "temp":props["datos"]["hourly"]["temperature_2m"][12]},
    {"hora":"14", "temp":props["datos"]["hourly"]["temperature_2m"][14]},
    {"hora":"16", "temp":props["datos"]["hourly"]["temperature_2m"][16]},
    {"hora":"18", "temp":props["datos"]["hourly"]["temperature_2m"][18]},
    {"hora":"20", "temp":props["datos"]["hourly"]["temperature_2m"][20]},
    {"hora":"22", "temp":props["datos"]["hourly"]["temperature_2m"][22]},
  ];

  let fecha_num_ordenada = (((props["datos"]["current_weather"]["time"]).split("T")[0]).split("-")).toReversed();
  let fecha_dia = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"][new Date((props["datos"]["current_weather"]["time"]).split("T")[0]).getDay()];
  let fecha_completa = `${fecha_dia} ${fecha_num_ordenada[0]}/${fecha_num_ordenada[1]}/${fecha_num_ordenada[2]}`;

  let fecha_hora_min_max = {
    fecha:(fecha_completa).split("T")[0],
    hora:(props["datos"]["current_weather"]["time"]).split("T")[1],
    min:props["datos"]["daily"]["temperature_2m_min"][0],
    max:props["datos"]["daily"]["temperature_2m_max"][0],
    weather:{
      name:WeatherCodes[props["datos"]["current_weather"]["weathercode"]]["name"],
      img:WeatherCodes[props["datos"]["current_weather"]["weathercode"]]["img"],
      dia:props["datos"]["current_weather"]["is_day"]
    }
  };
  
  let hora_sola = Math.abs(((props["datos"]["current_weather"]["time"]).split("T")[1]).split(":")[0]);

  let datos_destacados = {
    uv:props["datos"]["daily"]["uv_index_max"][0],
    viento_km:props["datos"]["current_weather"]["windspeed"],
    viento_dir:props["datos"]["current_weather"]["winddirection"],
    amanece:(props["datos"]["daily"]["sunrise"][0]).split("T")[1],
    anochece:(props["datos"]["daily"]["sunset"][0]).split("T")[1],
    humedad:props["datos"]["hourly"]["relativehumidity_2m"][hora_sola],
    visibilidad:Math.round((props["datos"]["hourly"]["visibility"][hora_sola])/1000),
    lluvia:props["datos"]["hourly"]["precipitation_probability"][hora_sola]
  };
  
  return(

    <StyledGridClima>

      <FechaHoraMinMax data={fecha_hora_min_max} />

      <DatosDestacados data={datos_destacados} />

      <TempActual temp_actual={props["datos"]["current_weather"]["temperature"]}/>

      <TempsDelDia data={temps_del_dia} />
      
    </StyledGridClima>
  );
}