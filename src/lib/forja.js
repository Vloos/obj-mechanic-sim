/**
 * @param {import("$lib/objeto.js").default} objApo
 * @param {import("$lib/objeto.js").default} objOri
 * @returns {number}
*/
export function calculaProbs(objOri, objApo){
  let propsOri = 0
  let propsApo = 0
  let res = 0

  console.log('calcular propiedades del original');
  objOri.props.forEach(valor => {
    // sumar los valores numéricos de las propiedades del objeto original. será la base para calcular el porcentaje de éxito
    console.log('valor:', valor);
    propsOri += valor
  })
  console.log(propsOri);

  console.log('calcular propiedades del donante');
  // buscar en objApo la propiedad de objOri, si está, su valor favorece el porcentaje de éxito.
  objApo.props.forEach((valor, prop) => {
    if(objOri.props.get(prop)){
      console.log('popiedad presente:', prop.nombre, valor);
      propsApo += valor
    }else{
      console.log('popiedad inexistente:', prop.nombre, valor);
      propsApo += valor
    }
  })
  console.log('total:', propsApo);


  // calcula el porcentaje de exito
  res = (propsApo / propsOri) * 100
  
  return res
}