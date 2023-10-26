import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from "react";
import L from 'leaflet';

const StyledDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
  text-shadow:
  1px 1px 1px black,
  0 0 0.5em blue;
  height: 600px;
  gap: 3px;
`;

export default function Transporte() {

  //Configuracion del icon a usar en Marker
  const busIcon = L.icon({
    iconUrl: require('../assets/bus.png'),
    iconSize: [25, 25],
  });

  let posicion = ({ lat: -34.6037, lng: -58.3816 });

  let [datosApi, setDatosApi] = useState(null);

  let [cargando, setCargando] = useState(false);

  //useEffect sin actualizacion cada 31segundos...
  useEffect(() => {
    setCargando(true);
    const fetchData = async () => {
      try {
        const response = await fetch('https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6');
        if (!response.ok) {
          throw new Error('No se pudo obtener la información');
        }
        const jsonData = await response.json();
        setDatosApi(jsonData);
        setCargando(false);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  /*useEffect igual pero que se actualiza cada 31 segundos...

  useEffect(() => {
    setCargando(true);
    const interval = setInterval(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6');
          if (!response.ok) {
            throw new Error('No se pudo obtener la información');
          }
          const jsonData = await response.json();
          setDatosApi(jsonData);
          setActualizar(true);
          setCargando(false);
        } catch (error) {
          console.error('Error:', error);
        }
      };

      fetchData();
    }, 31000);
    return () => clearInterval(interval);
  }, []);*/

  let lineasActivas = [];

  if (datosApi) {
    datosApi.map((bondi) => {
      return (lineasActivas.push(bondi["route_short_name"]))
    })
  };

  lineasActivas = (Array.from(new Set(lineasActivas))).sort();

  let [lineaElegida, setLineaElegida] = useState([]);

  let [bondiElegido, setBondiElegido] = useState('');

  function handleChange(event) {
    let linea = (datosApi.filter((bondi) => bondi["route_short_name"] === event.target.value));
    setLineaElegida(linea);
    setBondiElegido(linea[0]["route_short_name"]);
  };

  /*otras variaciones desactivadas por ahora...
  useEffect(() => {
    const interval = setInterval(() => {
      async function obtenerDatosDeApi() {
        setCargando(true);
        let idRuta = lineaElegida[0]['route_id'];
        let respuesta = await fetch(`https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?${idRuta}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`);
        let datos = await respuesta.json();
        setLineaElegida(datos);
        setCargando(false);
      }
      obtenerDatosDeApi();
    }, 31000);
    return () => clearInterval(interval);
  }, [lineaElegida]);

  function posicionPromedio() {
    let latitudes = [];
    let longitudes = [];
    let promLat;
    let promLng;
    lineaElegida.map((bondi) => (latitudes.push(bondi["latitude"])));
    lineaElegida.map((bondi) => (longitudes.push(bondi["longitude"])));
    promLat = (latitudes.reduce((a, b) => a + b, latitudes[0])) / latitudes.length;
    promLng = (longitudes.reduce((a, b) => a + b, longitudes[0])) / longitudes.length;
    setPosicion({ lat: promLat, lng: promLng });
  };

  function SetViewOnClick({ dato }) {
    const map = useMap();
    map.setView(posicion, 12);
    return null;
  };*/

  return (

    <StyledDiv>
      <h2>INFO ONLINE DE TRANSPORTE PUBLICO</h2>

      {cargando && <h4>ACTUALIZANDO DATOS...</h4>}

      {!cargando && <label>

        Selecciona una linea :

        <select value={bondiElegido} onChange={handleChange}>
          {lineasActivas.map((option) => (<option id={option} value={option}>{option}</option>))}
        </select>

      </label>}

      <MapContainer style={{ width: "100%", height: "100%" }} center={posicion} zoom={9} scrollWheelZoom={false}>

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {lineaElegida.map((bondi) => {
          return (
            <Marker position={[bondi["latitude"], bondi["longitude"]]} icon={busIcon}>
              <Popup>
                Linea: {bondi["route_short_name"]}
                <br />Destino: {bondi["trip_headsign"]}
                <br />Empresa: {bondi["agency_name"]}
                <br />Velocidad: {bondi["speed"]}km/h
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </StyledDiv>
  );
}