import styled from "styled-components";
import TempActual from "./TempActual";
import TempsDelDia from "./TempsDelDia";
import FechaHoraMinMax from "./FechaHoraMinMax";
import DatosDestacados from "./DatosDestacados";
import { WeatherCodes } from "./WeatherCodes";
import { useState, useEffect } from "react";
import { DatosClima } from "./DatosClima";
import despejado_dia from "../assets/animation-weather/despejado_dia.svg";
import despejado_noche from "../assets/animation-weather/despejado_noche.svg";
import parcial_nublado_dia from "../assets/animation-weather/parcial_nublado_dia.svg";
import parcial_nublado_noche from "../assets/animation-weather/parcial_nublado_noche.svg";
import nublado_dia from "../assets/animation-weather/nublado_dia.svg";
import nublado_noche from "../assets/animation-weather/nublado_noche.svg";
import niebla_dia from "../assets/animation-weather/niebla_dia.svg";
import niebla_noche from "../assets/animation-weather/niebla_noche.svg";
import llovizna_ligera_dia from "../assets/animation-weather/llovizna_ligera_dia.svg";
import llovizna_ligera_noche from "../assets/animation-weather/llovizna_ligera_noche.svg";
import llovizna_moderada_dia from "../assets/animation-weather/llovizna_moderada_dia.svg";
import llovizna_moderada_noche from "../assets/animation-weather/llovizna_moderada_noche.svg";
import llovizna_densa_dia from "../assets/animation-weather/llovizna_densa_dia.svg";
import llovizna_densa_noche from "../assets/animation-weather/llovizna_densa_noche.svg";
import lluvia_leve_dia from "../assets/animation-weather/lluvia_leve_dia.svg";
import lluvia_leve_noche from "../assets/animation-weather/lluvia_leve_noche.svg";
import lluvia_moderada_dia from "../assets/animation-weather/lluvia_moderada_dia.svg";
import lluvia_moderada_noche from "../assets/animation-weather/lluvia_moderada_noche.svg";
import lluvia_fuerte_dia from "../assets/animation-weather/lluvia_fuerte_dia.svg";
import lluvia_fuerte_noche from "../assets/animation-weather/lluvia_fuerte_noche.svg";
import nieve_ligera_dia from "../assets/animation-weather/nieve_ligera_dia.svg";
import nieve_ligera_noche from "../assets/animation-weather/nieve_ligera_noche.svg";
import nieve_moderada_dia from "../assets/animation-weather/nieve_moderada_dia.svg";
import nieve_moderada_noche from "../assets/animation-weather/nieve_moderada_noche.svg";
import nieve_densa_dia from "../assets/animation-weather/nieve_densa_dia.svg";
import nieve_densa_noche from "../assets/animation-weather/nieve_densa_noche.svg";
import granizo_dia from "../assets/animation-weather/granizo_dia.svg";
import granizo_noche from "../assets/animation-weather/granizo_noche.svg";
import chubascos_leves_dia from "../assets/animation-weather/chubascos_leves_dia.svg";
import chubascos_leves_noche from "../assets/animation-weather/chubascos_leves_noche.svg";
import chubascos_moderados_dia from "../assets/animation-weather/chubascos_moderados_dia.svg";
import chubascos_moderados_noche from "../assets/animation-weather/chubascos_moderados_noche.svg";
import chubascos_violentos_dia from "../assets/animation-weather/chubascos_violentos_dia.svg";
import chubascos_violentos_noche from "../assets/animation-weather/chubascos_violentos_noche.svg";
import chubascos_nieve_ligeros_dia from "../assets/animation-weather/chubascos_nieve_ligeros_dia.svg";
import chubascos_nieve_ligeros_noche from "../assets/animation-weather/chubascos_nieve_ligeros_noche.svg";
import chubascos_nieve_fuertes_dia from "../assets/animation-weather/chubascos_nieve_fuertes_dia.svg";
import chubascos_nieve_fuertes_noche from "../assets/animation-weather/chubascos_nieve_fuertes_noche.svg";
import tormenta_dia from "../assets/animation-weather/tormenta_dia.svg";
import tormenta_noche from "../assets/animation-weather/tormenta_noche.svg";
import tormenta_granizo_leve_dia from "../assets/animation-weather/tormenta_granizo_leve_dia.svg";
import tormenta_granizo_leve_noche from "../assets/animation-weather/tormenta_granizo_leve_noche.svg";
import tormenta_granizo_fuerte_dia from "../assets/animation-weather/tormenta_granizo_fuerte_dia.svg";
import tormenta_granizo_fuerte_noche from "../assets/animation-weather/tormenta_granizo_fuerte_noche.svg";

const StyledDivdClima = styled.div`
  color: whitesmoke;
  text-shadow:
  1px 1px 1px black,
  0 0 0.5em blue;
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
  justify-items: center;
  background-size: cover;
  background-position: center;
`;

