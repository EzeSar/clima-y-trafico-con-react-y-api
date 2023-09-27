import styled from "styled-components";
import Termometro from "./Termometro";
  
const StyledDivTemp = styled.div`
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: 1em;
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
      TEMP. ACTUAL:
      <Termometro value='25' />
    </StyledDivTemp>
  );
}