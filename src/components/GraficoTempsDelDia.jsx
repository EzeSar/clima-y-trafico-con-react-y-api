import styled from "styled-components";

const GrillaTempsDelDia = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 5px;
`;

function Temperaturas(props){

  let color = '';

  if(props.temperatura<15){
    color = 'blue';
  } else if(props.temperatura>22){
    color = 'red';
  } else {
    color = 'orange';
  };

  return(
    <div style={{backgroundColor:(color)}}>
      {props.temperatura}°c
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