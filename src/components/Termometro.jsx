import Thermometer from "react-thermometer-component"
 
export default function Termometro(props){
  return(
    <Thermometer
    theme="dark"
    value={props.value}
    max="50"
    steps="1"
    format="°C"
    size="normal"
    height="150"
    />
  );
}
