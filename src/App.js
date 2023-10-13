import "./App.css";
import Clima from "./components/Clima";
import Transporte from "./components/Transporte";import { useState, useEffect } from "react";

function App() {

  let [datosApi, setDatosApi] = useState(null);

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

  return (

    <div className="App">

      {cargando && <h1 style={{color:"whitesmoke", textAlign:"center"}} >ESPERANDO DATOS...</h1>}

      {!cargando && <Clima datos={datosApi} callback={(boton) => {setActualizar(boton)}} />}

      <Transporte />
      
    </div>
  );
}

export default App;
