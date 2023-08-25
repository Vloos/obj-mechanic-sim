import { ObjetosTipos, Calidades } from './tipos'
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
    /**@type {import('./tipos').Estados} */
    this.estado
    /**@type {number} */
    this.cantidad
  }

  resumen() {
    let txt = `${this.nombre} ${this.calidad.nombre}`

    this.props.forEach((prop, k) =>{
      txt += `\n${k.nombre}: +${prop || ''}%`
    })

    return txt
  }

  /**
   * @param {{prop:import('$lib/tipos').Prop, valor: number}} cual 
   */
  static calcPropPerfect(cual){
    return Math.floor(
        ((cual.valor - cual.prop.min) / (cual.prop.max - cual.prop.min)) * 100
      )
  }
}

const objGenerablesList = [
  ObjetosTipos.Amuleto,
  ObjetosTipos.Anillo, 
  ObjetosTipos.Arco,
  ObjetosTipos.Ballesta, 
  ObjetosTipos.Botas, 
  ObjetosTipos.Casco,
  ObjetosTipos.Daga, 
  ObjetosTipos.Espada,
  ObjetosTipos.Guantes,
  ObjetosTipos.Hacha,
  ObjetosTipos.Maza,
]
const objGenerablesPeso = [1,1,1,1,1,1,1,1,1,1,1]

const calidadesGenerablesList = [
  Calidades.normal,
  Calidades.raro,
  Calidades.magico,
  Calidades.sacro,
  Calidades.ancestral,
  Calidades.legendario,
  Calidades.primigeneo,
  Calidades.unico,
]
const calidadGenerablesPeso = [8,7,6,5,4,3,2,1,]

export function crearObjeto(){
  // tipo de objeto (arma, amuleto, casco...)
  const objTipo = aleatorioConProbs(objGenerablesPeso, objGenerablesList)

  //  nombre, icono
  const objNombre = objTipo.nombre
  const objIcon = objTipo.icons[randInt(0, objTipo.icons.length-1)]

  // calidad (normal, raro, mágico...)
  const objCalidad = aleatorioConProbs(calidadGenerablesPeso, calidadesGenerablesList)

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


/**@param {import('$lib/tipos').Prop} */
export function generarFragmento(prop){
  const obj = new Objeto()
  const props = new Map()
  obj.tipo = ObjetosTipos.Fragmento
  props.set(prop, undefined)
  obj.props = props
  obj.calidad = Calidades.normal
  obj.cantidad = 1
  obj.icon = obj.tipo.icons[0]
  obj.nombre = obj.tipo.nombre
  return obj
}