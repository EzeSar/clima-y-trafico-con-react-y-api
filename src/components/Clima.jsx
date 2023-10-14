import styled from "styled-components";
import TempActual from "./TempActual";
import TempsDelDia from "./TempsDelDia";
import FechaHoraMinMax from "./FechaHoraMinMax";
import DatosDestacados from "./DatosDestacados";
import { WeatherCodes } from "./WeatherCodes";
import { useState, useEffect } from "react";
import { DatosEstaticos } from "./DatosEstaticos";

const StyledGridClima = styled.div`
  color: whitesmoke;
  text-shadow:
  1px 1px 1px black,
  0 0 0.5em blue;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 1fr 1.5fr;
  gap: 10px;
  align-items: center;
  justify-items: center;
  height: 600px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    height: 1200px;
  }
`;

export default function Clima(){

  let [datosApi, setDatosApi] = useState(DatosEstaticos);

  let [cargando, setCargando] = useState(true);

  let [actualizar, setActualizar] = useState(false);

  useEffect(()=>{

    async function obtenerDatosDeApi(){
      setCargando(true);
      let respuesta = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,visibility,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1");
      let datos = await respuesta.json();
      setDatosApi(datos);
      setCargando(false);
      setActualizar(false);
    }

    obtenerDatosDeApi();

  },[actualizar]);

  let temps_del_dia = [
    {"hora":"00", "temp":datosApi["hourly"]["temperature_2m"][0]},
    {"hora":"02", "temp":datosApi["hourly"]["temperature_2m"][2]},
    {"hora":"04", "temp":datosApi["hourly"]["temperature_2m"][4]},
    {"hora":"06", "temp":datosApi["hourly"]["temperature_2m"][6]},
    {"hora":"08", "temp":datosApi["hourly"]["temperature_2m"][8]},
    {"hora":"10", "temp":datosApi["hourly"]["temperature_2m"][10]},
    {"hora":"12", "temp":datosApi["hourly"]["temperature_2m"][12]},
    {"hora":"14", "temp":datosApi["hourly"]["temperature_2m"][14]},
    {"hora":"16", "temp":datosApi["hourly"]["temperature_2m"][16]},
    {"hora":"18", "temp":datosApi["hourly"]["temperature_2m"][18]},
    {"hora":"20", "temp":datosApi["hourly"]["temperature_2m"][20]},
    {"hora":"22", "temp":datosApi["hourly"]["temperature_2m"][22]},
  ];

  let fecha_num_ordenada = (((datosApi["current_weather"]["time"]).split("T")[0]).split("-")).toReversed();
  let fecha_dia = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"][new Date((datosApi["current_weather"]["time"]).split("T")[0]).getDay()];
  let fecha_completa = `${fecha_dia} ${fecha_num_ordenada[0]}/${fecha_num_ordenada[1]}/${fecha_num_ordenada[2]}`;

  let fecha_hora_min_max = {
    fecha:(fecha_completa).split("T")[0],
    hora:(datosApi["current_weather"]["time"]).split("T")[1],
    min:datosApi["daily"]["temperature_2m_min"][0],
    max:datosApi["daily"]["temperature_2m_max"][0],
    weather:{
      name:WeatherCodes[datosApi["current_weather"]["weathercode"]]["name"],
      img:WeatherCodes[datosApi["current_weather"]["weathercode"]]["img"],
      dia:datosApi["current_weather"]["is_day"]
    }
  };
  
  let hora_sola = Math.abs(((datosApi["current_weather"]["time"]).split("T")[1]).split(":")[0]);

  let datos_destacados = {
    uv:datosApi["daily"]["uv_index_max"][0],
    viento_km:datosApi["current_weather"]["windspeed"],
    viento_dir:datosApi["current_weather"]["winddirection"],
    amanece:(datosApi["daily"]["sunrise"][0]).split("T")[1],
    anochece:(datosApi["daily"]["sunset"][0]).split("T")[1],
    humedad:datosApi["hourly"]["relativehumidity_2m"][hora_sola],
    visibilidad:Math.round((datosApi["hourly"]["visibility"][hora_sola])/1000),
    lluvia:datosApi["hourly"]["precipitation_probability"][hora_sola]
  };
  
  return(

    <div>

      {cargando && <h1 style={{color:"whitesmoke", textAlign:"center"}} >ESPERANDO DATOS...</h1>}

      {!cargando && 
        <StyledGridClima>

          <DatosDestacados data={datos_destacados} />

          <FechaHoraMinMax data={fecha_hora_min_max} callback={(boton) => {setActualizar(boton)}} />

          <TempsDelDia data={temps_del_dia} />

          <TempActual temp_actual={datosApi["current_weather"]["temperature"]}/>

        </StyledGridClima>}

    </div>

    
  );
}