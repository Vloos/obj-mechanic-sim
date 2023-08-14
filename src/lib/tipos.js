export class Prop {
  // ofensivo
  static Crtpro = new Prop('Probabilidad de crítico', 5, 10)
  static CrtDmg = new Prop('Daño de crítico', 10, 20)
  static Attspd = new Prop('Velocidad de ataque', 3, 6)
  static FisDmg = new Prop('Daño físico', 10, 20)
  static EleDmg = new Prop('Daño elemental', 10, 20)
  static MagDmg = new Prop('Daño mágico', 10, 20)
  // utilidad
  static VelMod = new Prop('Velocidad de movimiento', 6, 12)
  static RecRec = new Prop('Recuperación de recurso', 6, 12)
  static RedRec = new Prop('Reducción de consumo de recurso', 2, 8)
  static VelReu = new Prop('Velocidad de reutilización', 5, 10)
  static ModHab = new Prop('Nivel de habilidades', 1, 4)
  static masTod = new Prop('Todas las características', 5, 10)
  static MasFue = new Prop('Fuerza', 10, 20)
  static MasDes = new Prop('Destreza', 10, 20)
  static MasCon = new Prop('Constitución', 10, 20)
  static MasInt = new Prop('Inteligencia', 10, 20)
  // defensa
  static DmgRed = new Prop('Reducción de todo daño', 5, 10)
  static FisRed = new Prop('Reducción de daño físico', 10, 15)
  static EleRed = new Prop('Reducción de daño elemental', 10, 15)
  static MagRed = new Prop('Reducción de daño mágico', 10, 15)
  static MaxHps = new Prop('Salud', 10, 20)
  static EvaPro = new Prop('Probabilidad de esquivar', 6, 12)

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
    Prop.Crtpro,
    Prop.CrtDmg,
    Prop.Attspd,
    Prop.FisDmg,
    Prop.EleDmg,
    Prop.MagDmg,
  ])
  static Defensivo = new PropTipos('Defensivo',[
    Prop.DmgRed,
    Prop.FisRed,
    Prop.EleRed,
    Prop.MagRed,
    Prop.MaxHps,
    Prop.EvaPro,
  ])
  static Utilidad = new PropTipos('Utilidad',[
    Prop.VelMod,
    Prop.RecRec,
    Prop.RedRec,
    Prop.VelReu,
    Prop.ModHab,
    Prop.masTod,
    Prop.MasFue,
    Prop.MasDes,
    Prop.MasCon,
    Prop.MasInt,
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
  static Espada = new ObjetosTipos('Espada', propsArma, ['broadsword', 'gladius', 'katana', 'stiletto', 'two-handed-sword', ])
  static Daga = new ObjetosTipos('Daga', propsArma, ['curvy-knife', 'sacrificial-dagger', ])
  static Ballesta = new ObjetosTipos('Ballesta', propsArma, ['crossbow',])
  static Hacha = new ObjetosTipos('Hacha', propsArma, ['battle-axe', 'tomahawk'])
  static Arco = new ObjetosTipos('Arco', propsArma, ['double-shot', 'heavy-arrow', 'high-shot', 'pocket-bow', ])
  static Maza = new ObjetosTipos('Maza', propsArma, ['flanged-mace', 'orb-wand', 'spiked-bat', 'warhammer'])
  static Casco = new ObjetosTipos('Casco', propsCasco, ['barbute', 'black-knight-helm', 'closed-barbute', 'crested-helmet', 'heavy-helm', 'spartan-helmet', 'visored-helm'])
  static Pechera = new ObjetosTipos('Pechera', propsPechera, ['abdominal-armor', 'heart-armor', 'leather-armor', 'leather-vest', 'mail-shirt', 'plastron', 'saiyan-suit', 'scale-mail', 'shoulder-armor', ])
  static Guantes = new ObjetosTipos('Guantes', propsGuantes, ['gauntlet', 'gloves', 'mailed-fist', ])
  static Botas = new ObjetosTipos('Botas', propsBotas, ['leg-armor', 'metal-boot', 'steeltoe-boots'])
  static Amuleto = new ObjetosTipos('Amuleto', propsAmuleto, ['emerald-necklace', 'feather-necklace', 'gem-chain', 'gem-necklace', 'gem-pendant', 'heart-necklace', 'necklace', 'pearl-necklace', 'pendant-key', 'prayer-beads', 'primitive-necklace', 'tribal-pendant', ])
  static Anillo = new ObjetosTipos('Anillo', propsAnillo,['big-diamond-ring', 'diamond-ring', 'globe-ring', 'power-ring', 'ring', 'skull-ring', 'skull-signet', 'torc', ])

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
  static raro = new Calidades('Raro', 'blue', 2)
  static magico = new Calidades('Mágico', 'yellow', 3)
  static sacro = new Calidades('Sacro', 'gold', 4)
  static ancestral = new Calidades('Ancestral', 'darkorange', 5)
  static unico = new Calidades('Único', 'green', 6)

  constructor(nombre, color, nProps){
    this.nombre = nombre
    this.color = color
    this.nProps = nProps
  }
}