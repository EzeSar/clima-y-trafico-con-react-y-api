import styled from "styled-components";
import despejado_dia from "../assets/animation-weather/despejado_dia.svg";
import despejado_noche from "../assets/animation-weather/despejado_noche.svg";
import parcial_nublado_dia from "../assets/animation-weather/parcial_nublado_dia.svg";
import parcial_nublado_noche from "../assets/animation-weather/parcial_nublado_noche.svg";
import nublado_dia from "../assets/animation-weather/nublado_dia.svg";
import nublado_noche from "../assets/animation-weather/nublado_noche.svg";
import niebla_dia from "../assets/animation-weather/niebla_dia.svg";
import niebla_noche from "../assets/animation-weather/niebla_noche.svg";
import llovizna_ligera_dia from "../assets/animation-weather/llovizna_ligera_dia.svg";
import llovizna_ligera_noche from "../assets/animation-weather/llovizna_ligera_noche.svg";
import llovizna_moderada_dia from "../assets/animation-weather/llovizna_moderada_dia.svg";
import llovizna_moderada_noche from "../assets/animation-weather/llovizna_moderada_noche.svg";
import llovizna_densa_dia from "../assets/animation-weather/llovizna_densa_dia.svg";
import llovizna_densa_noche from "../assets/animation-weather/llovizna_densa_noche.svg";
import lluvia_leve_dia from "../assets/animation-weather/lluvia_leve_dia.svg";
import lluvia_leve_noche from "../assets/animation-weather/lluvia_leve_noche.svg";
import lluvia_moderada_dia from "../assets/animation-weather/lluvia_moderada_dia.svg";
import lluvia_moderada_noche from "../assets/animation-weather/lluvia_moderada_noche.svg";
import lluvia_fuerte_dia from "../assets/animation-weather/lluvia_fuerte_dia.svg";
import lluvia_fuerte_noche from "../assets/animation-weather/lluvia_fuerte_noche.svg";
import nieve_ligera_dia from "../assets/animation-weather/nieve_ligera_dia.svg";
import nieve_ligera_noche from "../assets/animation-weather/nieve_ligera_noche.svg";
import nieve_moderada_dia from "../assets/animation-weather/nieve_moderada_dia.svg";
import nieve_moderada_noche from "../assets/animation-weather/nieve_moderada_noche.svg";
import nieve_densa_dia from "../assets/animation-weather/nieve_densa_dia.svg";
import nieve_densa_noche from "../assets/animation-weather/nieve_densa_noche.svg";
import granizo_dia from "../assets/animation-weather/granizo_dia.svg";
import granizo_noche from "../assets/animation-weather/granizo_noche.svg";
import chubascos_leves_dia from "../assets/animation-weather/chubascos_leves_dia.svg";
import chubascos_leves_noche from "../assets/animation-weather/chubascos_leves_noche.svg";
import chubascos_moderados_dia from "../assets/animation-weather/chubascos_moderados_dia.svg";
import chubascos_moderados_noche from "../assets/animation-weather/chubascos_moderados_noche.svg";
import chubascos_violentos_dia from "../assets/animation-weather/chubascos_violentos_dia.svg";
import chubascos_violentos_noche from "../assets/animation-weather/chubascos_violentos_noche.svg";
import chubascos_nieve_ligeros_dia from "../assets/animation-weather/chubascos_nieve_ligeros_dia.svg";
import chubascos_nieve_ligeros_noche from "../assets/animation-weather/chubascos_nieve_ligeros_noche.svg";
import chubascos_nieve_fuertes_dia from "../assets/animation-weather/chubascos_nieve_fuertes_dia.svg";
import chubascos_nieve_fuertes_noche from "../assets/animation-weather/chubascos_nieve_fuertes_noche.svg";
import tormenta_dia from "../assets/animation-weather/tormenta_dia.svg";
import tormenta_noche from "../assets/animation-weather/tormenta_noche.svg";
import tormenta_granizo_leve_dia from "../assets/animation-weather/tormenta_granizo_leve_dia.svg";
import tormenta_granizo_leve_noche from "../assets/animation-weather/tormenta_granizo_leve_noche.svg";
import tormenta_granizo_fuerte_dia from "../assets/animation-weather/tormenta_granizo_fuerte_dia.svg";
import tormenta_granizo_fuerte_noche from "../assets/animation-weather/tormenta_granizo_fuerte_noche.svg";

const StylFechaHoraMinMax = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  background-size: cover;
  background-position: center;
  align-items: center;
  justify-items: center;
  padding: 10px;
  width: 150px;
  height: 300px;
  border-radius: 20px;
  border: 3px solid #7393A7;
`;

const StyledBoton = styled.button`
  background-color: whitesmoke;
  border: 3px solid #7393A7;
  border-radius: 10px;
  cursor: pointer;
