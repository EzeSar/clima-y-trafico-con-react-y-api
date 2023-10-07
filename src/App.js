import './App.css';
import Clima from './components/Clima';
import Transporte from './components/Transporte';import { useState, useEffect } from 'react';
import { DatosApi } from './components/DatosApi';

function App() {

  const [datosApi2, setDatosApi2] = useState(DatosApi);

  useEffect(()=>{setDatosApi2(DatosApi)},[]);

  return (
    <div className="App">
      <Clima datos={datosApi2} />
      <Transporte />
    </div>
  );
}

export default App;
