export type AbilityType = {
  [key in AbilitiesList]: number;
};

export type WaitsType = {
  [key in WaitsList]: number;
};

export interface CharacterProps {
  Abilities: AbilityType;
  Waits: WaitsType;
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
  rollAssist: WaitsList | AbilitiesList | null | "all";
  rollModifier: number | null;
}

export const WAITS = {
  WILL: "Will",
  ATHLETICS: "Athletics",
  INTELLIGENCE: "Intelligence",
  TOUGHNESS: "Toughness",
  SIGHT: "Sight",
} as const;

export const ABILITIES = {
  INSPIRATION: "Inspiration",
  PSYCHIC: "Psychic",
  SWEET_TALK: "Sweet Talk",
  NEGOTIATION: "Negotiation",
  FORTITUDE: "Fortitude",
  DODGING: "Dodging",
  SPRINTING: "Sprinting",
  CLIMBING: "Climbing",
  INFILTRATION: "Infiltration",
  MELEE: "Melee",
  BALLISTICS: "Ballistics",
  MEDICINE: "Medicine",
  ENERGY_WEAPONS: "Energy Weapons",
  COMPUTERS: "Computers",
  LANGUAGES: "Languages",
  WRESTLING: "Wrestling",
  ENGINE_OPERATIONS: "Engine Operations",
  THROWING: "Throwing",
  REPAIRS: "Repairs",
  HEAVY_WEAPONS: "Heavy Weapons",
  PILOTING: "Piloting",
  RIFLES: "Rifles",
  DOG_FIGHTING: "Dog Fighting",
  RECON: "Recon",
  ZERO_G: "Zero-G",
} as const;

export type ObjectValues<T> = T[keyof T];
export type AbilitiesList = ObjectValues<typeof ABILITIES>;
export type WaitsList = ObjectValues<typeof WAITS>;

export const testInventory: ObjectProps[] = [
  {
    name: "test",
    description: "test",
    effect: "test",
    isConsumable: false,
    quantity: 1,
    rollAssist: "all",
    rollModifier: 3,
  },
  {
    name: "test2",
    description: "test2",
    effect: "test2",
    isConsumable: false,
    quantity: 1,
    rollAssist: WAITS.WILL,
    rollModifier: 5,
  },
  {
    name: "test2",
    description: "test2",
    effect: "test2",
    isConsumable: false,
    quantity: 1,
    rollAssist: ABILITIES.INSPIRATION,
    rollModifier: 5,
  },
  {
    name: "test2",
    description: "test2",
    effect: "test2",
    isConsumable: false,
    quantity: 1,
    rollAssist: ABILITIES.PILOTING,
    rollModifier: 1,
  },
  {
    name: "test2",
    description: "test2",
    effect: "test2",
    isConsumable: false,
    quantity: 1,
    rollAssist: ABILITIES.FORTITUDE,
    rollModifier: 2,
  },
];
