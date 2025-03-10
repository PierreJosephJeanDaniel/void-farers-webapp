export interface ObjectProps {
  name: string;
  description: string;
  effect: string;
  isConsumable: boolean;
  quantity: number;
  rollAssist: string | null;
  rollModifier: number | null;
}

export const testObjec1: ObjectProps = {
  name: "Test Object",
  description: "This is a test object",
  effect: "This is a test effect",
  isConsumable: false,
  quantity: 1,
  rollAssist: "Test Roll Assist",
  rollModifier: 5,
};

export const testObjec2: ObjectProps = {
  name: "Test Object 2",
  description: "This is a test object 2",
  effect: "This is a test effect 2",
  isConsumable: true,
  quantity: 2,
  rollAssist: null,
  rollModifier: 0,
};
