import despejado_dia from '../assets/animation-weather/despejado_dia.svg';
import despejado_noche from '../assets/animation-weather/despejado_noche.svg';
import parcial_nublado_dia from '../assets/animation-weather/parcial_nublado_dia.svg';
import parcial_nublado_noche from '../assets/animation-weather/parcial_nublado_noche.svg';
import nublado from '../assets/animation-weather/nublado.svg';
import niebla_dia from '../assets/animation-weather/niebla_dia.svg';
import niebla_noche from '../assets/animation-weather/niebla_noche.svg';
import llovizna_ligera_dia from '../assets/animation-weather/llovizna_ligera_dia.svg';
import llovizna_ligera_noche from '../assets/animation-weather/llovizna_ligera_noche.svg';
import llovizna_moderada_dia from '../assets/animation-weather/llovizna_moderada_dia.svg';
import llovizna_moderada_noche from '../assets/animation-weather/llovizna_moderada_noche.svg';
import llovizna_densa_dia from '../assets/animation-weather/llovizna_densa_dia.svg';
import llovizna_densa_noche from '../assets/animation-weather/llovizna_densa_noche.svg';
import llovizna_helada_ligera_dia from '../assets/animation-weather/llovizna_helada_ligera_dia.svg';
import llovizna_helada_ligera_noche from '../assets/animation-weather/llovizna_helada_ligera_noche.svg';
import llovizna_helada_densa_dia from '../assets/animation-weather/llovizna_helada_densa_dia.svg';
import llovizna_helada_densa_noche from '../assets/animation-weather/llovizna_helada_densa_noche.svg';
import lluvia_leve_dia from '../assets/animation-weather/lluvia_leve_dia.svg';
import lluvia_leve_noche from '../assets/animation-weather/lluvia_leve_noche.svg';
import lluvia_moderada_dia from '../assets/animation-weather/lluvia_moderada_dia.svg';
import lluvia_moderada_noche from '../assets/animation-weather/lluvia_moderada_noche.svg';
import lluvia_fuerte_dia from '../assets/animation-weather/lluvia_fuerte_dia.svg';
import lluvia_fuerte_noche from '../assets/animation-weather/lluvia_fuerte_noche.svg';
import nieve_leve_dia from '../assets/animation-weather/nieve_leve_dia.svg';
import nieve_leve_noche from '../assets/animation-weather/nieve_leve_noche.svg';
import nieve_moderada_dia from '../assets/animation-weather/nieve_moderada_dia.svg';
import nieve_moderada_noche from '../assets/animation-weather/nieve_moderada_noche.svg';
import nieve_fuerte_dia from '../assets/animation-weather/nieve_fuerte_dia.svg';
import nieve_fuerte_noche from '../assets/animation-weather/nieve_fuerte_noche.svg';
import granizo_dia from '../assets/animation-weather/granizo_dia.svg';
import granizo_noche from '../assets/animation-weather/granizo_noche.svg';
import chubascos_leves_dia from '../assets/animation-weather/chubascos_leves_dia.svg';
import chubascos_leves_noche from '../assets/animation-weather/chubascos_leves_noche.svg';
import chubascos_moderados_dia from '../assets/animation-weather/chubascos_moderados_dia.svg';
import chubascos_moderados_noche from '../assets/animation-weather/chubascos_moderados_noche.svg';
import chubascos_violentos_dia from '../assets/animation-weather/chubascos_violentos_dia.svg';
import chubascos_violentos_noche from '../assets/animation-weather/chubascos_violentos_noche.svg';
import chubascos_nieve_ligeros_dia from '../assets/animation-weather/chubascos_nieve_ligeros_dia.svg';
import chubascos_nieve_ligeros_noche from '../assets/animation-weather/chubascos_nieve_ligeros_noche.svg';
import chubascos_nieve_fuertes_dia from '../assets/animation-weather/chubascos_nieve_fuertes_dia.svg';
import chubascos_nieve_fuertes_noche from '../assets/animation-weather/chubascos_nieve_fuertes_noche.svg';
import tormenta_dia from '../assets/animation-weather/tormenta_dia.svg';
import tormenta_noche from '../assets/animation-weather/tormenta_noche.svg';
import tormenta_granizo_leve_dia from '../assets/animation-weather/tormenta_granizo_leve_dia.svg';
import tormenta_granizo_leve_noche from '../assets/animation-weather/tormenta_granizo_leve_noche.svg';
import tormenta_granizo_fuerte_dia from '../assets/animation-weather/tormenta_granizo_fuerte_dia.svg';
import tormenta_granizo_fuerte_noche from '../assets/animation-weather/tormenta_granizo_fuerte_noche.svg';

const WeaterCodes = {
  0: 'despejado',
  1: 'mayormente despejado', 
  2: 'parcialmente nublado', 
  3: 'nublado',
  45: 'niebla', 
  48: 'niebla con escarcha',
  51: 'llovizna ligera', 
  53: 'llovizna moderada', 
  55: 'llovizna densa',
  56: 'llovizna helada ligera', 
  57: 'llovizna helada densa',
  61: 'lluvia leve', 
  63: 'lluvia moderada', 
  65: 'lluvia fuerte',
  66: 'lluvia helada ligera', 
  67: 'lluvia helada fuerte',
  71: 'nieve ligera', 
  73: 'nieve moderada', 
  75: 'nieve densa',
  77: 'granizo',
  80: 'chubascos leves', 
  81: 'chubascos moderados', 
  82: 'chubascos violentos',
  85: 'chubascos de nieve ligeros', 
  86: 'chubascos de nieve fuertes',
  95: 'tormenta leve o moderada',
  96: 'tormenta con granizo leve', 
  99: 'tormenta con granizo fuerte'
};