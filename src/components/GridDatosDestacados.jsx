import styled from "styled-components";
import StyledDatoDestacado from "./StyledDatoDestacado";
import uv from '../assets/uv.gif';
import viento from '../assets/viento.gif';
import amanecer from '../assets/amanecer.gif';
import humedad from '../assets/humedad.gif';
import visibilidad from '../assets/visibilidad.gif';
import aire from '../assets/aire.gif';

const StylDatosDestacados = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 10px;
`;

export default function GridDatosDestacados(){
  return(
    <StylDatosDestacados>
      <StyledDatoDestacado value='Indice UV 6' image={uv} />
      <StyledDatoDestacado value='Viento 11,2 km/h' image={viento} />
      <StyledDatoDestacado value='Amanece 06:30 Anochece 18:30' image={amanecer} />
      <StyledDatoDestacado value='Humedad 12%' image={humedad} />
      <StyledDatoDestacado value='Visibilidad 6,1 km' image={visibilidad} />
      <StyledDatoDestacado value='Contaminacion Aerea 105' image={aire} />
    </StylDatosDestacados>
  );
}