import styled from "styled-components";
import Termometro from "./Termometro";
  
const StyledDivTemp = styled.div`
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-items: center;
  font-weight: bold;
  color: whitesmoke;
  text-shadow:
  1px 1px 1px black,
  0 0 0.5em red;
  padding: 10px;
  border: 10px solid firebrick;
  min-width: 200px;
`;

export default function TempActual(props){
  return(
    <StyledDivTemp>
      <p>Temp. Actual :</p>
      <Termometro value={props.temp_actual} />
    </StyledDivTemp>
  );
}