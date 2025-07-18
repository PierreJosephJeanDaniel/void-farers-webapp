// RollTypeSelector.tsx
import React from "react";
import { RollType } from "@/Components/Roll/Roll";

interface RollTypeSelectorProps {
  onSelect: (type: RollType) => void;
  onClose: () => void;
}

export const RollTypeSelector: React.FC<RollTypeSelectorProps> = ({ onSelect, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Select Roll Type</h2>
        <button onClick={() => onSelect("normal")}>🎲 Normal</button>
        <button onClick={() => onSelect("advantage")}>💪 Advantage</button>
        <button onClick={() => onSelect("disadvantage")}>😓 Disadvantage</button>
        <button onClick={onClose}>❌ Cancel</button>
      </div>
    </div>
  );
};
