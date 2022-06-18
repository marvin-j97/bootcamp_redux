import ava from "ava";

import { TemperatureAction, getTemperatureAction } from "../src/task03_ac";

const fixture: [number, number, TemperatureAction][] = [
  [20, 20.5, TemperatureAction.Heat],
  [20.5, 20, TemperatureAction.Cool],
  [24, 20, TemperatureAction.Cool],
  [20, 27, TemperatureAction.Heat],
  [-5, 20, TemperatureAction.Heat],
  [35, 20, TemperatureAction.Cool],
  [20.49, 20, TemperatureAction.Idle],
  [20, 20.49, TemperatureAction.Idle],
  [25, 25.1, TemperatureAction.Idle],
  [30.5, 30.5, TemperatureAction.Idle],
];

const actionName: Record<TemperatureAction, string> = {
  [TemperatureAction.Idle]: "Idle",
  [TemperatureAction.Heat]: "Heat up",
  [TemperatureAction.Cool]: "Cool off",
};

fixture.forEach(([current, target, expected], i) => {
  ava.skip(
    `[${i}] ${current.toFixed(1)}° -> ${target.toFixed(1)}°: ${
      actionName[expected]
    }`,
    (t) => {
      t.is(
        actionName[getTemperatureAction(current, target)],
        actionName[expected]
      );
    }
  );
});
