import styled from "styled-components";

const StylFechaHoraMinMax = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  align-items: center;
  justify-items: center;
  width: 150px;
  height: 250px;
  border-radius: 20px;
  border: 3px solid #7393A7;
`;

const StyledBoton = styled.button`
  background-color: whitesmoke;
  border: 3px solid #7393A7;
  border-radius: 10px;
  cursor: pointer;
`;

export default function FechaHoraMinMax(props) {

  return (

    <StylFechaHoraMinMax>

      <p>{props["data"]["fecha"]}</p>

      <p>Hora: {props["data"]["hora"]}</p>

      <p>Minima: {props["data"]["min"]}°C</p>

      <p>Maxima: {props["data"]["max"]}°C</p>

      <p>{props["data"]["weather"]["name"]}</p>

      <StyledBoton onClick={() => { props.callback(true) }} >Actualizar Datos</StyledBoton>

    </StylFechaHoraMinMax>
  );
}