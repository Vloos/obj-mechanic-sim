import {Prop, PropTipos, ObjetosTipos, Calidades } from './tipos'
import {randInt, aleatorioConProbs, id} from './Herramientas'

export default class Objeto {
  constructor(){
    /**@type {string} */
    this.id = id()
    /**@type {string} */
    this.nombre
    /**@type {import("./tipos").ObjetosTipos} */
    this.tipo
    /**@type {import("./tipos").Calidades} */
    this.calidad
    /**@type {Map.<import('./tipos').Prop, number>} */
    this.props
    /**@type {string} */
    this.icon
  }

  resumen() {
    let txt = `${this.nombre} ${this.calidad.nombre}`

    this.props.forEach((prop, k) =>{
      txt += `\n${k.nombre}: +${prop}%`
    })

    return txt
  }
}

export function crearObjeto(){
  // tipo de objeto (arma, amuleto, casco...)
  const listaTipos = Object.keys(ObjetosTipos)
  const objTipo = ObjetosTipos[listaTipos[randInt(0,listaTipos.length-1)]]

  //  nombre, icono
  const objNombre = objTipo.nombre
  const objIcon = objTipo.icons[randInt(0, objTipo.icons.length-1)]
  console.log(objTipo);

  // calidad (normal, raro, mágico...)
  const listaCalidades = Object.keys(Calidades)
  const objCalidad = Calidades[listaCalidades[randInt(0, listaCalidades.length-1)]]

  // propiedades
  //  Saca cada tipo de propiedad con su peso
  let pesosProp = []
  let tiposProp = []
  let objProps = new Map()
  objTipo.tiposPropiedad.forEach(tipo => {
    pesosProp.push(tipo.peso)
    tiposProp.push(tipo.tipo)
  })

  //  genera propiedades mientras tenga hueco para propiedades. Las propiedades son distintas.
  while (objProps.size < objCalidad.nProps){
    let laProp = generarObjProp(pesosProp, tiposProp)
    if (objProps.get(laProp.prop)) continue
    objProps.set(laProp.prop, laProp.valor)
  }

  let obj = new Objeto()
  obj.nombre = objNombre
  obj.tipo = objTipo
  obj.icon = objIcon
  obj.calidad = objCalidad
  obj.props = objProps

  return obj
}


function generarObjProp(pesos, props){
  let propTipo = aleatorioConProbs(pesos, props)
  let propLista = propTipo.props
  let queProp = propLista[randInt(0, propLista.length-1)]
  let queValor = randInt(queProp.min, queProp.max)
  return {prop: queProp, valor: queValor}
}