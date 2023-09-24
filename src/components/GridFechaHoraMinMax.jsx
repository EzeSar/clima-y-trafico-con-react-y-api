import styled from "styled-components";
import soleado from '../assets/soleado.gif';

const StylFechaHoraMinMax = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-image: url(${soleado});
  background-size: cover;
  background-position: top,right;
  align-items: center;
  justify-items: center;
  font-size: 1.5em;
  font-weight: bold;
  color: whitesmoke;
  text-shadow:
  1px 1px 1px black,
  0 0 0.5em red;
  padding: 10px;
  gap: 10px;
  border: ridge 10px burlywood;
`;

export default function GridFechaHoraMinMax(){
  return(
    <StylFechaHoraMinMax>
      <div>10 de Junio</div>
      <div>16:45</div>
      <div>Temp.Min 12°c</div>
      <div>Temp.Max 25°c</div>
    </StylFechaHoraMinMax>
  );
}