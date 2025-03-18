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
  onConsume: string | null;
  quantity: number;
  rollAssist: WaitsList | AbilitiesList | null | "all";
  rollModifier: number | null;
  isActive: boolean;
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

export const Consumables = {
  HEALTH: "Health",
  ARMOR: "Armor",
  AEGIS: "Aegis",
} as const;

export const PASSIVE_EFFECTS = {
  HEALTH: "Health",
  ARMOR: "Armor",
  AEGIS: "Aegis",
} as const;

export type ObjectValues<T> = T[keyof T];
export type AbilitiesList = ObjectValues<typeof ABILITIES>;
export type WaitsList = ObjectValues<typeof WAITS>;

export const testInventory: ObjectProps[] = [
  {
    name: "Pendant of the Master of None",
    description:
      "Upon wearing this pendant, you realize that your ADHD is actually a superpower.",
    effect: "+1 to all rolls",
    isConsumable: false,
    onConsume: null,
    quantity: 1,
    rollAssist: "all",
    rollModifier: 1,
    isActive: true,
  },
  {
    name: "Mind Fortress",
    description: "You are one with yourself, one with the universe.",
    effect: "+5 to Will",
    isConsumable: false,
    onConsume: null,
    quantity: 1,
    rollAssist: WAITS.WILL,
    rollModifier: 5,
    isActive: true,
  },
  {
    name: "StimulHealth",
    description:
      "After a shot of this you feel like a butterfly, ready to fly again. Become addicted and you must just live as long...",
    effect: "Restores health to its maximum",
    isConsumable: true,
    onConsume: "Health",
    quantity: 3,
    rollAssist: null,
    rollModifier: null,
    isActive: true,
  },
];
