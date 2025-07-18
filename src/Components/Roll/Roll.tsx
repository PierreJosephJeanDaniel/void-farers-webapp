// .tsx

export type RollType = "normal" | "advantage" | "disadvantage";
export type CriticalType = "success" | "fail" | undefined;

export interface RollResult {
  rawRolls: number[];
  finalRoll: number;
  total: number;
  critical: CriticalType;
}

/**
 * Rolls a d20 with optional modifier and roll type (normal, advantage, disadvantage).
 */
export function rollDice(modifier: number = 0, rollType: RollType = "normal"): RollResult {
  const rollD20 = () => Math.floor(Math.random() * 20) + 1;

  let rolls: number[] = [];

  if (rollType === "normal") {
    rolls = [rollD20()];
  } else {
    rolls = [rollD20(), rollD20()];
  }

  let selectedRoll: number;

  if (rollType === "advantage") {
    selectedRoll = Math.max(...rolls);
  } else if (rollType === "disadvantage") {
    selectedRoll = Math.min(...rolls);
  } else {
    selectedRoll = rolls[0];
  }

  const critical: CriticalType =
    selectedRoll === 20 ? "success" : selectedRoll === 1 ? "fail" : undefined;

  return {
    rawRolls: rolls,
    finalRoll: selectedRoll,
    total: selectedRoll + modifier,
    critical,
  };
}
