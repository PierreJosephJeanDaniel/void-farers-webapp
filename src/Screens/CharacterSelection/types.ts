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
