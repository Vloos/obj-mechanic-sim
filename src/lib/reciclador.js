import { randInt } from "./herramientas";
import Objeto from "./objeto";

/**
 * @param {import('$lib/objeto').default} obj 
 */
export function reciclar(obj){
  obj.props.forEach((valor, prop) => {
    const probs = Objeto.calcPropPerfect({valor, prop})
    console.log(`Probabilidad de fragmento de ${prop.nombre}: ${probs}`)
    const tirada = randInt(1,100)
    if(tirada < probs) console.log('¡fragmento conseguido!');
  })


}