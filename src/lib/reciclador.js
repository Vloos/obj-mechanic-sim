import { randInt } from "./herramientas";
import Objeto, { generarFragmento } from "./objeto";

/**
 * @param {import('$lib/objeto').default} obj 
 */
export function reciclar(obj){
  let res = []
  obj.props.forEach((valor, prop) => {
    const probs = Objeto.calcPropPerfect({valor, prop})
    console.log(`Probabilidad de fragmento de ${prop.nombre}: ${probs}`)
    const tirada = randInt(1,100)
    if(tirada < probs) res.push(generarFragmento(prop))
    
  })
  return res
}