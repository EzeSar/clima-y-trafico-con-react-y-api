import styled from "styled-components";
import StyledDatoDestacado from "./StyledDatoDestacado";
import uv from '../assets/uv.svg';
import viento from '../assets/viento.svg';
import amanecer from '../assets/amanecer.gif';
import humedad from '../assets/humedad.svg';
import umbrella from '../assets/umbrella.svg';
import smoke from '../assets/smoke.svg';

const StylDatosDestacados = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 10px;
`;

export default function GridDatosDestacados(props){
  return(
    <StylDatosDestacados>
      <StyledDatoDestacado value={`Indice UV: ${props.data.uv}`} image={uv} />
      <StyledDatoDestacado value={`Viento ${props.data.viento}km/h`} image={viento} />
      <StyledDatoDestacado value={`Amanece ${props.data.amanece} Anochece ${props.data.anochece}`} image={amanecer} />
      <StyledDatoDestacado value={`Humedad ${props.data.humedad}%`} image={humedad} />
      <StyledDatoDestacado value={`Visibilidad ${props.data.visibilidad}km`} image={smoke} />
      <StyledDatoDestacado value={`Probab. de lluvia ${props.data.lluvia}%`} image={umbrella} />
    </StylDatosDestacados>
  );
}