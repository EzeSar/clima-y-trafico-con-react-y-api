import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const StyledDivTempsDia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border: 3px solid #7393A7;
  height: 180px;
  padding-right: 10px;
  padding-bottom: 10px;
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