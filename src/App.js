import "./App.css";
import Clima from "./components/Clima";
import Transporte from "./components/Transporte";import { useState, useEffect } from "react";
import { Datos } from "./components/Datos";

function App() {

  let [datosApi, setDatosApi] = useState(Datos);

  useEffect(()=>{

    async function obtenerDatosDeApi(){
      let respuesta = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,visibility,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1");
      let datos = await respuesta.json();
      setDatosApi(datos);
      console.log(datosApi);
    }

    obtenerDatosDeApi();

  },[]);

  return (

    <div className="App">

      <Clima datos={datosApi} />

      <Transporte />
      
    </div>
  );
}

export default App;
