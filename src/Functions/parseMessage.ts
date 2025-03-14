import { ChatMessage, ChatRoll } from "../Components/SideChat/SideChat";

export function parseMessage(message: ChatMessage): ChatRoll | ChatMessage {
  const rollRegex = /^\/r\s(\d+)d(\d+)/;
  const match = message.message.match(rollRegex);

  if (match) {
    const numDice = parseInt(match[1], 10);
    const dieValue = parseInt(match[2], 10);
    const rollValue = rollDice(numDice, dieValue);

    const parsedMessage: ChatRoll = {
      author: message.author,
      rollType: numDice + "d" + dieValue,
      rollValue: rollValue,
    };
    return parsedMessage;
  }

  return message;
}

function rollDice(numDice: number, dieValue: number): number {
  let total = 0;
  for (let i = 0; i < numDice; i++) {
    total += Math.floor(Math.random() * dieValue) + 1;
  }
  return total;
}
