import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const StyledDivTempsDia = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr;
  color: whitesmoke;
  text-shadow:
  1px 1px 1px black,
  0 0 0.5em red;
  text-align: center;
  padding: 30px;
  justify-items: stretch;
`;

export default function TempsDelDia(props){
  return(
    <StyledDivTempsDia>

      <h3>&#127777; - Temperaturas del dia de hoy - &#127777;</h3>

      <LineChart width={400} height={100} data={props["data"]}>
        <Line type="monotone" dataKey="temp" stroke="#8884d8" />
        <XAxis dataKey="hora" />
        <YAxis />
        <Tooltip />
      </LineChart>

    </StyledDivTempsDia>
  );
}