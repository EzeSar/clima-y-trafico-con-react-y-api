import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const StyledDivTempsDia = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

export default function TempsDelDia(props){

  return(
    
    <StyledDivTempsDia>

      <p>&#127777; - Temperaturas del dia de hoy - &#127777;</p>

      <LineChart width={350} height={150} data={props["data"]}>
        <Line type="monotone" dataKey="temp" stroke="#7393A7" />
        <XAxis dataKey="hora" stroke="whitesmoke"/>
        <YAxis stroke="whitesmoke"/>
        <Tooltip />
      </LineChart>

    </StyledDivTempsDia>
  );
}