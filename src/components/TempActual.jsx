import styled from "styled-components";
import Termometro from "./Termometro";
  
const StyledDivTemp = styled.div`
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 10px;
  border: 3px solid #7393A7;
  width: 150px;
  height: 150px;
`;

export default function TempActual(props){

  let temp = props["temp_actual"];

  let color = null;

  if(temp >= 30){
    color = "#EB6383";
  } else if(temp < 30 && temp >= 20){
    color = "#FA9191";
  } else if(temp < 20 && temp >= 10){
    color = "#FFE9C5";
  } else if(temp < 10 && temp >= 0){
    color = "#B4F2E1";
  } else if(temp < 0){
    color = "white";
  };

  return(

    <StyledDivTemp style={{backgroundColor:color}} >

      <p>Temperatura actual:</p>

      <Termometro value={props["temp_actual"]} />
      
    </StyledDivTemp>
  );
}