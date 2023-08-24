export class Prop {
  // ofensivo
  static Crtpro = new Prop('Crit prob', 5, 10)
  static CrtDmg = new Prop('Crit dmg', 10, 20)
  static Attspd = new Prop('Aspd', 3, 6)
  static FisDmg = new Prop('Physical dmg', 10, 20)
  static EleDmg = new Prop('Elemental dmg', 10, 20)
  static MagDmg = new Prop('Magical dmg', 10, 20)
  static EmoDmg = new Prop('Emotional dmg', 10, 20)
  static UsOfSk = new Prop('Useless offensive skill', 2, 8)
  static NiOfSk = new Prop('Nice offensive skill', 2, 8)
  static GoOfSk = new Prop('Good offensive skill', 2, 8)
  static NiOfSk = new Prop('Barely used niche skill (offensive)', 2, 8)
  static NotuOf = new Prop('Not your class skill (offensive)', 2, 8)

  // utilidad
  static VelMod = new Prop('Mov speed', 6, 12)
  static RecRec = new Prop('Resource recovery speed', 6, 12)
  static RedRec = new Prop('Resource use reduction', 2, 8)
  static VelReu = new Prop('Cooldown reduction', 5, 10)
  static ModHab = new Prop('Skill levels', 1, 4)
  static masTod = new Prop('All stats', 5, 10)
  static MasFue = new Prop('Str', 10, 20)
  static MasDes = new Prop('Dex', 10, 20)
  static MasCon = new Prop('Con', 10, 20)
  static MasInt = new Prop('Int', 10, 20)
  static UsUtSk = new Prop('Useless utility skill', 2, 8)
  static NiUtSk = new Prop('Nice utility skill', 2, 8)
  static GoUtSk = new Prop('Good utility skill', 2, 8)
  static NiUtSk = new Prop('Barely used niche skill (utility)', 2, 8)
  static Bugged = new Prop('Bugged stat', 8, 16)
  static NotuUt = new Prop('Not your class skill (utility)', 2, 8)
  // defensa
  static DmgRed = new Prop('All dmg reduction', 5, 10)
  static FisRed = new Prop('Phys dmg reduction', 10, 15)
  static EleRed = new Prop('Ele dmg reduction', 10, 15)
  static MagRed = new Prop('Magic dmg reduction', 10, 15)
  static EmoRed = new Prop('Emo dmg reduction', 10, 15)
  static MaxHps = new Prop('HP', 10, 20)
  static EvaPro = new Prop('Evade', 6, 12)
  static UsDeSk = new Prop('Useless deffensive skill', 2, 8)
  static NiDeSk = new Prop('Nice deffensive skill', 2, 8)
  static GoDeSk = new Prop('Good deffensive skill', 2, 8)
  static NiDeSk = new Prop('Barely used niche skill (deffensive)', 2, 8)
  static NotuDe = new Prop('Not your class skill (deffensive)', 2, 8)

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
    Prop.EmoDmg,
    Prop.UsOfSk,
    Prop.NiOfSk,
    Prop.GoOfSk,
    Prop.NiOfSk,
    Prop.Bugged,
    Prop.NotuOf,
  ])
  static Defensivo = new PropTipos('Defensivo',[
    Prop.DmgRed,
    Prop.FisRed,
    Prop.EleRed,
    Prop.EmoRed,
    Prop.MagRed,
    Prop.MaxHps,
    Prop.EvaPro,
    Prop.UsDeSk,
    Prop.NiDeSk,
    Prop.GoDeSk,
    Prop.NiDeSk,
    Prop.Bugged,
    Prop.NotuDe,
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
    Prop.UsUtSk,
    Prop.NiUtSk,
    Prop.GoUtSk,
    Prop.NiUtSk,
    Prop.Bugged,
    Prop.NotuUt,
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
const propsFragmento = [
  {tipo: PropTipos.Utilidad, peso:1},
  {tipo: PropTipos.Defensivo, peso:1},
  {tipo: PropTipos.Ofensivo, peso:1},
]

export class ObjetosTipos {
  static Espada = new ObjetosTipos('Sword', propsArma, ['broadsword', 'gladius', 'katana', 'stiletto', 'two-handed-sword', ])
  static Daga = new ObjetosTipos('Dagger', propsArma, ['curvy-knife', 'sacrificial-dagger', ])
  static Ballesta = new ObjetosTipos('Crossbow', propsArma, ['crossbow',])
  static Hacha = new ObjetosTipos('Haxe', propsArma, ['battle-axe', 'tomahawk'])
  static Arco = new ObjetosTipos('Bow', propsArma, ['double-shot', 'heavy-arrow', 'high-shot', 'pocket-bow', ])
  static Maza = new ObjetosTipos('Mace', propsArma, ['flanged-mace', 'orb-wand', 'spiked-bat', 'warhammer'])
  static Casco = new ObjetosTipos('Helm', propsCasco, ['barbute', 'black-knight-helm', 'closed-barbute', 'crested-helmet', 'heavy-helm', 'spartan-helmet', 'visored-helm'])
  static Pechera = new ObjetosTipos('Chest', propsPechera, ['abdominal-armor', 'heart-armor', 'leather-armor', 'leather-vest', 'mail-shirt', 'plastron', 'saiyan-suit', 'scale-mail', 'shoulder-armor', ])
  static Guantes = new ObjetosTipos('Gloves', propsGuantes, ['gauntlet', 'gloves', 'mailed-fist', ])
  static Botas = new ObjetosTipos('Boots', propsBotas, ['leg-armor', 'metal-boot', 'steeltoe-boots'])
  static Amuleto = new ObjetosTipos('Amulet', propsAmuleto, ['emerald-necklace', 'feather-necklace', 'gem-chain', 'gem-necklace', 'gem-pendant', 'heart-necklace', 'necklace', 'pearl-necklace', 'pendant-key', 'prayer-beads', 'primitive-necklace', 'tribal-pendant', ])
  static Anillo = new ObjetosTipos('Ring', propsAnillo,['big-diamond-ring', 'diamond-ring', 'globe-ring', 'power-ring', 'ring', 'skull-ring', 'skull-signet', 'torc', ])
  static Fragmento = new ObjetosTipos('Fragment', propsFragmento, ['nugget'])

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
  static raro = new Calidades('Rare', 'lightgrey', 2)
  static magico = new Calidades('Magic', 'darkgrey', 3)
  static sacro = new Calidades('Sacred', 'black', 4)
  static ancestral = new Calidades('Ancestral', 'yellow', 5)
  static legendario = new Calidades('Legendary', 'orange', 6)
  static primigeneo = new Calidades('Ancient', 'red', 7)
  static unico = new Calidades('Unic', 'gold', 8)

  constructor(nombre, color, nProps){
    this.nombre = nombre
    this.color = color
    this.nProps = nProps
  }
}

export class Estados{
  static Bloqueado = new Estados('Bloqueado', 'No se puede borrar, ni modificar','l')
  static Basura = new Estados('Basura', 'Se recicla automáticamente','t')

  constructor(nombre, descripcion, tecla){
    this.nombre = nombre
    this.descripcion = descripcion
    this.tecla = tecla
  }
    
}