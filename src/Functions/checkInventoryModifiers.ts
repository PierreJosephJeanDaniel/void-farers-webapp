import {
  ABILITIES,
  AbilitiesList,
  ObjectProps,
  WAITS,
  WaitsList,
} from "@/Screens/CharacterSelection/types";

type ListType = "abilities" | "waits";

/**
 * Check the inventory for objects that modify abilities or waits and update the record of `AbilitiesList` or `WaitsList` with their modifiers. If an object has a `rollAssist` of "all", it will apply its modifier to all abilities or waits. If an object has a `rollAssist` for a valid `ability` or `waits`, which is so far absent from the list, it will add said ability or waits to the record, with a modifier of `rollModifier - 1`.
 * @param {Record<AbilitiesList, number> | Record<WaitsList, number>} props - The record of abilities or waits with their initial modifiers as numbers
 * @param {ObjectProps[]} inventory  - The inventory of objects to check for modifiers
 * @param {ListType} listType - The type of list to check for modifiers
 * @returns {Record<AbilitiesList, number> | Record<WaitsList, number>} The updated record of abilities or waits with their modifiers as numbers
 */
export const checkInventoryModifiers = (
  props: Record<AbilitiesList, number> | Record<WaitsList, number>,
  inventory: ObjectProps[],
  listType: ListType,
): Record<AbilitiesList, number> | Record<WaitsList, number> => {
  // Create a properly typed copy based on listType
  const updatedProps:
    | Record<AbilitiesList, number>
    | Record<WaitsList, number> =
    listType === "abilities"
      ? ({ ...props } as Record<AbilitiesList, number>)
      : ({ ...props } as Record<WaitsList, number>);

  inventory.forEach((object) => {
    if (object.rollAssist && object.rollModifier === undefined) {
      console.error(
        `Error: object ${object.name} has a rollAssist but no rollModifier value`,
      );
      return;
    }

    if (object.rollAssist) {
      const key = object.rollAssist as string;
      if (
        (listType === "abilities" &&
          Object.values(ABILITIES).includes(key as AbilitiesList)) ||
        (listType === "waits" &&
          Object.values(WAITS).includes(key as WaitsList))
      ) {
        if (!(key in updatedProps)) {
          if (listType === "abilities") {
            (updatedProps as Record<AbilitiesList, number>)[
              key as AbilitiesList
            ] = (object.rollModifier || 0) - 1;
          } else {
            (updatedProps as Record<WaitsList, number>)[key as WaitsList] =
              (object.rollModifier || 0) - 1;
          }
        } else {
          if (listType === "abilities") {
            (updatedProps as Record<AbilitiesList, number>)[
              key as AbilitiesList
            ] += object.rollModifier || 0;
          } else {
            (updatedProps as Record<WaitsList, number>)[key as WaitsList] +=
              object.rollModifier || 0;
          }
        }
      }
    }
  });

  inventory.forEach((object) => {
    if (object.rollAssist && object.rollModifier === undefined) {
      console.error(
        `Error: object ${object.name} has a rollAssist but no rollModifier value`,
      );
      return;
    }
    if (object.rollAssist === "all") {
      Object.keys(updatedProps).forEach((key) => {
        if (listType === "abilities") {
          const typedProps = updatedProps as Record<AbilitiesList, number>;
          typedProps[key as unknown as AbilitiesList] +=
            object.rollModifier || 0;
        } else {
          const typedProps = updatedProps as Record<WaitsList, number>;
          typedProps[key as unknown as WaitsList] += object.rollModifier || 0;
        }
      });
    }
  });
  return updatedProps;
};
