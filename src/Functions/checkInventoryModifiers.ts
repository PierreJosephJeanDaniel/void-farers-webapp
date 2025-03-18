import {
  ABILITIES,
  AbilitiesList,
  ObjectProps,
  WAITS,
  WaitsList,
} from "../Screens/CharacterSelection/types";

type ListType = "abilities" | "waits";

export const checkInventoryModifiers = (
  props: Record<AbilitiesList, number> | Record<WaitsList, number>,
  inventory: ObjectProps[],
  listType: ListType
): Record<AbilitiesList, number> | Record<WaitsList, number> => {
  // Create a properly typed copy based on listType
  const updatedProps:
    | Record<AbilitiesList, number>
    | Record<WaitsList, number> =
    listType === "abilities"
      ? ({ ...props } as Record<AbilitiesList, number>)
      : ({ ...props } as Record<WaitsList, number>);

  inventory.forEach((object) => {
    if (object.rollModifier === null || object.rollModifier === undefined) {
      console.error(
        `Error: object ${object.name} has a rollModifier but no value`
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
    if (object.rollModifier === null || object.rollModifier === undefined) {
      console.error(
        `Error: object ${object.name} has a rollModifier but no value`
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
