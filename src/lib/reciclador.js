import Objeto from "./objeto";

/**
 * @param {import('$lib/objeto').default} obj 
 */
export function reciclar(obj){
  obj.props.forEach((valor, prop) => {
    const probs = Objeto.calcPropPerfect({valor, prop})
    console.log(`Probabilidad de fragmento de ${prop.nombre}: ${probs}`)
  })
}