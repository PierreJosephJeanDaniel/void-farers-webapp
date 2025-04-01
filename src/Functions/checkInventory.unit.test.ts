import { checkInventoryModifiers } from "./checkInventoryModifiers";
import { AbilityType, ObjectProps } from "@/Screens/CharacterSelection/types";

describe("checkInventoryModifiers", () => {
  it("should add modifiers for specific abilities", () => {
    // Arrange
    const props: AbilityType = {
      Inspiration: 10,
      Psychic: 5,
      "Sweet Talk": 3,
      Negotiation: 4,
      Fortitude: 6,
      Dodging: 7,
      Sprinting: 8,
      Climbing: 2,
      Infiltration: 1,
      Melee: 0,
      Ballistics: 0,
      Medicine: 0,
      "Energy Weapons": 0,
      Computers: 0,
      Languages: 0,
      Wrestling: 0,
      "Engine Operations": 0,
      Throwing: 0,
      Repairs: 0,
      "Heavy Weapons": 0,
      Piloting: 0,
      Rifles: 0,
      "Dog Fighting": 0,
      Recon: 0,
      "Zero-G": 0,
    };

    const inventory: ObjectProps[] = [
      {
        name: "Fortitude Test Object",
        description: "test description",
        effect: "test effect",
        isConsumable: true,
        quantity: 2,
        rollAssist: "Fortitude",
        rollModifier: 2,
        isActive: true,
        onConsume: null,
      },
      {
        name: "Psychic Test Object",
        description: "test description",
        effect: "test effect",
        isConsumable: true,
        quantity: 1,
        rollAssist: "Psychic",
        rollModifier: 1,
        isActive: true,
        onConsume: null,
      },
    ];

    // Act
    const result = checkInventoryModifiers(props, inventory, "abilities");

    // Assert
    expect(result).toEqual({
      ...props,
      Fortitude: 8,
      Psychic: 6,
    });
  });
});
