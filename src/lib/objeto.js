import {Props, PropTipos, ObjetosTipos, Calidades } from './tipos'
import {randInt, aleatorioConProbs, id} from './Herramientas'

export default class Objeto {
  constructor(){
    this.id = id()
    this.nombre
    this.tipo
    this.calidad
    this.props
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
  obj.calidad = objCalidad
  obj.props = objProps

  console.log(obj.resumen());
  return obj
}


function generarObjProp(pesos, props){
  let propTipo = aleatorioConProbs(pesos, props)
  let propLista = propTipo.props
  let queProp = propLista[randInt(0, propLista.length-1)]
  let queValor = randInt(queProp.min, queProp.max)
  return {prop: queProp, valor: queValor}
}