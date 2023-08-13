export class Props {
  // ofensivo
  static Crtpro = new Props('Probabilidad de crítico', 5, 10)
  static CrtDmg = new Props('Daño de crítico', 10, 20)
  static Attspd = new Props('Velocidad de ataque', 3, 6)
  static FisDmg = new Props('Daño físico', 10, 20)
  static EleDmg = new Props('Daño elemental', 10, 20)
  static MagDmg = new Props('Daño mágico', 10, 20)
  // utilidad
  static VelMod = new Props('Velocidad de movimiento', 6, 12)
  static RecRec = new Props('Recuperación de recurso', 6, 12)
  static RedRec = new Props('Reducción de consumo de recurso', 2, 8)
  static VelReu = new Props('Velocidad de reutilización', 5, 10)
  static ModHab = new Props('Nivel de habilidades', 1, 4)
  static masTod = new Props('Todas las características', 5, 10)
  static MasFue = new Props('Fuerza', 10, 20)
  static MasDes = new Props('Destreza', 10, 20)
  static MasCon = new Props('Constitución', 10, 20)
  static MasInt = new Props('Inteligencia', 10, 20)
  // defensa
  static DmgRed = new Props('Reducción de todo daño', 5, 10)
  static FisRed = new Props('Reducción de daño físico', 10, 15)
  static EleRed = new Props('Reducción de daño elemental', 10, 15)
  static MagRed = new Props('Reducción de daño mágico', 10, 15)
  static MaxHps = new Props('Salud', 10, 20)
  static EvaPro = new Props('Probabilidad de esquivar', 6, 12)

  /**
   * @param {strign} nombre 
   * @param {number} min
   * @param {number} max
   */
  constructor(nombre, min, max){
    this.nombre = nombre
    this.min = min
    this.max = max
  }
}


export class PropTipos{
  static Ofensivo = new PropTipos('Ofensivo',[
    Props.Crtpro,
    Props.CrtDmg,
    Props.Attspd,
    Props.FisDmg,
    Props.EleDmg,
    Props.MagDmg,
  ])
  static Defensivo = new PropTipos('Defensivo',[
    Props.DmgRed,
    Props.FisRed,
    Props.EleRed,
    Props.MagRed,
    Props.MaxHps,
    Props.EvaPro,
  ])
  static Utilidad = new PropTipos('Utilidad',[
    Props.VelMod,
    Props.RecRec,
    Props.RedRec,
    Props.VelReu,
    Props.ModHab,
    Props.masTod,
    Props.MasFue,
    Props.MasDes,
    Props.MasCon,
    Props.MasInt,
  ])

  constructor(nombre, props){
    this.nombre = nombre
    this.props = props
  }
}


const propsArma = [
  {tipo: PropTipos.Ofensivo, peso: 3}
]
const propsCasco = [
  {tipo: PropTipos.Defensivo, peso:2},
  {tipo: PropTipos.Utilidad, peso:1},
]
const propsPechera = [
  {tipo: PropTipos.Defensivo, peso:3},
  {tipo: PropTipos.Utilidad, peso:1},
]
const propsGuantes = [
  {tipo: PropTipos.Defensivo, peso:3},
  {tipo: PropTipos.Ofensivo, peso:1},
]
const propsBotas = [
  {tipo: PropTipos.Defensivo, peso:3},
]
const propsAmuleto = [
  {tipo: PropTipos.Utilidad, peso:3},
  {tipo: PropTipos.Defensivo, peso:1},
  {tipo: PropTipos.Ofensivo, peso:1},
]
const propsAnillo = [
  {tipo: PropTipos.Utilidad, peso:1},
  {tipo: PropTipos.Defensivo, peso:1},
  {tipo: PropTipos.Ofensivo, peso:3},
]


export class ObjetosTipos {
  static Espada = new ObjetosTipos('Espada', propsArma, [])
  static Ballesta = new ObjetosTipos('Ballesta', propsArma)
  static Arco = new ObjetosTipos('Arco', propsArma)
  static Casco = new ObjetosTipos('Casco', propsCasco, ['barbute',])
  static Pechera = new ObjetosTipos('Pechera', propsPechera, ['abdominal-armor',])
  static Guantes = new ObjetosTipos('Guantes', propsGuantes)
  static Botas = new ObjetosTipos('Botas', propsBotas)
  static Amuleto = new ObjetosTipos('Amuleto', propsAmuleto)
  static Anillo = new ObjetosTipos('Anillo', propsAnillo)

  /**
   * 
   * @param {string} nombre
   * @param {Array.<{tipo:PropTipos, peso: number}>} tiposPropiedad 
   * @param {Array.<string>} icons
   */
  constructor(nombre, tiposPropiedad, icons = []){
    this.nombre = nombre
    this.tiposPropiedad = tiposPropiedad
    this.icons = icons
  }
}



export class Calidades{
  static normal = new Calidades('Normal', 'white', 1)
  static raro = new Calidades('Raro', 'lleyow', 2)
  static magico = new Calidades('Mágico', 'blue', 3)
  static sacro = new Calidades('Sacro', 'ligtblue', 4)
  static ancestral = new Calidades('Ancestral', 'orange', 5)
  static unico = new Calidades('Único', 'darkgreen', 6)

  constructor(nombre, color, nProps){
    this.nombre = nombre
    this.color = color
    this.nProps = nProps
  }
}