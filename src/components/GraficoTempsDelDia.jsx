import styled from "styled-components";

const GrillaTempsDelDia = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 0.5fr 1fr;
`;

function Temperaturas(props){

  const StyledMeter = styled.meter`
    transform: rotate(-90deg);
    height: 15px;
    width: 30px;
    background-image: linear-gradient( -90deg, red, orange, yellow, lightblue, blue);
  `;

  return(
    <div>
      <p>{props.temperatura}°c</p>
      <StyledMeter min="0" max="50" low="0" high="50" optimum="25" value={props.temperatura} />
    </div>
  );
}

export default function GraficoTempsDelDia(){
  return(
    <GrillaTempsDelDia>
      <p>00 hs</p>
      <p>02 hs</p>
      <p>04 hs</p>
      <p>06 hs</p>
      <p>08 hs</p>
      <p>10 hs</p>
      <p>12 hs</p>
      <p>14 hs</p>
      <p>16 hs</p>
      <p>18 hs</p>
      <p>20 hs</p>
      <p>22 hs</p>
      <Temperaturas temperatura='15' />
      <Temperaturas temperatura='14' />
      <Temperaturas temperatura='13' />
      <Temperaturas temperatura='12' />
      <Temperaturas temperatura='14' />
      <Temperaturas temperatura='18' />
      <Temperaturas temperatura='20' />
      <Temperaturas temperatura='24' />
      <Temperaturas temperatura='25' />
      <Temperaturas temperatura='23' />
      <Temperaturas temperatura='19' />
      <Temperaturas temperatura='16' />
    </GrillaTempsDelDia>
  );
}