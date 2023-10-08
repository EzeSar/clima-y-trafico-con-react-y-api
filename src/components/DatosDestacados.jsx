import styled from "styled-components";
import uv from "../assets/uv.svg";
import viento from "../assets/viento.svg";
import amanecer from "../assets/amanecer.gif";
import humedad from "../assets/humedad.svg";
import umbrella from "../assets/umbrella.svg";
import smoke from "../assets/smoke.svg";

const GridDatosDest = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 10px;
`;

const StylDivDato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-items: center;
  text-align: center;
  background-size: cover;
  background-position: center;
  border-radius: 10%;
  border: 7px solid #96B6C5;
  width: 100px;
  height: 100px;
`;

export default function DatosDestacados(props){
  return(

    <GridDatosDest>

      <StylDivDato style={{backgroundImage:`url(${uv})`}} >
        <p>Indice UV: {props["data"]["uv"]}</p>
      </StylDivDato>

      <StylDivDato style={{backgroundImage:`url(${viento})`}} >
        <p>Viento {props["data"]["viento"]}km/h</p>
      </StylDivDato>

      <StylDivDato style={{backgroundImage:`url(${amanecer})`}} >
        <p>Amanece {props["data"]["amanece"]} Anochece {props["data"]["anochece"]}</p>
      </StylDivDato>

      <StylDivDato style={{backgroundImage:`url(${humedad})`}} >
        <p>Humedad {props["data"]["humedad"]}%</p>
      </StylDivDato>

      <StylDivDato style={{backgroundImage:`url(${smoke})`}} >
        <p>Visibilidad {props["data"]["visibilidad"]}km</p>
      </StylDivDato>

      <StylDivDato style={{backgroundImage:`url(${umbrella})`}} >
        <p>Probabilidad de lluvia {props["data"]["lluvia"]}%</p>
      </StylDivDato>

    </GridDatosDest>
  );
}