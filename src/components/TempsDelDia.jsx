import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const StyledDivTempsDia = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 30px;
`;

export default function TempsDelDia(props){

  return(
    
    <StyledDivTempsDia>

      <h3>&#127777; - Temperaturas del dia de hoy - &#127777;</h3>

      <LineChart width={350} height={100} data={props["data"]}>
        <Line type="monotone" dataKey="temp" stroke="#96B6C5" />
        <XAxis dataKey="hora" />
        <YAxis />
        <Tooltip />
      </LineChart>

    </StyledDivTempsDia>
  );
}