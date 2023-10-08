import "./App.css";
import Clima from "./components/Clima";
import Transporte from "./components/Transporte";import { useState, useEffect } from "react";
import { Datos } from "./components/Datos";

function App() {

  const [datosApi2, setDatosApi2] = useState(Datos);

  useEffect(()=>{setDatosApi2(Datos)},[]);

  return (

    <div className="App">

      <Clima datos={datosApi2} />

      <Transporte />
      
    </div>
  );
}

export default App;
