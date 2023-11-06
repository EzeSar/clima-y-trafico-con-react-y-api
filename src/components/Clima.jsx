import styled from "styled-components";
import TempActual from "./TempActual";
import TempsDelDia from "./TempsDelDia";
import FechaHoraMinMax from "./FechaHoraMinMax";
import DatosDestacados from "./DatosDestacados";
import { WeatherCodes } from "./WeatherCodes";
import { useState, useEffect } from "react";
import { DatosClima } from "./DatosClima";

const StyledDivdClima = styled.div`
  color: whitesmoke;
  text-shadow:
  1px 1px 1px black,
  0 0 0.5em blue;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-items: center;
`;

const StyledGridClima = styled.div`
  color: whitesmoke;
  text-shadow:
  1px 1px 1px black,
  0 0 0.5em blue;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 1.5fr 1fr;
  gap: 5px;
  align-items: center;
  justify-items: center;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default function Clima() {

  const [cordenadas, setCordenadas] = useState({ "lat": "-34.6131", "lng": "-58.3772" });

  const [zonaHoraria, setZonaHoraria] = useState("America%2FSao_Paulo");

  const [datosApi, setDatosApi] = useState(DatosClima);

  const [cargando, setCargando] = useState(true);

  const [actualizar, setActualizar] = useState(false);

  const obtenerDatosDeApi = async () => {
    try {
      setCargando(true);
      const respuesta = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cordenadas["lat"]}&longitude=${cordenadas["lng"]}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,visibility,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=${zonaHoraria}&forecast_days=1`);
      if (!respuesta.ok) {
        console.log("error clima");
      };
      const datos = await respuesta.json();
      setDatosApi(datos);
      setCargando(false);
      setActualizar(false);
    } catch (error) {
      console.error("Error:", error);
    };
  };

  useEffect(() => {
    obtenerDatosDeApi();
  }, [actualizar, cordenadas]);

  const temps_del_dia = [
    { "hora": "00", "temp": datosApi["hourly"]["temperature_2m"][0] },
    { "hora": "02", "temp": datosApi["hourly"]["temperature_2m"][2] },
    { "hora": "04", "temp": datosApi["hourly"]["temperature_2m"][4] },
    { "hora": "06", "temp": datosApi["hourly"]["temperature_2m"][6] },
    { "hora": "08", "temp": datosApi["hourly"]["temperature_2m"][8] },
    { "hora": "10", "temp": datosApi["hourly"]["temperature_2m"][10] },
    { "hora": "12", "temp": datosApi["hourly"]["temperature_2m"][12] },
    { "hora": "14", "temp": datosApi["hourly"]["temperature_2m"][14] },
    { "hora": "16", "temp": datosApi["hourly"]["temperature_2m"][16] },
    { "hora": "18", "temp": datosApi["hourly"]["temperature_2m"][18] },
    { "hora": "20", "temp": datosApi["hourly"]["temperature_2m"][20] },
    { "hora": "22", "temp": datosApi["hourly"]["temperature_2m"][22] },
  ];

  const fecha_num_ordenada = (((datosApi["current_weather"]["time"]).split("T")[0]).split("-")).toReversed();
  const fecha_dia = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"][new Date((datosApi["current_weather"]["time"]).split("T")[0]).getDay()];
  const fecha_completa = `${fecha_dia} ${fecha_num_ordenada[0]}/${fecha_num_ordenada[1]}/${fecha_num_ordenada[2]}`;

  const fecha_hora_min_max = {
    fecha: (fecha_completa).split("T")[0],
    hora: (datosApi["current_weather"]["time"]).split("T")[1],
    min: datosApi["daily"]["temperature_2m_min"][0],
    max: datosApi["daily"]["temperature_2m_max"][0],
    weather: {
      name: WeatherCodes[datosApi["current_weather"]["weathercode"]]["name"],
      img: WeatherCodes[datosApi["current_weather"]["weathercode"]]["img"],
      dia: datosApi["current_weather"]["is_day"]
    }
  };

  const hora_sola = Math.abs(((datosApi["current_weather"]["time"]).split("T")[1]).split(":")[0]);

  const datos_destacados = {
    uv: datosApi["daily"]["uv_index_max"][0],
    viento_km: datosApi["current_weather"]["windspeed"],
    viento_dir: datosApi["current_weather"]["winddirection"],
    amanece: (datosApi["daily"]["sunrise"][0]).split("T")[1],
    anochece: (datosApi["daily"]["sunset"][0]).split("T")[1],
    humedad: datosApi["hourly"]["relativehumidity_2m"][hora_sola],
    visibilidad: Math.round((datosApi["hourly"]["visibility"][hora_sola]) / 1000),
    lluvia: datosApi["hourly"]["precipitation_probability"][hora_sola]
  };

  const [ingreso, setIngreso] = useState();

  const [sugerencias, setSugerencias] = useState([]);

  const fetchCiudades = async () => {
    try {
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${ingreso}&count=10&language=es&format=json`);
      if (!response.ok) {
        console.log("error ingreso");
      };
      const jsonCiudades = await response.json();
      if (jsonCiudades) {
        const listaCiudades = ["-elija una opcion-"];
        jsonCiudades["results"].map((i) => {
          return (listaCiudades.push(`${i["name"]} - ${i["country"]}`))
        });
        setSugerencias(listaCiudades);
        setSeleccionar(true);
      };
    } catch (error) {
      console.error("Error:", error);
    };
  };

  useEffect(() => {
    fetchCiudades();
  }, [ingreso]);

  const onChangeInput = (texto) => {
    if (texto.length > 2) {
      setIngreso(texto);
    };
  };

  const [ciudad, setCiudad] = useState("Buenos Aires - Argentina");

  const onChangeSelect = (eleccion) => {
    setCiudad(eleccion);
    setSeleccionar(false);
  };

  const fetchCiudad = async () => {
    try {
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${ciudad.split(" - ")[0]}&country=${ciudad.split(" - ")[1]}&count=1&language=es&format=json`);
      if (!response.ok) {
        console.log("error ciudad");
      };
      const jsonCiudad = await response.json();
      if (jsonCiudad) {
        setZonaHoraria(jsonCiudad["results"][0]["timezone"]);
        setCordenadas({ "lat": `${jsonCiudad["results"][0]["latitude"]}`, "lng": `${jsonCiudad["results"][0]["longitude"]}` });
      };
    } catch (error) {
      console.error("Error:", error);
    };
  };

  useEffect(() => {
    fetchCiudad();
  }, [ciudad]);

  const [seleccionar, setSeleccionar] = useState(false);

  return (
    <StyledDivdClima>
      <h1>El Clima en {ciudad}</h1>

      {cargando && <h2>ESPERANDO DATOS...</h2>}

      {!cargando &&
        <>

          <label>Cambiar ciudad : <input placeholder="-escriba minimo 3 letras-" onChange={e => onChangeInput(e.target.value)}></input></label>
          

          {seleccionar && <select onChange={e => onChangeSelect(e.target.value)}>
            {sugerencias.map((option) => (<option value={option}>{option}</option>))}
          </select>}

          <StyledGridClima>

            <FechaHoraMinMax data={fecha_hora_min_max} callback={(boton) => { setActualizar(boton) }} />

            <DatosDestacados data={datos_destacados} />

            <TempActual temp_actual={datosApi["current_weather"]["temperature"]} />

            <TempsDelDia data={temps_del_dia} />

          </StyledGridClima>
        </>}
    </StyledDivdClima>
  );
}