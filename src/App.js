import './App.css';

function App() {
  return (
    <div className="App">
      <div className='div-clima'>
        <div className='div-temperatura'>
          <div className='div-temp-actual'>
            TEMP. ACTUAL: 20°
          </div>
          <div className='div-fecha-hora'>
            LUNES 10/05/23 11:36 A.M.
          </div>
          <div className='div-max-min'>
            MIN:12° / MAX:25°
          </div>
        </div>
        <div className='div-datos-clima'>
          <div className='div-temp-x-hora'>
            GRAFICO TEMP. A CADA HORA
          </div>
          <div className='div-otros-datos'>
            DATOS COMPLEMENTARIOS
          </div>
        </div>
      </div>
      <div className='div-transporte'>
        TRANSPORTE DE PASAJEROS
      </div>
    </div>
  );
}

export default App;
