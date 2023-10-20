import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Marker as LeafletMarker, icon } from 'leaflet'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import { useState, useEffect } from "react";
import { DatosBondis } from "./DatosBondis";

//Configuracion del icon a usar en Marker
LeafletMarker.prototype.options.icon = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

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

  let position = {
    lat: -34.6037,
    lng: -58.3816
  };

  let [datosApi, setDatosApi] = useState(DatosBondis);
  let [cargando, setCargando] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {

      async function obtenerDatosDeApi() {
        setCargando(true);
        let respuesta = await fetch("https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6");
        let datos = await respuesta.json();
        setDatosApi(datos);
        setCargando(false);
      }
      obtenerDatosDeApi();

    }, 31000);
    return () => clearInterval(interval);
  }, []);

  let lineasActivas = [];
  datosApi.map((bondi) => {
    return (lineasActivas.push(bondi["route_short_name"]))
  });
  lineasActivas = (Array.from(new Set(lineasActivas))).sort();

  let [lineaElegida, setLineaElegida] = useState([]);

  function handleChange(event) {
    setLineaElegida(datosApi.filter((bondi) => bondi["route_short_name"] === event.target.value));
  };

  return (

    <StyledDiv>
      <h2>INFO ONLINE DE TRANSPORTE PUBLICO</h2>

      {cargando && <h4>ACTUALIZANDO DATOS...</h4>}

      {!cargando && <label>

        Selecciona una linea :

        <select value={""} onChange={handleChange}>

          {lineasActivas.map((option) => (

            <option value={option}>{option}</option>

          ))}

        </select>

      </label>}

      <MapContainer style={{ width: "100%", height: "100%" }} center={position} zoom={10} scrollWheelZoom={false}>

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {lineaElegida.map((bondi) => {
          return (
            <Marker position={[bondi["latitude"], bondi["longitude"]]}>
              <Popup>
                Linea: {bondi["route_short_name"]}
                <br />Destino: {bondi["trip_headsign"]}
                <br />Empresa: {bondi["agency_name"]}
                <br />Velocidad: {bondi["speed"]}km/h
              </Popup>
            </Marker>)
        })}

      </MapContainer>
    </StyledDiv>
  );
}