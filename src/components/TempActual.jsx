import styled from "styled-components";
import termometro from '../assets/termometro.svg';
  
const StyledDivTemp = styled.div`
  background-image: url(${termometro});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: 1.5em;
  font-weight: bold;
  color: whitesmoke;
  text-shadow:
  1px 1px 1px black,
  0 0 0.5em red;
  padding: 10px;
  border: 10px solid firebrick;
`;

export default function TempActual(clima){
  return(
    <StyledDivTemp>
      Temperatura actual : 25°c
    </StyledDivTemp>
  );
}