`;

export default function FechaHoraMinMax(props){

  let imagen = null;

  switch(props["data"]["weather"]["img"] + props["data"]["weather"]["dia"]){
    case "despejado1":
      imagen = despejado_dia;
      break;

    case "despejado0":
      imagen = despejado_noche;
      break;

    case "parcial_nublado1":
      imagen = parcial_nublado_dia;
      break;

    case "parcial_nublado0":
      imagen = parcial_nublado_noche;
      break;

    case "nublado1":
      imagen = nublado_dia;
      break;
  
    case "nublado0":
      imagen = nublado_noche;
      break;

    case "niebla1":
      imagen = niebla_dia;
      break;
    
    case "niebla0":
      imagen = niebla_noche;
      break;

    case "llovizna_ligera1":
      imagen = llovizna_ligera_dia;
      break;
      
    case "llovizna_ligera0":
      imagen = llovizna_ligera_noche;
      break;

    case "llovizna_moderada1":
      imagen = llovizna_moderada_dia;
      break;
        
    case "llovizna_moderada0":
      imagen = llovizna_moderada_noche;
      break;

    case "llovizna_densa1":
      imagen = llovizna_densa_dia;
      break;
          
    case "llovizna_densa0":
      imagen = llovizna_densa_noche;
      break;
      
    case "lluvia_leve1":
      imagen = lluvia_leve_dia;
      break;
                
    case "lluvia_leve0":
      imagen = lluvia_leve_noche;
      break;

    case "lluvia_moderada1":
      imagen = lluvia_moderada_dia;
      break;
                  
    case "lluvia_moderada0":
      imagen = lluvia_moderada_noche;
      break;
      
    case "lluvia_fuerte1":
      imagen = lluvia_fuerte_dia;
      break;
                  
    case "lluvia_fuerte0":
      imagen = lluvia_fuerte_noche;
      break;
        
    case "nieve_ligera1":
      imagen = nieve_ligera_dia;
      break;
                        
    case "nieve_ligera0":
      imagen = nieve_ligera_noche;
      break;
        
    case "nieve_moderada1":
      imagen = nieve_moderada_dia;
      break;
                          
    case "nieve_moderada0":
      imagen = nieve_moderada_noche;
      break;
        
    case "nieve_densa1":
      imagen = nieve_densa_dia;
      break;
                            
    case "nieve_densa0":
      imagen = nieve_densa_noche;
      break;
        
    case "granizo1":
      imagen = granizo_dia;
      break;
                              
    case "granizo0":
      imagen = granizo_noche;
      break;
        
    case "chubascos_leves1":
      imagen = chubascos_leves_dia;
      break;
                                
    case "chubascos_leves0":
      imagen = chubascos_leves_noche;
      break;
        
    case "chubascos_moderados1":
      imagen = chubascos_moderados_dia;
      break;
                                  
    case "chubascos_moderados0":
      imagen = chubascos_moderados_noche;
      break;
        
    case "chubascos_violentos1":
      imagen = chubascos_violentos_dia;
      break;
                                    
    case "chubascos_violentos0":
      imagen = chubascos_violentos_noche;
      break;
        
    case "chubascos_nieve_ligeros1":
      imagen = chubascos_nieve_ligeros_dia;
      break;
                                      
    case "chubascos_nieve_ligeros0":
      imagen = chubascos_nieve_ligeros_noche;
      break;
        
    case "chubascos_nieve_fuertes1":
      imagen = chubascos_nieve_fuertes_dia;
      break;
                                        
    case "chubascos_nieve_fuertes0":
      imagen = chubascos_nieve_fuertes_noche;
      break;
        
    case "tormenta1":
      imagen = tormenta_dia;
      break;
                                          
    case "tormenta0":
      imagen = tormenta_noche;
      break;
        
    case "tormenta_granizo_leve1":
      imagen = tormenta_granizo_leve_dia;
      break;
                                            
    case "tormenta_granizo_leve0":
      imagen = tormenta_granizo_leve_noche;
      break;
        
    case "tormenta_granizo_fuerte1":
      imagen = tormenta_granizo_fuerte_dia;
      break;
                                              
    case "tormenta_granizo_fuerte0":
      imagen = tormenta_granizo_fuerte_noche;
      break;
  
    default:
      imagen = null;
  }

  return(

    <StylFechaHoraMinMax style={{backgroundImage:`url(${imagen})`}} >

      <p>{props["data"]["fecha"]}</p>

      <p>Hora: {props["data"]["hora"]}</p>

      <p>Minima: {props["data"]["min"]}°C</p>

      <p>Maxima: {props["data"]["max"]}°C</p>

      <p>{props["data"]["weather"]["name"]}</p>

      <StyledBoton onClick={()=>{props.callback(true)}} >Actualizar Datos</StyledBoton>
      
    </StylFechaHoraMinMax>
  );
}