const StyledGridClima = styled.div`
  color: whitesmoke;
  text-shadow:
  1px 1px 1px black,
  0 0 0.5em blue;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 1.5fr 1fr;
  gap: 3px;
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

  let imagen;

  switch (WeatherCodes[datosApi["current_weather"]["weathercode"]]["img"] + datosApi["current_weather"]["is_day"]) {
    case "despejado1":
      imagen = despejado_dia;
      break;

    case "despejado0":
      imagen = despejado_noche;
      break;

    case "parcial_nublado1":
      imagen = parcial_nublado_dia;
      break;

    case "parcial_nublado0":
      imagen = parcial_nublado_noche;
      break;

    case "nublado1":
      imagen = nublado_dia;
      break;

    case "nublado0":
      imagen = nublado_noche;
      break;

    case "niebla1":
      imagen = niebla_dia;
      break;

    case "niebla0":
      imagen = niebla_noche;
      break;

    case "llovizna_ligera1":
      imagen = llovizna_ligera_dia;
      break;

    case "llovizna_ligera0":
      imagen = llovizna_ligera_noche;
      break;

    case "llovizna_moderada1":
      imagen = llovizna_moderada_dia;
      break;

    case "llovizna_moderada0":
      imagen = llovizna_moderada_noche;
      break;

    case "llovizna_densa1":
      imagen = llovizna_densa_dia;
      break;

    case "llovizna_densa0":
      imagen = llovizna_densa_noche;
      break;

    case "lluvia_leve1":
      imagen = lluvia_leve_dia;
      break;

    case "lluvia_leve0":
      imagen = lluvia_leve_noche;
      break;

    case "lluvia_moderada1":
      imagen = lluvia_moderada_dia;
      break;

    case "lluvia_moderada0":
      imagen = lluvia_moderada_noche;
      break;

    case "lluvia_fuerte1":
      imagen = lluvia_fuerte_dia;
      break;

    case "lluvia_fuerte0":
      imagen = lluvia_fuerte_noche;
      break;

    case "nieve_ligera1":
      imagen = nieve_ligera_dia;
      break;

    case "nieve_ligera0":
      imagen = nieve_ligera_noche;
      break;

    case "nieve_moderada1":
      imagen = nieve_moderada_dia;
      break;

    case "nieve_moderada0":
      imagen = nieve_moderada_noche;
      break;

    case "nieve_densa1":
      imagen = nieve_densa_dia;
      break;

    case "nieve_densa0":
      imagen = nieve_densa_noche;
      break;

    case "granizo1":
      imagen = granizo_dia;
      break;

    case "granizo0":
      imagen = granizo_noche;
      break;

    case "chubascos_leves1":
      imagen = chubascos_leves_dia;
      break;

    case "chubascos_leves0":
      imagen = chubascos_leves_noche;
      break;

    case "chubascos_moderados1":
      imagen = chubascos_moderados_dia;
      break;

    case "chubascos_moderados0":
      imagen = chubascos_moderados_noche;
      break;

    case "chubascos_violentos1":
      imagen = chubascos_violentos_dia;
      break;

    case "chubascos_violentos0":
      imagen = chubascos_violentos_noche;
      break;

    case "chubascos_nieve_ligeros1":
      imagen = chubascos_nieve_ligeros_dia;
      break;

    case "chubascos_nieve_ligeros0":
      imagen = chubascos_nieve_ligeros_noche;
      break;

    case "chubascos_nieve_fuertes1":
      imagen = chubascos_nieve_fuertes_dia;
      break;

    case "chubascos_nieve_fuertes0":
      imagen = chubascos_nieve_fuertes_noche;
      break;

    case "tormenta1":
      imagen = tormenta_dia;
      break;

    case "tormenta0":
      imagen = tormenta_noche;
      break;

    case "tormenta_granizo_leve1":
      imagen = tormenta_granizo_leve_dia;
      break;

    case "tormenta_granizo_leve0":
      imagen = tormenta_granizo_leve_noche;
      break;

    case "tormenta_granizo_fuerte1":
      imagen = tormenta_granizo_fuerte_dia;
      break;

    case "tormenta_granizo_fuerte0":
      imagen = tormenta_granizo_fuerte_noche;
      break;

    default:
      imagen = null;
  }

  const StyledSelect = styled.select`
    cursor: pointer;
    border-radius: 10px;
  `;

  const StyledInput = styled.input`
    border-radius: 10px;
  `;

  return (
    <StyledDivdClima style={{ backgroundImage: `url(${imagen})` }} >
      <h2>El Clima en {ciudad}</h2>

      {cargando && <h2>Esperando Datos...</h2>}

      {!cargando &&
        <>

          <label>Cambiar ciudad : <StyledInput placeholder="-escriba minimo 3 letras-" onChange={e => onChangeInput(e.target.value)}></StyledInput></label>


          {seleccionar && <StyledSelect onChange={e => onChangeSelect(e.target.value)}>
            {sugerencias.map((option) => (<option value={option}>{option}</option>))}
          </StyledSelect>}

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