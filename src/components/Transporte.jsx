import styled from "styled-components";
import gps from "../assets/gps.gif";

const StyledDiv = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  font-weight: bold;
  font-size: 1.5em;
  text-shadow:
  1px 1px 1px black,
  0 0 0.5em blue;
  background-image: url(${gps});
  background-size: cover;
  border-radius: 20px;
  height: 600px;
`;

export default function Transporte(){

  return(
    
    <StyledDiv>
       INFO ONLINE DE TRANSPORTE PUBLICO
    </StyledDiv>
  );
}