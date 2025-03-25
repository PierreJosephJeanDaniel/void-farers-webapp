import { ChatMessage, ChatRoll } from "../Components/SideChat/SideChat";

/**
 * Parses a `ChatMessage`, looking for a `/r` command to roll dice, then calls `rollDice` to calculate the total value of the dice rolled if needed and returns the appropriate message type. The expression also accepts additional roles and hard numbers (e.g. `/r 1d20 + 5 + 2d6`). If a 1d20 is rolled and the value is 20, the `critical` property will be set to `"success"`. If a d20 is rolled and the value is 1, the `critical` property will be set to `"fail"`. ONLY 1d20 CAN TRIGGER CRITICALS!
 * @param {ChatMessage} message - The message to parse
 * @returns {ChatRoll | ChatMessage} The parsed message, which is either a `ChatRoll` if `/r` has been detected or the original `ChatMessage` otherwise
 */
export function parseMessage(message: ChatMessage): ChatRoll | ChatMessage {
  const rollRegex = /^\/r\s((\d+d\d+|\d+)(\s*\+\s*(\d+d\d+|\d+))*)/;
  const match = message.message.match(rollRegex);

  if (match) {
    const diceExpressions = match[1].split("+").map((expr) => expr.trim());
    let totalRollValue = 0;
    let critical: undefined | "success" | "fail" = undefined;
    diceExpressions.map((expr) => {
      if (expr.includes("d")) {
        const [numDice, dieValue] = expr.split("d").map(Number);
        const rollValue = rollDice(numDice, dieValue);
        if (expr.includes("1d20") && rollValue === 20) {
          critical = "success";
        } else if (expr.includes("d20") && rollValue === 1) {
          critical = "fail";
        }
        totalRollValue += rollValue;
      } else {
        totalRollValue += Number(expr);
      }
    });

    const parsedMessage: ChatRoll = {
      author: message.author,
      rollType: diceExpressions.join(" + "),
      rollValue: totalRollValue,
      critical: critical,
      colorId: message.colorId,
    };
    return parsedMessage;
  }

  return message;
}

/**
 * Rolls `numDice` of `dieValue` and returns the total
 * @param {number} numDice - The number of dice to roll
 * @param {number} dieValue - The number of sides on the die
 * @returns {number} The total value of the dice rolled
 */
function rollDice(numDice: number, dieValue: number): number {
  let total = 0;
  for (let i = 0; i < numDice; i++) {
    total += Math.floor(Math.random() * dieValue) + 1;
  }
  return total;
}
