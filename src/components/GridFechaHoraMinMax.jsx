//import styled from "styled-components";
import ImagenClima from "./ImagenClima";
import StyledFechaHoraMinMax from "./StyledFechaHoraMinMax";

/*const StylFechaHoraMinMax = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  background-image: url(${ImagenClima});
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
`;*/

export default function GridFechaHoraMinMax(props){

  let imagen = {ImagenClima};

  return(
    <StyledFechaHoraMinMax data={props.data} image={imagen} />
  );
}