import styled from "styled-components";

const StylFechaHoraMinMax = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  background-size: cover;
  background-position: top,right;
  align-items: center;
  justify-items: center;
  font-weight: bold;
  color: whitesmoke;
  text-shadow:
  1px 1px 1px black,
  0 0 0.5em red;
  padding: 10px;
  gap: 10px;
  border: ridge 10px burlywood;
`;

export default function StyledFechaHoraMinMax(props){
  return(
    <StylFechaHoraMinMax style={{backgroundImage:`url(${props["image"]})`}} >
      <p>{props["data"]["fecha"]}</p>
      <p>hora: {props["data"]["hora"]}</p>
      <p>min: {props["data"]["min"]}</p>
      <p>max: {props["data"]["max"]}</p>
      <p>{props["data"]["weather"]["name"]}</p>
    </StylFechaHoraMinMax>
  );
}