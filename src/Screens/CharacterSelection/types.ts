export interface Ability {
  [key: string]: number;
}

export interface CharacterProps {
  Abilities: Ability;
  Waits: Ability;
  Name: string;
  MaxHp: number;
  Hp: number;
  Armor: number;
  MaxArmor: number;
  Aegis: number;
  MaxAegis: number;
  IsDm: boolean;
  User: string;
  Inventory: ObjectProps[];
}

export interface ObjectProps {
  name: string;
  description: string;
  effect: string;
  isConsumable: boolean;
  quantity: number;
  rollAssist: string | null;
  rollModifier: number | null;
}

export enum WaitsList {
  WILL = "Will",
  ATHLETICS = "Athletics",
  INTELLIGENCE = "Intelligence",
  TOUGHNESS = "Toughness",
  SIGHT = "Sight",
}

export enum AbilitiesList {
  INSPIRATION = "Inspiration",
  PSYCHIC = "Psychic",
  SWEET_TALK = "Sweet Talk",
  NEGOTIATION = "Negotiation",
  FORTITUDE = "Fortitude",
  DODGING = "Dodging",
  SPRINTING = "Sprinting",
  CLIMBING = "Climbing",
  INFILTRATION = "Infiltration",
  MELEE = "Melee",
  BALLISTICS = "Ballistics",
  MEDICINE = "Medicine",
  ENERGY_WEAPONS = "Energy Weapons",
  COMPUTERS = "Computers",
  LANGUAGES = "Languages",
  WRESTLING = "Wrestling",
  ENGINE_OPERATIONS = "Engine Operations",
  THROWING = "Throwing",
  REPAIRS = "Repairs",
  HEAVY_WEAPONS = "Heavy Weapons",
  PILOTING = "Piloting",
  RIFLES = "Rifles",
  DOG_FIGHTING = "Dog Fighting",
  RECON = "Recon",
  ZERO_G = "Zero-G",
}
