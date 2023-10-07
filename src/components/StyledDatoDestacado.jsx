import styled from "styled-components";

const StylDivDato = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  color: whitesmoke;
  font-weight: bold;
  text-shadow:
  1px 1px 1px black,
  0 0 0.5em red;
  text-align: center;
  background-size: cover;
  background-position: center;
  border-radius: 10%;
  border: 10px solid black;
`;

export default function StyledDatoDestacado(props){

  return(
    <StylDivDato style={{backgroundImage:`url(${props.image})`}} >
      <p>{props.value}</p>
    </StylDivDato>
  );
}