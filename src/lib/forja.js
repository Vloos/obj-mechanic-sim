/**
 * @param {import("$lib/objeto.js").default} objApo
 * @param {import("$lib/objeto.js").default} objOri
 * @returns {number}
*/
function calculaProbs(objOri, objApo){
  let propsOri = 0
  let propsSuman = 0
  let propsRestan = 0
  let res = 0

  objOri.props.forEach(valor => {
    // sumar los valores numéricos de las propiedades del objeto original. será la base para calcular el porcentaje de éxito
    propsOri += valor
  })

  // buscar en objApo la propiedad de objOri, si está, su valor favorece el porcentaje de éxito.
  objApo.props.forEach((valor, prop) => {
    if(objOri.props.get(prop)){
      propsSuman += valor
    }else{
      propsRestan += valor
    }
  })

  // calcula el porcentaje de exito
  res = ((propsSuman - propsRestan) / propsOri) * 100
  
  return res
}